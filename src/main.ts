import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { TransformInterceptor } from './interfaces/transform/transform.interceptor';
import { AuthGuard } from './guard/auth';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api');
  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  // 全局拦截器
  app.useGlobalInterceptors(new TransformInterceptor());

  // 全局守卫
  app.useGlobalGuards(new AuthGuard());
  await app.listen(1000);
}
bootstrap();
