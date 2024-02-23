import { Injectable } from '@nestjs/common';

@Injectable()
export class DataService {
  async bulkInsertData(data: any[]): Promise<void> {
    // Implement your logic to insert data into the database
    // For example, using a TypeORM repository or a MongoDB client
  }
}