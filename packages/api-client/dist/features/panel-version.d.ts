import { AbstractFeature } from '../core/abstract-feature';
import { RequestContext } from '../types/request';
export declare const PANEL_VERSION = 1;
export declare class PanelVersionFeature extends AbstractFeature {
    execute<T>(next: () => Promise<T>, context: RequestContext): Promise<T>;
    shouldApply(context: RequestContext): boolean;
}
