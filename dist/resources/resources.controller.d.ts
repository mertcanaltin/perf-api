/// <reference types="mongoose" />
import { ResourcesService } from './resources.service';
import { CreateResourceDto } from './dto/create-resource.dto';
import { UpdateResourceDto } from './dto/update-resource.dto';
export declare class ResourcesController {
    private readonly ResourcesService;
    constructor(ResourcesService: ResourcesService);
    create(createResuorceDto: CreateResourceDto): Promise<import("../schemas/resources.schema").Resources>;
    findAll(): Promise<import("../schemas/resources.schema").ResourceDocument[]>;
    findOne(name: string): Promise<import("../schemas/resources.schema").ResourceDocument>;
    update(name: string, updateResuorceDto: UpdateResourceDto): Promise<import("mongoose").UpdateWriteOpResult>;
    remove(name: string): Promise<{
        ok?: number;
        n?: number;
    } & {
        deletedCount?: number;
    }>;
}
