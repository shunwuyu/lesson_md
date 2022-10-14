import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
const swig = require('swig');
async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // 静态资源
  app.useStaticAssets(__dirname + "/public");
  // 模版引擎的位置
  app.setBaseViewsDir(__dirname + "/views");
  // 渲染 html
  app.engine("html", swig.renderFile);
  // 
  app.setViewEngine("html");
  await app.listen(3000);
}
bootstrap();
