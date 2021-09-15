import { Document } from 'mongoose';
export declare type AnalyticDocument = Analytic & Document;
export declare class Analytic {
    name: string;
    furType: string;
    url: string;
    windowLoad: number;
    ttfb: number;
    domLoad: number;
    date: number;
}
export declare const Analyticschema: import("mongoose").Schema<Document<Analytic>, import("mongoose").Model<Document<Analytic>>>;
