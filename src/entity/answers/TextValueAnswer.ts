import { AnswerBase } from "./AnswerBase";
import { Entity, Column, ChildEntity } from "typeorm";

@ChildEntity()
export class TextValueAnswer extends AnswerBase {

    @Column({ length: 10240, type: "nvarchar" })
    value: string;

}