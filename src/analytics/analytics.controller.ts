import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AnalyticsService } from './analytics.service';
import { CreateAnalyticDto } from './dto/create-Analytic.dto';
import { UpdateAnalyticDto } from './dto/update-analytic.dto';

@Controller('Analytics')
export class AnalyticsController {
  constructor(private readonly AnalyticsService: AnalyticsService) {}

  @Post()
  create(@Body() createAnalyticDto: CreateAnalyticDto) {
    return this.AnalyticsService.create(createAnalyticDto);
  }

  @Get()
  findAll() {
    return this.AnalyticsService.findAll();
  }

  @Get(':name')
  findOne(@Param('name') name: string) {
    return this.AnalyticsService.findOne(name);
  }

  @Put(':name')
  update(
    @Param('name') name: string,
    @Body() updateAnalyticDto: UpdateAnalyticDto,
  ) {
    return this.AnalyticsService.update(name, updateAnalyticDto);
  }

  @Delete(':name')
  remove(@Param('name') name: string) {
    return this.AnalyticsService.remove(name);
  }
}
