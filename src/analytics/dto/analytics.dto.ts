import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class AnalyticsDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  initiatorType: string;

  @IsNotEmpty()
  @IsNumber({
    allowInfinity: false,
    allowNaN: false,
  })
  transferSize: number;

  @IsNotEmpty()
  @IsNumber({
    allowInfinity: false,
    allowNaN: false,
  })
  duration: number;
}
