import { AbstractModule } from '../../../core/abstract-module';
import { Archon } from '../types';
export declare class ArchonServersV1Module extends AbstractModule {
    getModuleID(): string;
    /**
     * Get list of servers for the authenticated user
     * GET /v1/servers
     */
    list(): Promise<Archon.Servers.v1.ServerFull[]>;
    /**
     * Get full server details including worlds, backups, and content
     * GET /v1/servers/:server_id
     */
    get(serverId: string): Promise<Archon.Servers.v1.ServerFull>;
    /**
     * Get available regions
     * GET /v1/regions
     */
    getRegions(): Promise<Archon.Servers.v1.Region[]>;
    /**
     * End the intro flow for a server
     * DELETE /v1/servers/:id/flows/intro
     */
    endIntro(serverId: string): Promise<void>;
    /**
     * Reset a world to onboarding
     * POST /v1/servers/:id/worlds/:wid/onboard
     */
    resetToOnboarding(serverId: string, worldId: string): Promise<void>;
}
