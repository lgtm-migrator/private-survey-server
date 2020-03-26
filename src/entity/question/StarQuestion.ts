import { QuestionBase } from "./QuestionBase";
import { Column, ChildEntity } from "typeorm";

export enum StarQuestionValueType {
    INTEGER = "INTEGER",
    FLOAT = "FLOAT",
}

export enum StarQuestionStyle {
    STAR = "STAR",
}

@ChildEntity()
export class StarQuestion extends QuestionBase {

    @Column({ type: "int", comment: "max value" })
    max = 5

    @Column({ enum: StarQuestionStyle, default: StarQuestionStyle.STAR })
    style: StarQuestionStyle;

    @Column({
        enum: StarQuestionValueType,
        default: StarQuestionValueType.INTEGER,
        comment: "the value type"
    })
    valueType: StarQuestionValueType;

}