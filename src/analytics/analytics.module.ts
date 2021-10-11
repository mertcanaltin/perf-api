import { Module } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
import { AnalyticsController } from './analytics.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Analytic, Analyticschema } from 'src/schemas/analytics.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Analytic.name, schema: Analyticschema },
    ]),
  ],
  controllers: [AnalyticsController],
  providers: [AnalyticsService],
})
export class AnalyticsModule {}
