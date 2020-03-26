import { Column, TableInheritance, Entity, ManyToOne } from "typeorm";
import { Base } from "../Base";
import { SurveyTemplate } from "../survey/SurveyTemplate";

/**
 * sub classes are used to store the question configuration
 */
@Entity()
@TableInheritance({ column: { type: "nvarchar", name: "question_type" } })
export class QuestionBase extends Base {

    constructor(question = "", order = 0) {
        super();
        this.question = question;
        this.order = order;
    }

    @Column({ type: "int", default: 0, comment: "the order of this question in a survey" })
    order: number;

    @Column({ length: 255, type: "nvarchar", comment: "the question title" })
    question: string;

    @Column({ length: 1024, type: "nvarchar", comment: "the question description", nullable: true })
    description: string;

    @Column({ type: "tinyint", comment: "is this question could be skipped", default: false })
    optional: boolean;

    @ManyToOne(type => SurveyTemplate, s => s.questions)
    survey: SurveyTemplate[];


}