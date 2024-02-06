import { NestFactory } from "@nestjs/core";
import { ValidationPipe } from "@nestjs/common";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { AppModule } from "./app.module";
import * as express from "express";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true })
  );
  app.use("/uploads", express.static("uploads"));
  app.use((req, res, next) => {
    res.setTimeout(0); // Sem limite de tempo
    next();
  });

  const config = new DocumentBuilder()
    .setTitle('Menu-app documentation')
    .setDescription('O backend do "menu-app" é responsável por gerenciar dados relacionados ao cardápio, usuários e pedidos.')
    .setVersion('1.0')
    .addTag('Menu-app')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
