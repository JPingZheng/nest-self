import { Module } from '@nestjs/common';
import { AccountService } from '../services/account';
import { AccountControllers } from '../controllers/account';
@Module({
  imports: [],
  controllers: [AccountControllers],
  providers: [AccountService],
})
export class AccountModule {}
