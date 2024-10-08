import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
  }))

  const config = new DocumentBuilder()
    .setTitle('Api Nest example')
    .setDescription('The API NEST description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors();
    /*{
      origin: 'https://pepe.com',
    }*/
  app.setGlobalPrefix('apinestjs')
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
