import { Controller, Get, Post } from '@nestjs/common';
import { AccountService } from '../services/account';
@Controller('account')
export class AccountControllers {
  constructor(private readonly service: AccountService) {}
  @Get('')
  findAll(): string {
    return 'account';
  }
  @Post('/list')
  findAccountList(): any {
    return this.service.findAll();
  }
}
