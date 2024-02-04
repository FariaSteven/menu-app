import { Module } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { ProductsController } from "./products.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductsEntity } from "./entities/products.entity";
import { MulterModule } from "@nestjs/platform-express";
import path from "path";

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductsEntity]),
    MulterModule.register({
      dest: './uploads',
    }),
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
  exports: [ProductsService],
})
export class ProductsModule {}
