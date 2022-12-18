import { Module } from '@nestjs/common';
import { HttpModule } from './infra/http/http.module';
import { DataBaseModule } from './infra/database/database.module';
import { MessagingModule } from '@infra/messaging/messaging.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    HttpModule,
    DataBaseModule,
    MessagingModule,
  ],
})
export class AppModule {}
