import { IonicNativePlugin } from '@ionic-native/core';
export declare class BeaconingOriginal extends IonicNativePlugin {
    /**
     * Your plugin plugin functions go here.
     * Function names should match the ones in your .swift & .js files.
     * Otherwise you won't be able to execute them.
     */
    rangeBeaconIdListener(): Promise<any>;
    monitorBeaconIdListener(): Promise<any>;
    enteredRegionIdListener(): Promise<any>;
    leftRegionIdListener(): Promise<any>;
    rangeBeacons(options: string): Promise<any>;
    stopRangeBeacons(options: string): Promise<any>;
    monitorBeacons(options: string): Promise<any>;
    stopMonitorBeacons(options: string): Promise<any>;
}

export declare const Beaconing: BeaconingOriginal;