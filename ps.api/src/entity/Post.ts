import { BaseEntity } from "./BaseEntity";
import { Entity, Column } from "typeorm";

@Entity({ name: 'Post' })
export default class Post extends BaseEntity {

    @Column({ type: 'varchar', length: 500 })
    description: string;

    @Column({ type: 'varchar', length: 100, nullable: true })
    latitude: string;

    @Column({ type: 'varchar', length: 100, nullable: true })
    longitude: string;

    @Column({ type: 'varchar', length: 500, nullable: true })
    photo: string;

}