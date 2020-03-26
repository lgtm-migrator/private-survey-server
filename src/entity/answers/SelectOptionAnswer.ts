import { AnswerBase } from "./AnswerBase";
import { Entity, OneToOne, JoinColumn, ChildEntity } from "typeorm";
import { SelectOption } from "../question/SelectOption";


/**
 * reference a reuseable select option
 */
@ChildEntity()
export class SelectOptionAnswer extends AnswerBase {

    @OneToOne(type => SelectOption)
    @JoinColumn()
    selectOption: Promise<SelectOption>;

}