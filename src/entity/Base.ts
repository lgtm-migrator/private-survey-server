import { BaseEntity, PrimaryColumn, Generated } from "typeorm";

export abstract class Base extends BaseEntity {

    @PrimaryColumn()
    @Generated("uuid")
    uuid: string;

}