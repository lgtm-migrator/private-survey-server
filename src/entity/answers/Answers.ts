import { Column, Entity } from "typeorm";
import { Base } from "../Base";


@Entity()
export class Answers extends Base {

    @Column({ type: "nvarchar", length: 255, nullable: true })
    user: string;

    @Column({ type: "nvarchar", length: 255, nullable: true })
    phone: string;

    @Column({ type: "nvarchar", length: 255, nullable: true })
    address: string;

}