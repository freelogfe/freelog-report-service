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
let AppBootHook = class AppBootHook {
    constructor(app) {
        this.app = app;
    }
    async didReady() {
        // 应用已经启动完毕
        console.log('[App report]: Did ready!');
    }
    async serverDidReady() {
        // http / https server 已启动，开始接受外部请求
        // 此时可以从 app.server 拿到 server 的实例
        console.log('[Server report]: Did ready!');
    }
};
AppBootHook = __decorate([
    midway_1.provide(),
    __metadata("design:paramtypes", [midway_1.Application])
], AppBootHook);
exports.default = AppBootHook;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLG1DQUE2QztBQUc3QyxJQUFxQixXQUFXLEdBQWhDLE1BQXFCLFdBQVc7SUFHOUIsWUFBWSxHQUFnQjtRQUMxQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQTtJQUNoQixDQUFDO0lBRUQsS0FBSyxDQUFDLFFBQVE7UUFDWixXQUFXO1FBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFBO0lBQ3pDLENBQUM7SUFFRCxLQUFLLENBQUMsY0FBYztRQUNsQixtQ0FBbUM7UUFDbkMsaUNBQWlDO1FBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQTtJQUM1QyxDQUFDO0NBQ0YsQ0FBQTtBQWpCb0IsV0FBVztJQUQvQixnQkFBTyxFQUFFO3FDQUlTLG9CQUFXO0dBSFQsV0FBVyxDQWlCL0I7a0JBakJvQixXQUFXIn0=