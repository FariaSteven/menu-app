import { Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { ProductsEntity } from "./entities/products.entity";
import path, { dirname, join } from "path";
import { createReadStream, createWriteStream } from 'fs';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductsEntity)
    private readonly productsRepository: Repository<ProductsEntity>
  ) {}

  async getAll(take: number = 10, skip: number = 0) {
    return await this.productsRepository
      .findAndCount({
        skip,
        take,
        relations: ["categories"],
        select: ["id", "categories", "name", "qty", "price", "photo"],
      })
      .then(([products]) => {
        return products;
      });
  }

  async create(data: CreateProductDto) {
    const product = await this.productsRepository.create(data);
    return await this.productsRepository.save(product);
  }

  async handleFileUpload(file): Promise<string> {
    try {
      // Lógica de upload (salvar no banco de dados, etc.)
      const filePath = join(__dirname, '..', 'uploads', file.filename);
      console.log('Caminho do diretório:', dirname(filePath));
      const writeStream = createWriteStream(filePath);
      createReadStream(file.path).pipe(writeStream);
      writeStream.end();

      // Chama o script ou função de cópia
      await this.copyFilesToHost();

      return 'Arquivo enviado com sucesso';
    } catch (error) {
      console.error('Erro durante o upload do arquivo:', error);
      throw new Error('Falha ao processar o upload do arquivo');
    }
  }

  private async copyFilesToHost(): Promise<void> {
    // Lógica para chamar o script ou a função de cópia
    // Pode usar child_process, exec, ou outro método
    // Exemplo:
    const { exec } = require('child_process');
    exec('./after-upload.sh', (error, stdout, stderr) => {
      if (error) {
        console.error(`Erro ao executar o script: ${error.message}`);
        return;
      }
      console.log(`Script executado com sucesso: ${stdout}`);
    });
  }
  

  async getOne(id: string) {
    try {
      return await this.productsRepository.findOne({
        where: { id },
        relations: ["categories"],
      });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async update(id: string, data: UpdateProductDto) {
    const product = await this.getOne(id);
    this.productsRepository.merge(product, data);
    return await this.productsRepository.save(product);
  }

  async delete(id: string) {
    await this.getOne(id);
    this.productsRepository.softDelete({ id });
  }
}
