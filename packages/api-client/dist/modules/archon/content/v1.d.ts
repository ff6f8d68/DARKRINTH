import { AbstractModule } from '../../../core/abstract-module';
import { Archon } from '../types';
export declare class ArchonContentV1Module extends AbstractModule {
    getModuleID(): string;
    /** GET /v1/:server_id/worlds/:world_id/addons */
    getAddons(serverId: string, worldId: string, options?: {
        from_modpack?: boolean;
        disabled?: boolean;
        addons?: boolean;
        updates?: boolean;
    }): Promise<Archon.Content.v1.Addons>;
    /** POST /v1/:server_id/worlds/:world_id/addons */
    addAddon(serverId: string, worldId: string, request: Archon.Content.v1.AddAddonRequest): Promise<void>;
    /** POST /v1/:server_id/worlds/:world_id/addons/install-many */
    addAddons(serverId: string, worldId: string, addons: Archon.Content.v1.AddAddonRequest[]): Promise<void>;
    /** POST /v1/:server_id/worlds/:world_id/addons/delete */
    deleteAddon(serverId: string, worldId: string, request: Archon.Content.v1.RemoveAddonRequest): Promise<void>;
    /** POST /v1/:server_id/worlds/:world_id/addons/disable */
    disableAddon(serverId: string, worldId: string, request: Archon.Content.v1.RemoveAddonRequest): Promise<void>;
    /** POST /v1/:server_id/worlds/:world_id/addons/enable */
    enableAddon(serverId: string, worldId: string, request: Archon.Content.v1.RemoveAddonRequest): Promise<void>;
    /** POST /v1/:server_id/worlds/:world_id/addons/delete-many */
    deleteAddons(serverId: string, worldId: string, items: Archon.Content.v1.RemoveAddonRequest[]): Promise<void>;
    /** POST /v1/:server_id/worlds/:world_id/addons/disable-many */
    disableAddons(serverId: string, worldId: string, items: Archon.Content.v1.RemoveAddonRequest[]): Promise<void>;
    /** POST /v1/:server_id/worlds/:world_id/addons/enable-many */
    enableAddons(serverId: string, worldId: string, items: Archon.Content.v1.RemoveAddonRequest[]): Promise<void>;
    /** POST /v1/:server_id/worlds/:world_id/content */
    installContent(serverId: string, worldId: string, request: Archon.Content.v1.InstallWorldContent): Promise<void>;
    /** POST /v1/:server_id/worlds/:world_id/content/repair */
    repair(serverId: string, worldId: string): Promise<void>;
    /** POST /v1/:server_id/worlds/:world_id/content/unlink-modpack */
    unlinkModpack(serverId: string, worldId: string): Promise<void>;
    /** GET /v1/:server_id/worlds/:world_id/addons/update?filename=... */
    getAddonUpdate(serverId: string, worldId: string, filename: string): Promise<Archon.Content.v1.Addon>;
    /** POST /v1/:server_id/worlds/:world_id/addons/update */
    updateAddon(serverId: string, worldId: string, request: Archon.Content.v1.UpdateAddonRequest): Promise<void>;
    /** POST /v1/:server_id/worlds/:world_id/addons/update-many */
    updateAddons(serverId: string, worldId: string, addons: Archon.Content.v1.UpdateAddonRequest[]): Promise<void>;
    /** GET /v1/:server_id/worlds/:world_id/content/modpack/update */
    getModpackUpdate(serverId: string, worldId: string): Promise<Archon.Content.v1.ModpackFields>;
    /** POST /v1/:server_id/worlds/:world_id/content/modpack/update */
    updateModpack(serverId: string, worldId: string): Promise<void>;
    /** GET /v1/:server_id/worlds/:world_id/content/update-game-version?game_version=... */
    getUpdateGameVersionPreview(serverId: string, worldId: string, gameVersion: string, signal?: AbortSignal): Promise<Archon.Content.v1.UpdateGameVersionPreview>;
    /** POST /v1/:server_id/worlds/:world_id/content/update-game-version?game_version=... */
    applyGameVersionUpdate(serverId: string, worldId: string, gameVersion: string): Promise<void>;
}
