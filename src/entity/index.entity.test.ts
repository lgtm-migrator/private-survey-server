import { createConnection, Connection } from "typeorm";
import { entities } from ".";
import { SurveyVersion } from "./survey/SurveyVersion";
import { TextQuestion } from "./question/TextQuestion";
import { StarQuestion } from "./question/StarQuestion";
import { NumberQuestion } from "./question/NumberQuestion";
import { SelectQuestion } from "./question/SelectQuestion";
import { SelectOption } from "./question/SelectOption";

describe('Entities Test Suite', () => {

    let conn: Connection;

    beforeAll(async () => {
        conn = await createConnection({
            type: "sqlite",
            database: ":memory:",
            entities: entities as any,
            synchronize: true, // sync
        });
    });

    it('should setup connection', () => {
        expect(conn).not.toBeNull();
    });

    it('should create a simple survey', async () => {

        const survey = new SurveyVersion("survey 1");


        const q1 = new TextQuestion("Your Name?", 0);
        await q1.save();
        expect(q1.uuid).not.toBeUndefined();

        const q2 = new StarQuestion("Satisfaction?", 1);
        await q2.save();

        const q3 = new NumberQuestion("Your Age?", 2);
        await q3.save();

        const q4 = new SelectQuestion("Where are you come from?", 3);


        q4.options = Promise.resolve(
            await conn.manager.save([
                new SelectOption("Sichuan", 0),
                new SelectOption("Beijing", 1),
                new SelectOption("Berlin", 2)
            ])
        );

        await q4.save();

        survey.questions = Promise.resolve([q1, q2, q3, q4]);

        await survey.save(); // create uuid

        expect(survey.uuid).not.toBeUndefined();

        (await survey.questions).forEach(q => {
            expect(q.uuid).not.toBeUndefined();
        });

    });

    it('should query survey 1', async () => {

        const s = await SurveyVersion.findOne({
            where: { title: "survey 1" },
            relations: ["questions"]
        });

        const questions = await s.questions;

        expect(questions.length).toBe(4);
        expect(questions[0] instanceof TextQuestion).toBeTruthy();
        expect(questions[1] instanceof StarQuestion).toBeTruthy();

    });

    it('should query select options', async () => {
        const q3 = await SelectQuestion.findOne({
            where: { question: "Where are you come from?" },
            relations: ["options"],
        });
        const options = await q3.options;

        expect(options.length).toBe(3);
        expect(options[0].title).toBe("Sichuan");
        expect((await options[1].question).uuid).toBe(q3.uuid);
    });

    afterAll(async () => {
        await conn.close();
    });

});