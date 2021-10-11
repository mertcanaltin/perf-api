import { Document } from 'mongoose';
export declare type AnalyticDocument = Analytic & Document;
export declare class Analytic {
    name: string;
    furType: string;
}
export declare const Analyticschema: import("mongoose").Schema<Document<Analytic>, import("mongoose").Model<Document<Analytic>>>;
