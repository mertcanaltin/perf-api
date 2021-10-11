/// <reference types="mongoose" />
import { AnalyticsService } from './analytics.service';
import { CreateAnalyticDto } from './dto/create-analytic.dto';
import { UpdateAnalyticDto } from './dto/update-analytic.dto';
export declare class AnalyticsController {
    private readonly AnalyticsService;
    constructor(AnalyticsService: AnalyticsService);
    getAllAnalytic(startTime: any, endTime: any): Analytics[];
    createAnalytic(createAnalyticDto: CreateAnalyticDto): string;
    create(createAnalyticDto: CreateAnalyticDto): Promise<import("../schemas/analytics.schema").Analytic>;
    findAll(): Promise<import("../schemas/analytics.schema").AnalyticDocument[]>;
    findOne(name: string): Promise<import("../schemas/analytics.schema").AnalyticDocument>;
    update(name: string, updateAnalyticDto: UpdateAnalyticDto): Promise<import("mongoose").UpdateWriteOpResult>;
    remove(name: string): Promise<{
        ok?: number;
        n?: number;
    } & {
        deletedCount?: number;
    }>;
}
