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
exports.AnalyticsController = void 0;
const common_1 = require("@nestjs/common");
const analytics_service_1 = require("./analytics.service");
const create_analytic_dto_1 = require("./dto/create-analytic.dto");
const update_analytic_dto_1 = require("./dto/update-analytic.dto");
let AnalyticsController = class AnalyticsController {
    constructor(AnalyticsService) {
        this.AnalyticsService = AnalyticsService;
    }
    getAllAnalytic(startTime, endTime) {
        if (!startTime || !Number(startTime))
            throw new common_1.BadRequestException();
        if (!endTime || !Number(endTime))
            throw new common_1.BadRequestException();
        return this.AnalyticsService.getAllAnalytic(startTime, endTime);
    }
    createAnalytic(createAnalyticDto) {
        return this.AnalyticsService.createAnalytic(createAnalyticDto);
    }
    create(createAnalyticDto) {
        return this.AnalyticsService.create(createAnalyticDto);
    }
    findAll() {
        return this.AnalyticsService.findAll();
    }
    findOne(name) {
        return this.AnalyticsService.findOne(name);
    }
    update(name, updateAnalyticDto) {
        return this.AnalyticsService.update(name, updateAnalyticDto);
    }
    remove(name) {
        return this.AnalyticsService.remove(name);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('start-time')),
    __param(1, (0, common_1.Query)('end-time')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Array)
], AnalyticsController.prototype, "getAllAnalytic", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_analytic_dto_1.CreateAnalyticDto]),
    __metadata("design:returntype", String)
], AnalyticsController.prototype, "createAnalytic", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_analytic_dto_1.CreateAnalyticDto]),
    __metadata("design:returntype", void 0)
], AnalyticsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AnalyticsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':name'),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AnalyticsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':name'),
    __param(0, (0, common_1.Param)('name')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_analytic_dto_1.UpdateAnalyticDto]),
    __metadata("design:returntype", void 0)
], AnalyticsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':name'),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AnalyticsController.prototype, "remove", null);
AnalyticsController = __decorate([
    (0, common_1.Controller)('analytics'),
    __metadata("design:paramtypes", [analytics_service_1.AnalyticsService])
], AnalyticsController);
exports.AnalyticsController = AnalyticsController;
//# sourceMappingURL=analytics.controller.js.map