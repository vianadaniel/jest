import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("companies")
export class Company {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ length: 50 })
  name!: string;

  @Column({ length: 14 })
  cnpj!: string;
}
