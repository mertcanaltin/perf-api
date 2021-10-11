import { Document } from 'mongoose';
export declare type ResourceDocument = Resources & Document;
export declare class Resources extends Document {
    fileName: string;
    initiatorType: string;
    transferSize: number;
    duration: number;
}
export declare const resourceSchema: import("mongoose").Schema<Resources, import("mongoose").Model<Resources, any, any>, undefined, {}>;
