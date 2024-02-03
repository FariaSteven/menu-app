import { BeforeInsert, Column, CreateDateColumn, Entity, ManyToMany, JoinTable, PrimaryGeneratedColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";
import { hashSync } from 'bcrypt';
import { Category } from "./category.entity";

@Entity({ name: 'products' })
export class ProductEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToMany(type => Category)
  @JoinTable()
  categories: Category[];

  @Column({ name: "name" })
  name: string;

  @Column({ name: "qty", type: 'int' })
  qty: number;

  @Column({ name: "price", type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column({ name: "photo" })
  photo: string;

  @CreateDateColumn({ name: "createdAt" })
  createdAt: string;

  @UpdateDateColumn({ name: "updatedAt" })
  updatedAt: string;

  @DeleteDateColumn({ name: "deletedAt" })
  deletedAt: string;

}
