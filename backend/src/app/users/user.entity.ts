import { Column, CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class UserEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ name: "first_name" })
  firstName: string;

  @Column({ name: "last_name" })
  lastName: string;

  @Column({ name: "email" })
  email: string;

  @Column({ name: "password" })
  password: string;

  @CreateDateColumn({ name: "createdAt" })
  createdAt: string;

  @UpdateDateColumn({ name: "updatedAt" })
  updatedAt: string;

  @DeleteDateColumn({ name: "deletedAt" })
  deletedAt: string;
}
