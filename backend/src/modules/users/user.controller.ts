import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseUUIDPipe, Post, Put, UseGuards } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { AuthGuard } from "@nestjs/passport";

@Controller("/users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  async getAll() {
    return await this.userService.getAll();
  }

  @Post()
  
  async create(@Body() body: CreateUserDto) {
    return await this.userService.create(body);
  }

  @Get(":id")
  @UseGuards(AuthGuard('jwt'))
  async getOne(@Param("id", new ParseUUIDPipe()) id: string) {
    return await this.userService.getOne(id);
  }

  @Put(":id")
  @UseGuards(AuthGuard('jwt'))
  async update(@Body() body: CreateUserDto, @Param("id", new ParseUUIDPipe()) id: string) {
    return await this.userService.update(id, body);
  }

  @Delete(":id")
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param("id", new ParseUUIDPipe()) id: string) {
    return this.userService.delete(id);
  }
}
