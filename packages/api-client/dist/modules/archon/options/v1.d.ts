import { AbstractModule } from '../../../core/abstract-module';
import { Archon } from '../types';
export declare class ArchonOptionsV1Module extends AbstractModule {
    getModuleID(): string;
    /** GET /v1/servers/:server_id/worlds/:world_id/options/startup */
    getStartup(serverId: string, worldId: string): Promise<Archon.Content.v1.RuntimeOptions>;
    /** PATCH /v1/servers/:server_id/worlds/:world_id/options/startup */
    patchStartup(serverId: string, worldId: string, body: Archon.Content.v1.PatchRuntimeOptions): Promise<void>;
}
