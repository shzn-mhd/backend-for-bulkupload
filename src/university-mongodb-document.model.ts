// src/your-mongodb-document.model.ts
import * as mongoose from 'mongoose';

export const UniversityDBDocumentSchema = new mongoose.Schema({
  // Define your schema fields here
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true }
});

export interface UniversityDBDocument extends mongoose.Document {
  name: string;
  age: number;
  email: string;
}
