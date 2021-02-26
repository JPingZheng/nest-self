import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    // 这里写你的token，然后进行检验
    const token = context.switchToHttp().getRequest().headers.token;
    console.log(context.switchToHttp().getRequest().query)
    return true;
  }
}
