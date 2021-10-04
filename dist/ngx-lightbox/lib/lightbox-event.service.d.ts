import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export interface IEvent {
    id: number;
    data?: any;
}
export interface IAlbum {
    src: string;
    caption?: string;
    thumb: string;
    iframe?: boolean;
}
export declare const LIGHTBOX_EVENT: {
    CHANGE_PAGE: number;
    CLOSE: number;
    OPEN: number;
    ZOOM_IN: number;
    ZOOM_OUT: number;
    ROTATE_LEFT: number;
    ROTATE_RIGHT: number;
    FILE_NOT_FOUND: number;
};
export declare class LightboxEvent {
    private _lightboxEventSource;
    lightboxEvent$: Observable<Object>;
    constructor();
    broadcastLightboxEvent(event: any): void;
    static ɵfac: i0.ɵɵFactoryDef<LightboxEvent, never>;
    static ɵprov: i0.ɵɵInjectableDef<LightboxEvent>;
}
export declare class LightboxWindowRef {
    get nativeWindow(): any;
    static ɵfac: i0.ɵɵFactoryDef<LightboxWindowRef, never>;
    static ɵprov: i0.ɵɵInjectableDef<LightboxWindowRef>;
}
