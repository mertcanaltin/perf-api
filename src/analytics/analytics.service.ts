import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Analytic, AnalyticDocument } from 'src/schemas/analytics.schema';

import { CreateAnalyticDto } from './dto/create-Analytic.dto';
import { UpdateAnalyticDto } from './dto/update-Analytic.dto';

@Injectable()
export class AnalyticsService {
  constructor(
    @InjectModel(Analytic.name) private AnalyticModel: Model<AnalyticDocument>,
  ) {}

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
