"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyticsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const Analytic_schema_1 = require("../schemas/Analytic.schema");
let AnalyticsService = class AnalyticsService {
    constructor(AnalyticModel) {
        this.AnalyticModel = AnalyticModel;
    }
    async create(createAnalyticDto) {
        return new this.AnalyticModel(createAnalyticDto).save();
    }
    async findAll() {
        return this.AnalyticModel.find();
    }
    async findOne(name) {
        return this.AnalyticModel.findOne({ name });
    }
    async update(name, updateAnalyticDto) {
        return this.AnalyticModel.updateOne({ name }, { $set: updateAnalyticDto });
    }
    async remove(name) {
        return this.AnalyticModel.deleteOne({ name });
    }
};
AnalyticsService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(Analytic_schema_1.Analytic.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AnalyticsService);
exports.AnalyticsService = AnalyticsService;
//# sourceMappingURL=Analytics.service.js.map