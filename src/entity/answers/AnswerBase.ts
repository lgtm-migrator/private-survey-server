import { Base } from "../Base";
import { Column, Entity, TableInheritance, ManyToOne } from "typeorm";
import { SurveyAnswers } from "./SurveyAnswers";

@Entity()
@TableInheritance({ column: { type: "nvarchar", name: "answer_type" } })
export class AnswerBase extends Base {

    @Column({ comment: "reference question id of this answer" })
    questionId: string;


    @ManyToOne(t => SurveyAnswers, s => s.answers)
    parent: Promise<SurveyAnswers>;

}