import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ResourceDocument = Resources & Document;

@Schema({ _id: false })
export class Resources extends Document {
  @Prop()
  fileName: string;

  @Prop()
  initiatorType: string;

  @Prop()
  transferSize: number;

  @Prop()
  duration:number;
}
export const resourceSchema = SchemaFactory.createForClass(Resources);
