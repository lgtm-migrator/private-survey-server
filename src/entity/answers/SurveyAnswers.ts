import { Column, Entity, OneToMany } from "typeorm";
import { Base } from "../Base";
import { AnswerBase } from "./AnswerBase";


@Entity()
export class SurveyAnswers extends Base {

    @Column({ type: "nvarchar", length: 255, nullable: true })
    user: string;

    @Column({ type: "nvarchar", length: 255, nullable: true })
    phone: string;

    @Column({ type: "nvarchar", length: 255, nullable: true })
    address: string;

    @OneToMany(type => AnswerBase, a => a.parent)
    answers: Promise<AnswerBase[]>

}