import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CSVService } from './csv.service';
import { DataService } from './data.service';

@Controller('data')
export class DataController {
  constructor(private readonly csvService: CSVService, private readonly dataService: DataService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadCSV(@UploadedFile() file: any): Promise<any> {
    const filePath = file.path;
    const csvData = await this.csvService.processCSV(filePath);
    await this.dataService.bulkInsertData(csvData);
    return { message: 'Data uploaded successfully' };
  }
}