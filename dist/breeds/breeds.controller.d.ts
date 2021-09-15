import { AnalyticsService } from './Analytics.service';
import { CreateAnalyticDto } from './dto/create-Analytic.dto';
import { UpdateAnalyticDto } from './dto/update-Analytic.dto';
export declare class AnalyticsController {
    private readonly AnalyticsService;
    constructor(AnalyticsService: AnalyticsService);
    create(createAnalyticDto: CreateAnalyticDto): Promise<import("../schemas/Analytic.schema").Analytic>;
    findAll(): Promise<import("../schemas/Analytic.schema").AnalyticDocument[]>;
    findOne(name: string): Promise<import("../schemas/Analytic.schema").AnalyticDocument>;
    update(name: string, updateAnalyticDto: UpdateAnalyticDto): Promise<any>;
    remove(name: string): Promise<any>;
}
