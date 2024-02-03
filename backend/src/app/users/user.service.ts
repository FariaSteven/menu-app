import { Injectable, NotFoundException } from "@nestjs/common";
import { FindOneOptions, Repository } from "typeorm";
import { UserEntity } from "./user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { UpdateUserDto } from "./dto/update-user.dto";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) {}

  async getAll() {
    return await this.userRepository.find({
      select: ["id", "firstName", "lastName", "email"],
    });
  }

  async create(data: CreateUserDto) {
    const user = await this.userRepository.create(data);
    return await this.userRepository.save(user);
  }

  async getOne(id: string) {
    try {
        return await this.userRepository.findOneBy({ id });
    } catch (error) {
        throw new NotFoundException(error.message)
    }
  }

  async update(id: string, data: UpdateUserDto) {
    const user = await this.getOne(id);
    this.userRepository.merge(user, data)
    return await this.userRepository.save(user);
  }

  async delete(id: string) {
    await this.getOne(id);
    this.userRepository.softDelete({id});
  }
}
