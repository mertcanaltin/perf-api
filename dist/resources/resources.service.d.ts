import { Model } from 'mongoose';
import { Resources, ResourceDocument } from '../schemas/resources.schema';
import { CreateResourceDto } from './dto/create-resource.dto';
import { UpdateResourceDto } from './dto/update-resource.dto';
export declare class ResourcesService {
    private ResuorcesModel;
    constructor(ResuorcesModel: Model<ResourceDocument>);
    create(createResuorcesDto: CreateResourceDto): Promise<Resources>;
    findAll(): Promise<ResourceDocument[]>;
    findOne(name: string): Promise<ResourceDocument>;
    update(name: string, updateResuorcesDto: UpdateResourceDto): Promise<import("mongoose").UpdateWriteOpResult>;
    remove(name: string): Promise<{
        ok?: number;
        n?: number;
    } & {
        deletedCount?: number;
    }>;
}
