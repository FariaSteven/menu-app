import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUUID,
  IsArray,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

class CategoryDto {
  @IsUUID()
  id: string;
}

export class UpdateProductDto {
  @ApiProperty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CategoryDto)
  categories: CategoryDto[];

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  qty: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  photo: string;
}
