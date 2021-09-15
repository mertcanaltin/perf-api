import { PartialType } from '@nestjs/mapped-types';
import { CreateAnalyticDto } from './create-Analytic.dto';

export class UpdateAnalyticDto extends PartialType(CreateAnalyticDto) {}
