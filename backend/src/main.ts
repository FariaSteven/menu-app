import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import * as express from "express";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true })
  );
  app.use('/uploads', express.static('uploads'));
  app.use((req, res, next) => {
    res.setTimeout(0); // Sem limite de tempo
    next();
  });
  await app.listen(3000);
}
bootstrap();
