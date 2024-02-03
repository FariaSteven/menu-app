import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsEntity } from './products.entity';


@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductsEntity)
    private readonly productsRepository: Repository<ProductsEntity>
  ) {}

  async getAll() {
    return await this.productsRepository.find({
      select: ["id", "firstName", "lastName", "email"],
    });
  }

  async create(data: CreateProductDto) {
    const product = await this.productsRepository.create(data);
    return await this.productsRepository.save(product);
  }

  async getOne(id: string) {
    try {
        return await this.productsRepository.findOneBy({ id });
    } catch (error) {
        throw new NotFoundException(error.message)
    }
  }

  async getOneByEmail(email: string) {
    try {
        return await this.productsRepository.findOneBy({ email });
    } catch (error) {
        throw new NotFoundException(error.message)
    }
  }

  async update(id: string, data: UpdateProductDto) {
    const product = await this.getOne(id);
    this.productsRepository.merge(product, data)
    return await this.productsRepository.save(product);
  }

  async delete(id: string) {
    await this.getOne(id);
    this.productsRepository.softDelete({id});
  }
}
