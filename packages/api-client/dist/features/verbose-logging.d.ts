import { AbstractFeature, FeatureConfig } from '../core/abstract-feature';
import { RequestContext } from '../types/request';
export type VerboseLoggingConfig = FeatureConfig;
export declare class VerboseLoggingFeature extends AbstractFeature {
    execute<T>(next: () => Promise<T>, context: RequestContext): Promise<T>;
}
