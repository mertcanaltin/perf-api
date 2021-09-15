import { AnalyticsService } from './analytics.service';
import { CreateAnalyticDto } from './dto/create-Analytic.dto';
import { UpdateAnalyticDto } from './dto/update-analytic.dto';
export declare class AnalyticsController {
    private readonly AnalyticsService;
    constructor(AnalyticsService: AnalyticsService);
    create(createAnalyticDto: CreateAnalyticDto): Promise<import("../schemas/analytics.schema").Analytic>;
    findAll(): Promise<import("../schemas/analytics.schema").AnalyticDocument[]>;
    findOne(name: string): Promise<import("../schemas/analytics.schema").AnalyticDocument>;
    update(name: string, updateAnalyticDto: UpdateAnalyticDto): Promise<any>;
    remove(name: string): Promise<any>;
}
