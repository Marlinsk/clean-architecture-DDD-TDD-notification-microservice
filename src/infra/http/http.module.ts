import { Module } from '@nestjs/common';
import { NotificationsRepository } from 'src/application/repositories/notifications-repository';
import { SendNotification } from 'src/application/usecases/send-notification';
import { DataBaseModule } from '../database/database.module';
import { NotificationsController } from './controllers/notifications.controller';

@Module({
  imports: [DataBaseModule],
  controllers: [NotificationsController],
  providers: [SendNotification],
})
export class HttpModule {}
