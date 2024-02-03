import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule, TypeOrmModuleOptions } from "@nestjs/typeorm";

import { ProductsModule } from './modules/products/products.module';
import { UserModule } from "./modules/users/user.module";
import { AuthModule } from "./modules/auth/auth.module";

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.TYPEORM_CONNECTION,
      host: process.env.TYPEORM_HOST,
      port: 5432,
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      entities: [__dirname + '/**/*.entity{.js, .ts}'],
      synchronize: true,
      autoLoadEntities: true,
    } as TypeOrmModuleOptions),
    UserModule,
    AuthModule,
    ProductsModule,
  ],
})
export class AppModule {}
