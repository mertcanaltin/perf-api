import { AnalyticsDto } from './analytics.dto';
export declare class CreateAnalyticDto {
    readonly timeToFirstByte: number;
    readonly firstContentfulPaint: number;
    readonly domLoad: number;
    readonly windowLoad: number;
    resources: AnalyticsDto[];
    createdAt: number;
}
