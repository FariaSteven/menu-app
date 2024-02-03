import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseUUIDPipe, Post, Put } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";

@Controller("/users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAll() {
    return await this.userService.getAll();
  }

  @Post()
  async create(@Body() body: CreateUserDto) {
    return await this.userService.create(body);
  }

  @Get(":id")
  async getOne(@Param("id", new ParseUUIDPipe()) id: string) {
    return await this.userService.getOne(id);
  }

  @Put(":id")
  async update(@Body() body: CreateUserDto, @Param("id", new ParseUUIDPipe()) id: string) {
    return await this.userService.update(id, body);
  }

  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param("id", new ParseUUIDPipe()) id: string) {
    return this.userService.delete(id);
  }
}
