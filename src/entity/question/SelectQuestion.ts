import { Column, OneToMany, ChildEntity } from "typeorm";
import { QuestionBase } from "./QuestionBase";
import { SelectOption } from "./SelectOption";

@ChildEntity()
export class SelectQuestion extends QuestionBase {

    @Column({ type: "tinyint", comment: "allow multi select for user" })
    multiSelect = false;

    @OneToMany(type => SelectOption, o => o.question)
    options: Promise<SelectOption[]>;

}