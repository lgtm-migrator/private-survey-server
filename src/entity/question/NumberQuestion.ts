import { QuestionBase } from "./QuestionBase";
import { ChildEntity } from "typeorm";


@ChildEntity()
export class NumberQuestion extends QuestionBase {

}