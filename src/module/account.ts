import { Module } from '@nestjs/common';
import { AccountService } from '../services/account';
import { AccountControllers } from '../controllers/account';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from 'src/entities/account';
@Module({
  imports: [TypeOrmModule.forFeature([Account])],
  controllers: [AccountControllers],
  providers: [AccountService],
})
export class AccountModule {}
