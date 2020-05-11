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
const midway_1 = require("midway");
let NodeReport = class NodeReport {
    async createRecord() {
        try {
            const body = this.ctx.request.body;
            const bodyObj = JSON.parse(body);
            const res = await this.dal.nodePerformanceReportRecord.create(bodyObj);
            this.ctx.success(res);
        }
        catch (e) {
            this.logger.error(e);
        }
    }
    async list() {
        const condition = {};
        const projection = [];
        const res = await this.dal.nodePerformanceReportRecord.findPageList(condition, 1, 50, projection.join(' '));
        this.ctx.success(res);
    }
};
__decorate([
    midway_1.inject(),
    __metadata("design:type", Object)
], NodeReport.prototype, "ctx", void 0);
__decorate([
    midway_1.plugin(),
    __metadata("design:type", Object)
], NodeReport.prototype, "dal", void 0);
__decorate([
    midway_1.inject(),
    __metadata("design:type", midway_1.EggLogger)
], NodeReport.prototype, "logger", void 0);
__decorate([
    midway_1.post('/performance'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NodeReport.prototype, "createRecord", null);
__decorate([
    midway_1.get('/performance/list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NodeReport.prototype, "list", null);
NodeReport = __decorate([
    midway_1.provide(),
    midway_1.controller('/v1/report')
], NodeReport);
exports.default = NodeReport;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyZm9ybWFuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBwL2NvbnRyb2xsZXIvcGVyZm9ybWFuY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBMkY7QUFLM0YsSUFBcUIsVUFBVSxHQUEvQixNQUFxQixVQUFVO0lBWTdCLEtBQUssQ0FBQyxZQUFZO1FBQ2hCLElBQUk7WUFDRixNQUFNLElBQUksR0FBVyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUE7WUFDMUMsTUFBTSxPQUFPLEdBQWdCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDN0MsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQTtZQUN0RSxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQTtTQUN0QjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUE7U0FDckI7SUFDSCxDQUFDO0lBR0QsS0FBSyxDQUFDLElBQUk7UUFDUixNQUFNLFNBQVMsR0FBRyxFQUFFLENBQUE7UUFDcEIsTUFBTSxVQUFVLEdBQWMsRUFBRSxDQUFBO1FBQ2hDLE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO1FBQzNHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ3ZCLENBQUM7Q0FDRixDQUFBO0FBM0JDO0lBREMsZUFBTSxFQUFFOzt1Q0FDRztBQUdaO0lBREMsZUFBTSxFQUFFOzt1Q0FDRDtBQUdSO0lBREMsZUFBTSxFQUFFOzhCQUNELGtCQUFTOzBDQUFBO0FBR2pCO0lBREMsYUFBSSxDQUFDLGNBQWMsQ0FBQzs7Ozs4Q0FVcEI7QUFHRDtJQURDLFlBQUcsQ0FBQyxtQkFBbUIsQ0FBQzs7OztzQ0FNeEI7QUE3QmtCLFVBQVU7SUFGOUIsZ0JBQU8sRUFBRTtJQUNULG1CQUFVLENBQUMsWUFBWSxDQUFDO0dBQ0osVUFBVSxDQThCOUI7a0JBOUJvQixVQUFVIn0=