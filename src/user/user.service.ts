import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly UserRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.UserRepository.find();
  }

  async create(data: any) {
    const user = await this.UserRepository.create(data);
    return this.UserRepository.save(user);
  }
}
