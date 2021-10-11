"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAnalyticDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_analytic_dto_1 = require("./create-analytic.dto");
class UpdateAnalyticDto extends (0, mapped_types_1.PartialType)(create_analytic_dto_1.CreateAnalyticDto) {
}
exports.UpdateAnalyticDto = UpdateAnalyticDto;
//# sourceMappingURL=update-analytic.dto.js.map