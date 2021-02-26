import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  Logger,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

@Catch()
export class HttpErrorFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const message = exception.message || null;
    Logger.log(message, '错误提示');
    const errorResponse = {
      status,
      result: {
        error: message, // 获取全部的错误信息
      },
      message:
        typeof message == 'string'
          ? message || '请求失败'
          : JSON.stringify(message),
      code: 1, // 自定义code
      path: request.url, // 错误的url地址
      method: request.method, // 请求方式
      timestamp: new Date().toLocaleDateString(), // 错误的时间
    };
    // 设置返回的状态码、请求头、发送错误信息
    response.status(status);
    response.header('Content-Type', 'application/json; charset=utf-8');
    response.send(errorResponse);
  }
}
