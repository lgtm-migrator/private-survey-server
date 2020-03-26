import { Base } from "../Base";
import { Column, Entity, TableInheritance } from "typeorm";

@Entity()
@TableInheritance({ column: { type: "nvarchar", name: "answer_type" } })
export class AnswerBase extends Base {

    @Column({ comment: "reference question id of this answer" })
    questionId: string;

}