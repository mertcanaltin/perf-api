import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Analytic, AnalyticDocument } from 'src/schemas/analytics.schema';
import { CreateAnalyticDto } from './dto/create-analytic.dto';
import { UpdateAnalyticDto } from './dto/update-analytic.dto';

@Injectable()
export class AnalyticsService {
  constructor(
    @InjectModel(Analytic.name) private AnalyticModel: Model<AnalyticDocument>,
  ) {}

  analytics: Analytics[] = [];

  getAllAnalytic(startTime, endTime): Analytics[] {
    return this.analytics.filter(
      (Analytics) => Analytics.createdAt >= startTime && Analytics.createdAt <= endTime,
    );
  }

  createAnalytic(createAnalyticDto: CreateAnalyticDto): string {
    createAnalyticDto.createdAt = Date.now();

    this.analytics.push(createAnalyticDto);

    return 'Analytics saved.';
  }
  async create(createAnalyticDto: CreateAnalyticDto): Promise<Analytic> {
    return new this.AnalyticModel(createAnalyticDto).save();
  }
 
  async findAll() {
    return this.AnalyticModel.find();
  }

  async findOne(name: string) {
    return this.AnalyticModel.findOne({ name });
  }

  async update(name: string, updateAnalyticDto: UpdateAnalyticDto) {
    return this.AnalyticModel.updateOne({ name }, { $set: updateAnalyticDto });
  }

  async remove(name: string) {
    return this.AnalyticModel.deleteOne({ name });
  }
}
