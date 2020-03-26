import { Base } from "../Base";
import { Entity, Column, ManyToOne } from "typeorm";
import { SelectQuestion } from "./SelectQuestion";

@Entity()
export class SelectOption extends Base {

    constructor(title = "", order = 0, description = "") {
        super();
        this.order = order;
        this.title = title;
        this.description = description;
    }

    @Column({ type: "int" })
    order = 0;

    @Column({ type: "nvarchar", length: 255, comment: "the title of this option" })
    title: string;

    @Column({ type: "nvarchar", length: 1024, comment: "the description of this option", nullable: true })
    description: string;

    @ManyToOne(type => SelectQuestion, q => q.options)
    question: Promise<SelectQuestion>;

}