import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AnalyticDocument = Analytic & Document;

@Schema()
export class Analytic {
  @Prop()
  name: string;

  @Prop()
  furType: string;

  @Prop()
  url: string;

  @Prop()
  windowLoad: number;

  @Prop()
  ttfb: number;

  @Prop()
  domLoad: number;

  @Prop()
  date: number;
}

export const Analyticschema = SchemaFactory.createForClass(Analytic);
