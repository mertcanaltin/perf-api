import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {Resources,resourceSchema} from './resources.schema';

export type AnalyticDocument = Analytic & Document;

@Schema({ versionKey: false })
export class Analytic {
  @Prop()
  url: string;

  @Prop()
  windowLoad: number;

  @Prop()
  firstContentfulPaint: number;

  @Prop()
  timeToFirstByte: number;

  @Prop()
  domLoad: number;

  @Prop({ type: [resourceSchema] })
  resources:Resources
}

export const Analyticschema = SchemaFactory.createForClass(Analytic);

