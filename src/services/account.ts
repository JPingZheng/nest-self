import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Account } from '../entities/account';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account)
    private readonly AccountRepository: Repository<Account>,
  ) {}

  findAll(): Promise<Account[]> {
    return this.AccountRepository.find();
  }
}
