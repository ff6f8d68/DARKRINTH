import { AbstractModule } from '../../../core/abstract-module';
import { Archon } from '../types';
export declare class ArchonPropertiesV1Module extends AbstractModule {
    getModuleID(): string;
    /** GET /v1/servers/:server_id/worlds/:world_id/properties */
    getProperties(serverId: string, worldId: string): Promise<Archon.Content.v1.PropertiesFields>;
    /** PATCH /v1/servers/:server_id/worlds/:world_id/properties */
    patchProperties(serverId: string, worldId: string, body: Archon.Content.v1.PatchPropertiesFields): Promise<Archon.Content.v1.PropertiesFields>;
}
