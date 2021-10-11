import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Query,
  BadRequestException
} from '@nestjs/common';

import { AnalyticsService } from './analytics.service';
import { CreateAnalyticDto } from './dto/create-analytic.dto';
import { UpdateAnalyticDto } from './dto/update-analytic.dto';

@Controller('analytics')
export class AnalyticsController {
  constructor(private readonly AnalyticsService: AnalyticsService) {}

  @Get()
  getAllAnalytic(
    @Query('start-time') startTime,
    @Query('end-time') endTime,
  ): Analytics[] {
    if (!startTime || !Number(startTime)) throw new BadRequestException();
    if (!endTime || !Number(endTime)) throw new BadRequestException();
    return this.AnalyticsService.getAllAnalytic(startTime, endTime);
   
  }

  @Post()
  createAnalytic(@Body() createAnalyticDto: CreateAnalyticDto): string {
    return this.AnalyticsService.createAnalytic(createAnalyticDto);
  }

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
