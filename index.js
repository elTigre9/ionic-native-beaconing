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
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var BeaconingOriginal = /** @class */ (function (_super) {
    __extends(BeaconingOriginal, _super);
    function BeaconingOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BeaconingOriginal.prototype.rangeBeaconIdListener = function () { return cordova(this, "rangeBeaconIdListener", { "successIndex": 0, "errorIndex": 1 }, arguments); };
    BeaconingOriginal.prototype.monitorBeaconIdListener = function () { return cordova(this, "monitorBeaconIdListener", { "successIndex": 0, "errorIndex": 1 }, arguments); };
    BeaconingOriginal.prototype.enteredRegionIdListener = function () { return cordova(this, "enteredRegionIdListener", { "successIndex": 0, "errorIndex": 1 }, arguments); };
    BeaconingOriginal.prototype.leftRegionIdListener = function () { return cordova(this, "leftRegionIdListener", { "successIndex": 0, "errorIndex": 1 }, arguments); };
    BeaconingOriginal.prototype.rangeBeacons = function (options) { return cordova(this, "rangeBeacons", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    BeaconingOriginal.prototype.stopRangeBeacons = function (options) { return cordova(this, "stopRangeBeacons", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    BeaconingOriginal.prototype.monitorBeacons = function (options) { return cordova(this, "monitorBeacons", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    BeaconingOriginal.prototype.stopMonitorBeacons = function (options) { return cordova(this, "stopMonitorBeacons", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    BeaconingOriginal.pluginName = "Beaconing";
    BeaconingOriginal.plugin = "cordova-plugin-beaconing";
    BeaconingOriginal.pluginRef = "Beaconing";
    BeaconingOriginal.repo = "https://github.com/cordova-plugin-beaconing";
    BeaconingOriginal.platforms = ["iOS"];
    return BeaconingOriginal;
}(IonicNativePlugin));
var Beaconing = new BeaconingOriginal();
export { Beaconing };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2JlYWNvbmluZy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBR0EsT0FBTyw4QkFJTixNQUFNLG9CQUFvQixDQUFDOztJQVVHLDZCQUFpQjs7OztJQVU5Qyx5Q0FBcUI7SUFRckIsMkNBQXVCO0lBUXZCLDJDQUF1QjtJQVF2Qix3Q0FBb0I7SUFRcEIsZ0NBQVksYUFBQyxPQUFlO0lBUTVCLG9DQUFnQixhQUFDLE9BQWU7SUFRaEMsa0NBQWMsYUFBQyxPQUFlO0lBUTlCLHNDQUFrQixhQUFDLE9BQWU7Ozs7OztvQkFuRnBDO0VBaUIrQixpQkFBaUI7U0FBbkMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEluamVjdGFibGVcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDb3Jkb3ZhLFxuICBJb25pY05hdGl2ZVBsdWdpbixcbiAgUGx1Z2luXG59IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQmVhY29uaW5nJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tYmVhY29uaW5nJyxcbiAgcGx1Z2luUmVmOiAnQmVhY29uaW5nJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9jb3Jkb3ZhLXBsdWdpbi1iZWFjb25pbmcnLFxuICBwbGF0Zm9ybXM6IFsnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQmVhY29uaW5nIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogWW91ciBwbHVnaW4gcGx1Z2luIGZ1bmN0aW9ucyBnbyBoZXJlLiBcbiAgICogRnVuY3Rpb24gbmFtZXMgc2hvdWxkIG1hdGNoIHRoZSBvbmVzIGluIHlvdXIgLnN3aWZ0ICYgLmpzIGZpbGVzLlxuICAgKiBPdGhlcndpc2UgeW91IHdvbid0IGJlIGFibGUgdG8gZXhlY3V0ZSB0aGVtLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMCxcbiAgICBlcnJvckluZGV4OiAxXG4gIH0pXG4gIHJhbmdlQmVhY29uSWRMaXN0ZW5lcigpOiBQcm9taXNlIDwgYW55ID4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDAsXG4gICAgZXJyb3JJbmRleDogMVxuICB9KVxuICBtb25pdG9yQmVhY29uSWRMaXN0ZW5lcigpOiBQcm9taXNlIDwgYW55ID4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDAsXG4gICAgZXJyb3JJbmRleDogMVxuICB9KVxuICBlbnRlcmVkUmVnaW9uSWRMaXN0ZW5lcigpOiBQcm9taXNlIDwgYW55ID4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDAsXG4gICAgZXJyb3JJbmRleDogMVxuICB9KVxuICBsZWZ0UmVnaW9uSWRMaXN0ZW5lcigpOiBQcm9taXNlIDwgYW55ID4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDEsXG4gICAgZXJyb3JJbmRleDogMlxuICB9KVxuICByYW5nZUJlYWNvbnMob3B0aW9uczogc3RyaW5nKTogUHJvbWlzZSA8IGFueSA+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAxLFxuICAgIGVycm9ySW5kZXg6IDJcbiAgfSlcbiAgc3RvcFJhbmdlQmVhY29ucyhvcHRpb25zOiBzdHJpbmcpOiBQcm9taXNlIDwgYW55ID4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDEsXG4gICAgZXJyb3JJbmRleDogMlxuICB9KVxuICBtb25pdG9yQmVhY29ucyhvcHRpb25zOiBzdHJpbmcpOiBQcm9taXNlIDwgYW55ID4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDEsXG4gICAgZXJyb3JJbmRleDogMlxuICB9KVxuICBzdG9wTW9uaXRvckJlYWNvbnMob3B0aW9uczogc3RyaW5nKTogUHJvbWlzZSA8IGFueSA+IHtcbiAgICByZXR1cm47XG4gIH1cblxufVxuIl19