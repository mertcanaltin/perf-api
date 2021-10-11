import { Document } from 'mongoose';
import { Resources } from './resources.schema';
export declare type AnalyticDocument = Analytic & Document;
export declare class Analytic {
    url: string;
    windowLoad: number;
    firstContentfulPaint: number;
    timeToFirstByte: number;
    domLoad: number;
    resources: Resources;
}
export declare const Analyticschema: import("mongoose").Schema<Document<Analytic, any, any>, import("mongoose").Model<Document<Analytic, any, any>, any, any>, undefined, {}>;
