import { Entity, Column, ChildEntity } from "typeorm";
import { AnswerBase } from "./AnswerBase";

@ChildEntity()
export class NumberValueAnswer extends AnswerBase {

    @Column({ type: "float" })
    value = 0;

}