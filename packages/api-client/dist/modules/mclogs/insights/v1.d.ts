import { AbstractModule } from '../../../core/abstract-module';
import { Mclogs } from '../types';
export declare class MclogsInsightsV1Module extends AbstractModule {
    getModuleID(): string;
    analyse(content: string): Promise<Mclogs.Insights.v1.InsightsResponse>;
}
