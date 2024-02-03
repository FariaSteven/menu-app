import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity({ name: 'categories' })
export class Category {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(type => Category, { nullable: true })
  parent: Category | null;

  @Column({ name: 'name' })
  name: string;

  @OneToMany(type => Category, category => category.parent)
  subcategories: Category[];
}