import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseUUIDPipe, Post, Put, UseGuards } from "@nestjs/common";
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { AuthGuard } from "@nestjs/passport";

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  async getAll() {
    return await this.productsService.getAll();
  }

  @Post()
  @UseGuards(AuthGuard('jwt')) 
  async create(@Body() body: CreateProductDto) {
    return await this.productsService.create(body);
  }

  @Get(":id")
  @UseGuards(AuthGuard('jwt'))
  async getOne(@Param("id", new ParseUUIDPipe()) id: string) {
    return await this.productsService.getOne(id);
  }

  @Put(":id")
  @UseGuards(AuthGuard('jwt'))
  async update(@Body() body: UpdateProductDto, @Param("id", new ParseUUIDPipe()) id: string) {
    return await this.productsService.update(id, body);
  }

  @Delete(":id")
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param("id", new ParseUUIDPipe()) id: string) {
    return this.productsService.delete(id);
  }
}
