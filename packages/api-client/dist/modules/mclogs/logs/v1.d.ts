import { AbstractModule } from '../../../core/abstract-module';
import { Mclogs } from '../types';
export declare class MclogsLogsV1Module extends AbstractModule {
    getModuleID(): string;
    create(content: string): Promise<Mclogs.Logs.v1.CreateResponse>;
}
