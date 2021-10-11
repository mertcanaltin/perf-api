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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAnalyticDto = void 0;
const analytics_dto_1 = require("./analytics.dto");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class CreateAnalyticDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)({
        allowInfinity: false,
        allowNaN: false,
    }),
    __metadata("design:type", Number)
], CreateAnalyticDto.prototype, "timeToFirstByte", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)({
        allowInfinity: false,
        allowNaN: false,
    }),
    __metadata("design:type", Number)
], CreateAnalyticDto.prototype, "firstContentfulPaint", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)({
        allowInfinity: false,
        allowNaN: false,
    }),
    __metadata("design:type", Number)
], CreateAnalyticDto.prototype, "domLoad", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)({
        allowInfinity: false,
        allowNaN: false,
    }),
    __metadata("design:type", Number)
], CreateAnalyticDto.prototype, "windowLoad", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayNotEmpty)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => analytics_dto_1.AnalyticsDto),
    __metadata("design:type", Array)
], CreateAnalyticDto.prototype, "resources", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    __metadata("design:type", Number)
], CreateAnalyticDto.prototype, "createdAt", void 0);
exports.CreateAnalyticDto = CreateAnalyticDto;
//# sourceMappingURL=create-analytic.dto.js.map