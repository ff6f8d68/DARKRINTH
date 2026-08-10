import { AbstractModule } from '../../../core/abstract-module';
import { Archon } from '../types';
/**
 * @deprecated Use `client.archon.backups_queue_v1` (Backups Queue API) instead.
 */
export declare class ArchonBackupsV1Module extends AbstractModule {
    getModuleID(): string;
    /**
     * @deprecated Use `client.archon.backups_queue_v1.list` instead.
     */
    /** GET /v1/servers/:server_id/worlds/:world_id/backups */
    list(serverId: string, worldId: string): Promise<Archon.Backups.v1.Backup[]>;
    /**
     * @deprecated Use `client.archon.backups_queue_v1.list` instead.
     */
    /** GET /v1/servers/:server_id/worlds/:world_id/backups/:backup_id */
    get(serverId: string, worldId: string, backupId: string): Promise<Archon.Backups.v1.Backup>;
    /**
     * @deprecated Use `client.archon.backups_queue_v1.create` instead.
     */
    /** POST /v1/servers/:server_id/worlds/:world_id/backups */
    create(serverId: string, worldId: string, request: Archon.Backups.v1.BackupRequest): Promise<Archon.Backups.v1.PostBackupResponse>;
    /**
     * @deprecated Use `client.archon.backups_queue_v1.restore` instead.
     */
    /** POST /v1/servers/:server_id/worlds/:world_id/backups/:backup_id/restore */
    restore(serverId: string, worldId: string, backupId: string): Promise<void>;
    /**
     * @deprecated Use `client.archon.backups_queue_v1.delete` for backup deletion, or
     * `client.archon.backups_queue_v1.cancelCreate` / `cancelRestore` for active operations.
     */
    /** DELETE /v1/servers/:server_id/worlds/:world_id/backups/:backup_id */
    delete(serverId: string, worldId: string, backupId: string): Promise<void>;
    /**
     * @deprecated Use `client.archon.backups_queue_v1.retry` instead.
     */
    /** POST /v1/servers/:server_id/worlds/:world_id/backups/:backup_id/retry */
    retry(serverId: string, worldId: string, backupId: string): Promise<void>;
    /**
     * @deprecated Legacy backups only; no queue equivalent. Prefer renaming via other supported flows if available.
     */
    /** PATCH /v1/servers/:server_id/worlds/:world_id/backups/:backup_id */
    rename(serverId: string, worldId: string, backupId: string, request: Archon.Backups.v1.PatchBackup): Promise<void>;
}
