import { Model } from 'mongoose';
import { Analytic, AnalyticDocument } from 'src/schemas/analytics.schema';
import { CreateAnalyticDto } from './dto/create-analytic.dto';
import { UpdateAnalyticDto } from './dto/update-analytic.dto';
export declare class AnalyticsService {
    private AnalyticModel;
    constructor(AnalyticModel: Model<AnalyticDocument>);
    analytics: Analytics[];
    getAllAnalytic(startTime: any, endTime: any): Analytics[];
    createAnalytic(createAnalyticDto: CreateAnalyticDto): string;
    create(createAnalyticDto: CreateAnalyticDto): Promise<Analytic>;
    findAll(): Promise<AnalyticDocument[]>;
    findOne(name: string): Promise<AnalyticDocument>;
    update(name: string, updateAnalyticDto: UpdateAnalyticDto): Promise<import("mongoose").UpdateWriteOpResult>;
    remove(name: string): Promise<{
        ok?: number;
        n?: number;
    } & {
        deletedCount?: number;
    }>;
}
