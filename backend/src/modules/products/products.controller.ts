import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  Query,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import { ProductsService } from "./products.service";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
// import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import * as fs from "fs";
import { FileInterceptor } from "@nestjs/platform-express/multer";
import { v4 as uuid4 } from 'uuid';
import { ApiTags } from "@nestjs/swagger";

@ApiTags('Products')
@Controller("products")
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async getAll(
    @Query("take") take: number = 1,
    @Query("skip") skip: number = 1
  ) {
    take = take > 20 ? 20 : take;
    return await this.productsService.getAll(take, skip);
  }

  @Get("test")
  async testingFileUpload() {
    const filePath = "/usr/src/app/uploads/test.txt";
    try {
      fs.writeFileSync(filePath, "Test write successful");
      return { success: true };
    } catch (error) {
      console.error("Error writing file:", error);
      return { success: false, error: error.message };
    }
  }

  @Post()
  async create(@Body() body: CreateProductDto) {
    return await this.productsService.create(body);
  }

  // @Post("/productImage")
  // @UseInterceptors(
  //   FileInterceptor("file", {
  //     storage: diskStorage({
  //       destination: "./uploads",
  //       filename: (req, file, cb) => {
  //         const name = file.originalname.split(".")[0];
  //         const fileExtension = file.originalname.split(".")[1];
  //         const newFileName =
  //           name.split(" ").join("_") + "_" + Date.now() + "_" + fileExtension;

  //         cb(null, newFileName);
  //       },
  //     }),
  //     fileFilter: (req, file, cb) => {
  //       if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
  //         return cb(null, false);
  //       }
  //       cb(null, true);
  //     },
  //   })
  // )
  // async uploadFile(@UploadedFile() file: Express.Multer.File) {
  //   console.log(file);
  // }

  @Post("/productImage")
  @UseInterceptors(FileInterceptor("file", {
    storage: diskStorage({
      destination: "./uploads",
      filename: (req, file, cb) => {
        const name = file.originalname.split(".")[0];
        const fileExtension = file.originalname.split(".")[1];
        const newFileName =
          name.split(" ").join("_") + "_" + Date.now() + "_" + uuid4() + "_." + fileExtension;

        cb(null, newFileName);
      },
    }),
  }))
  async uploadFile(@UploadedFile() file) {
    try {
      // Lógica para gerar o novo nome de arquivo (se desejar)
      const name = file.originalname.split(".")[0];
      const fileExtension = file.originalname.split(".")[1];
      const newFileName =
        name.split(" ").join("_") + "_" + Date.now() + "_" + fileExtension;

      // Adiciona o novo nome de arquivo ao objeto de arquivo
      const fileWithNewName = {
        ...file,
        originalname: newFileName,
      };

      // Chama o serviço para lidar com o upload
      const result = await this.productsService.handleFileUpload(fileWithNewName);
      return result;
    } catch (error) {
      console.error('Erro durante o upload do arquivo:', error);
      throw new Error('Falha ao processar o upload do arquivo');
    }
  }

  @Put(":id")
  async update(
    @Body() body: UpdateProductDto,
    @Param("id", new ParseUUIDPipe()) id: string
  ) {
    return await this.productsService.update(id, body);
  }

  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param("id", new ParseUUIDPipe()) id: string) {
    return this.productsService.delete(id);
  }
}
