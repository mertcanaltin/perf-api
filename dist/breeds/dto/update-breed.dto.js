"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAnalyticDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_Analytic_dto_1 = require("./create-Analytic.dto");
class UpdateAnalyticDto extends mapped_types_1.PartialType(create_Analytic_dto_1.CreateAnalyticDto) {
}
exports.UpdateAnalyticDto = UpdateAnalyticDto;
//# sourceMappingURL=update-Analytic.dto.js.map