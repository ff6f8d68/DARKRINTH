import { AbstractModule } from '../../../core/abstract-module';
import { UploadHandle, UploadProgress } from '../../../types/upload';
import { Archon } from '../types';
export declare class ArchonServersV0Module extends AbstractModule {
    getModuleID(): string;
    /**
     * Get a specific server by ID
     * GET /modrinth/v0/servers/:id
     */
    get(serverId: string): Promise<Archon.Servers.v0.Server>;
    /**
     * Get list of servers for the authenticated user
     * GET /modrinth/v0/servers
     */
    list(options?: Archon.Servers.v0.GetServersOptions): Promise<Archon.Servers.v0.ServerGetResponse>;
    /**
     * Check stock availability for a region
     * POST /modrinth/v0/stock?region=:region
     */
    checkStock(region: string, request: Archon.Servers.v0.StockRequest): Promise<Archon.Servers.v0.StockResponse>;
    /**
     * Check stock availability (without region filter)
     * POST /modrinth/v0/stock
     */
    checkStockGlobal(request: Archon.Servers.v0.StockRequest): Promise<Archon.Servers.v0.StockResponse>;
    /**
     * Get filesystem authentication credentials for a server
     * Returns URL and JWT token for accessing the server's filesystem via Kyros
     * GET /modrinth/v0/servers/:id/fs
     */
    getFilesystemAuth(serverId: string): Promise<Archon.Servers.v0.JWTAuth>;
    /**
     * Get WebSocket authentication credentials for a server
     * GET /modrinth/v0/servers/:id/ws
     */
    getWebSocketAuth(serverId: string): Promise<Archon.Websocket.v0.WSAuth>;
    /**
     * Send a power action to a server (Start, Stop, Restart, Kill)
     * POST /modrinth/v0/servers/:id/power
     */
    power(serverId: string, action: 'Start' | 'Stop' | 'Restart' | 'Kill'): Promise<void>;
    /**
     * Reinstall a server with a new loader or modpack
     * POST /modrinth/v0/servers/:id/reinstall
     */
    reinstall(serverId: string, request: Archon.Servers.v0.ReinstallRequest, hardReset?: boolean): Promise<void>;
    /**
     * Get authentication credentials for .mrpack file upload
     * GET /modrinth/v0/servers/:id/reinstallFromMrpack
     */
    getReinstallMrpackAuth(serverId: string): Promise<Archon.Servers.v0.MrpackReinstallAuth>;
    /**
     * Reinstall a server from a .mrpack file with progress tracking
     *
     * Two-step flow: fetches upload auth, then uploads the .mrpack file to the node.
     *
     * @param serverId - Server ID
     * @param file - .mrpack file to upload
     * @param hardReset - Whether to erase all server data
     * @param options - Optional progress callback
     * @returns Promise resolving to an UploadHandle with progress tracking and cancellation
     */
    reinstallFromMrpack(serverId: string, file: File, hardReset?: boolean, options?: {
        onProgress?: (progress: UploadProgress) => void;
    }): Promise<UploadHandle<void>>;
    /**
     * Update a server's name
     * POST /modrinth/v0/servers/:id/name
     */
    updateName(serverId: string, name: string): Promise<void>;
    /**
     * Get allocations for a server
     * GET /modrinth/v0/servers/:id/allocations
     */
    getAllocations(serverId: string): Promise<Archon.Servers.v0.Allocation[]>;
    /**
     * Reserve a new allocation for a server
     * POST /modrinth/v0/servers/:id/allocations?name=...
     */
    reserveAllocation(serverId: string, name: string): Promise<Archon.Servers.v0.Allocation>;
    /**
     * Update an allocation's name
     * PUT /modrinth/v0/servers/:id/allocations/:port?name=...
     */
    updateAllocation(serverId: string, port: number, name: string): Promise<void>;
    /**
     * Delete an allocation
     * DELETE /modrinth/v0/servers/:id/allocations/:port
     */
    deleteAllocation(serverId: string, port: number): Promise<void>;
    /**
     * Check if a subdomain is available
     * GET /modrinth/v0/subdomains/:subdomain/isavailable
     */
    checkSubdomainAvailability(subdomain: string): Promise<{
        available: boolean;
    }>;
    /**
     * Change a server's subdomain
     * POST /modrinth/v0/servers/:id/subdomain
     */
    changeSubdomain(serverId: string, subdomain: string): Promise<void>;
    /**
     * Get startup configuration for a server
     * GET /modrinth/v0/servers/:id/startup
     */
    getStartupConfig(serverId: string): Promise<Archon.Servers.v0.StartupConfig>;
    /**
     * Update startup configuration for a server
     * POST /modrinth/v0/servers/:id/startup
     */
    updateStartupConfig(serverId: string, config: {
        invocation: string | null;
        jdk_version: string | null;
        jdk_build: string | null;
    }): Promise<void>;
    /**
     * Dismiss a server notice
     * POST /modrinth/v0/servers/:id/notices/:noticeId/dismiss
     */
    dismissNotice(serverId: string, noticeId: number): Promise<void>;
}
