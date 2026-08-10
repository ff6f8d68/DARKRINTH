import { AbstractModule } from '../../../core/abstract-module';
export declare class KyrosLogsV1Module extends AbstractModule {
    getModuleID(): string;
    /** POST /v1/logs/clear — clear the live logs buffer for the current server */
    clear(): Promise<void>;
}
