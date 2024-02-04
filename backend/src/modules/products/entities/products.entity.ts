import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  JoinTable,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from "typeorm";
import { Category } from "./category.entity";

@Entity({ name: "products" })
export class ProductsEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToMany((type) => Category)
  @JoinTable()
  categories: Category[];

  @Column({ name: "name" })
  name: string;

  @Column({ name: "qty" })
  qty: number;

  @Column({ name: "price" })
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
