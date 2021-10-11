import { AnalyticsDto } from './analytics.dto';
import { Type } from 'class-transformer';
import { ArrayNotEmpty, IsArray, IsEmpty, IsNotEmpty, IsNumber, ValidateNested} from 'class-validator';

export class CreateAnalyticDto {
  @IsNotEmpty()
  @IsNumber({
    allowInfinity: false,
    allowNaN: false,
  })
  readonly timeToFirstByte: number;

  @IsNotEmpty()
  @IsNumber({
    allowInfinity: false,
    allowNaN: false,
  })
  readonly firstContentfulPaint: number;

  @IsNotEmpty()
  @IsNumber({
    allowInfinity: false,
    allowNaN: false,
  })
  readonly domLoad: number;

  @IsNotEmpty()
  @IsNumber({
    allowInfinity: false,
    allowNaN: false,
  })
  readonly windowLoad: number;

  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => AnalyticsDto)
  resources: AnalyticsDto[];

  @IsEmpty()
  createdAt: number;
}
