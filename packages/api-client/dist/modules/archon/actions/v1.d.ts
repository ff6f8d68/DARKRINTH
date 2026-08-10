import { AbstractModule } from '../../../core/abstract-module';
import { Archon } from '../types';
export declare class ArchonActionsV1Module extends AbstractModule {
    getModuleID(): string;
    /**
     * Get server action log entries.
     * GET /v1/servers/:server_id/action-log
     */
    list(serverId: string, options?: Archon.Actions.v1.ListActionLogOptions): Promise<Archon.Actions.v1.ActionLogResponse>;
}
