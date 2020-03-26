import { Base } from "../Base";
import { Column, Entity, OneToMany, } from "typeorm";
import { QuestionBase } from "../question/QuestionBase";

@Entity()
export class SurveyTemplate extends Base {

    constructor(title = "", version = 0, description = "") {
        super();
        this.title = title;
        this.versionNumber = version;
        this.description = description;
    }

    @Column({ type: "nvarchar", length: 512 })
    title: string;

    @Column({ type: "nvarchar", length: 1024, nullable: true })
    description: string;

    @Column({ type: "integer", default: 0, comment: "the version number for current survey" })
    versionNumber: number;

    @OneToMany(type => QuestionBase, q => q.survey)
    questions: QuestionBase[];


}