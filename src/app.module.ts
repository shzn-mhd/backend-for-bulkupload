import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { CSVService } from './csv.service';
import { DataService } from './data.service';
import { DataController } from './data.controller';

@Module({
  imports: [
    MulterModule.register({
      dest: './uploads',
    }),
  ],
  controllers: [DataController],
  providers: [CSVService, DataService],
})
export class AppModule {}