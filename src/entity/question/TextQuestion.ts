import { QuestionBase } from "./QuestionBase";
import { ChildEntity, Column } from "typeorm";


@ChildEntity()
export class TextQuestion extends QuestionBase {

    @Column({ type: "integer", comment: "the max length of text", default: 255 })
    maxLength: number;

}