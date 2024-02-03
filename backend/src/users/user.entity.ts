import { BeforeInsert, Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { hashSync } from 'bcrypt'

@Entity({ name: 'users' })
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

  @BeforeInsert()
  hashPassword() {
    this.password = hashSync(this.password, 10)
  }
}
