var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var Beaconing = /** @class */ (function (_super) {
    __extends(Beaconing, _super);
    function Beaconing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Beaconing.prototype.rangeBeaconIdListener = function () { return cordova(this, "rangeBeaconIdListener", { "successIndex": 0, "errorIndex": 1 }, arguments); };
    Beaconing.prototype.monitorBeaconIdListener = function () { return cordova(this, "monitorBeaconIdListener", { "successIndex": 0, "errorIndex": 1 }, arguments); };
    Beaconing.prototype.enteredRegionIdListener = function () { return cordova(this, "enteredRegionIdListener", { "successIndex": 0, "errorIndex": 1 }, arguments); };
    Beaconing.prototype.leftRegionIdListener = function () { return cordova(this, "leftRegionIdListener", { "successIndex": 0, "errorIndex": 1 }, arguments); };
    Beaconing.prototype.rangeBeacons = function (options) { return cordova(this, "rangeBeacons", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    Beaconing.prototype.stopRangeBeacons = function (options) { return cordova(this, "stopRangeBeacons", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    Beaconing.prototype.monitorBeacons = function (options) { return cordova(this, "monitorBeacons", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    Beaconing.prototype.stopMonitorBeacons = function (options) { return cordova(this, "stopMonitorBeacons", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    Beaconing.pluginName = "Beaconing";
    Beaconing.plugin = "cordova-plugin-beaconing";
    Beaconing.pluginRef = "Beaconing";
    Beaconing.repo = "https://github.com/cordova-plugin-beaconing";
    Beaconing.platforms = ["iOS"];
    Beaconing = __decorate([
        Injectable()
    ], Beaconing);
    return Beaconing;
}(IonicNativePlugin));
export { Beaconing };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2JlYWNvbmluZy9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFDTCxVQUFVLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyw4QkFJTixNQUFNLG9CQUFvQixDQUFDOztJQVVHLDZCQUFpQjs7OztJQVU5Qyx5Q0FBcUI7SUFRckIsMkNBQXVCO0lBUXZCLDJDQUF1QjtJQVF2Qix3Q0FBb0I7SUFRcEIsZ0NBQVksYUFBQyxPQUFlO0lBUTVCLG9DQUFnQixhQUFDLE9BQWU7SUFRaEMsa0NBQWMsYUFBQyxPQUFlO0lBUTlCLHNDQUFrQixhQUFDLE9BQWU7Ozs7OztJQWxFdkIsU0FBUztRQURyQixVQUFVLEVBQUU7T0FDQSxTQUFTO29CQWpCdEI7RUFpQitCLGlCQUFpQjtTQUFuQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSW5qZWN0YWJsZVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENvcmRvdmEsXG4gIElvbmljTmF0aXZlUGx1Z2luLFxuICBQbHVnaW5cbn0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdCZWFjb25pbmcnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1iZWFjb25pbmcnLFxuICBwbHVnaW5SZWY6ICdCZWFjb25pbmcnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2NvcmRvdmEtcGx1Z2luLWJlYWNvbmluZycsXG4gIHBsYXRmb3JtczogWydpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCZWFjb25pbmcgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBZb3VyIHBsdWdpbiBwbHVnaW4gZnVuY3Rpb25zIGdvIGhlcmUuIFxuICAgKiBGdW5jdGlvbiBuYW1lcyBzaG91bGQgbWF0Y2ggdGhlIG9uZXMgaW4geW91ciAuc3dpZnQgJiAuanMgZmlsZXMuXG4gICAqIE90aGVyd2lzZSB5b3Ugd29uJ3QgYmUgYWJsZSB0byBleGVjdXRlIHRoZW0uXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAwLFxuICAgIGVycm9ySW5kZXg6IDFcbiAgfSlcbiAgcmFuZ2VCZWFjb25JZExpc3RlbmVyKCk6IFByb21pc2UgPCBhbnkgPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMCxcbiAgICBlcnJvckluZGV4OiAxXG4gIH0pXG4gIG1vbml0b3JCZWFjb25JZExpc3RlbmVyKCk6IFByb21pc2UgPCBhbnkgPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMCxcbiAgICBlcnJvckluZGV4OiAxXG4gIH0pXG4gIGVudGVyZWRSZWdpb25JZExpc3RlbmVyKCk6IFByb21pc2UgPCBhbnkgPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMCxcbiAgICBlcnJvckluZGV4OiAxXG4gIH0pXG4gIGxlZnRSZWdpb25JZExpc3RlbmVyKCk6IFByb21pc2UgPCBhbnkgPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMSxcbiAgICBlcnJvckluZGV4OiAyXG4gIH0pXG4gIHJhbmdlQmVhY29ucyhvcHRpb25zOiBzdHJpbmcpOiBQcm9taXNlIDwgYW55ID4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDEsXG4gICAgZXJyb3JJbmRleDogMlxuICB9KVxuICBzdG9wUmFuZ2VCZWFjb25zKG9wdGlvbnM6IHN0cmluZyk6IFByb21pc2UgPCBhbnkgPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMSxcbiAgICBlcnJvckluZGV4OiAyXG4gIH0pXG4gIG1vbml0b3JCZWFjb25zKG9wdGlvbnM6IHN0cmluZyk6IFByb21pc2UgPCBhbnkgPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMSxcbiAgICBlcnJvckluZGV4OiAyXG4gIH0pXG4gIHN0b3BNb25pdG9yQmVhY29ucyhvcHRpb25zOiBzdHJpbmcpOiBQcm9taXNlIDwgYW55ID4ge1xuICAgIHJldHVybjtcbiAgfVxuXG59XG4iXX0=