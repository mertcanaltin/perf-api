import { Model } from 'mongoose';
import { Analytic, AnalyticDocument } from 'src/schemas/analytics.schema';
import { CreateAnalyticDto } from './dto/create-analytic.dto';
import { UpdateAnalyticDto } from './dto/update-analytic.dto';
export declare class AnalyticsService {
    private AnalyticModel;
    constructor(AnalyticModel: Model<AnalyticDocument>);
    create(createAnalyticDto: CreateAnalyticDto): Promise<Analytic>;
    findAll(): Promise<AnalyticDocument[]>;
    findOne(name: string): Promise<AnalyticDocument>;
    update(name: string, updateAnalyticDto: UpdateAnalyticDto): Promise<any>;
    remove(name: string): Promise<any>;
}
