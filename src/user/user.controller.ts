import { Body, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { TransformInterceptor } from 'src/interfaces/transform/transform.interceptor';
import { ValidationPipe } from 'src/validate/validation.pipe';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}
  @Get('')
  findAll(): string {
    return 'account';
  }
  @Post('/list')
  findAccountList(): any {
    return this.service.findAll();
  }
  @Post('create')
  create(@Body(new ValidationPipe()) createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return this.service.create(createUserDto);
  }
}
