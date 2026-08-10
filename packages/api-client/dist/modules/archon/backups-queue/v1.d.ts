import { AbstractModule } from '../../../core/abstract-module';
import { Archon } from '../types';
export declare class ArchonBackupsQueueV1Module extends AbstractModule {
    getModuleID(): string;
    /** GET /v1/servers/:server_id/worlds/:world_id/backups-queue */
    list(serverId: string, worldId: string): Promise<Archon.BackupsQueue.v1.BackupsQueueResponse>;
    /** POST /v1/servers/:server_id/worlds/:world_id/backups-queue */
    create(serverId: string, worldId: string, request: Archon.BackupsQueue.v1.BackupRequest): Promise<Archon.BackupsQueue.v1.PostBackupQueueResponse>;
    /** POST /v1/servers/:server_id/worlds/:world_id/backups-queue/history/create/:operation_id/ack */
    ackCreate(serverId: string, worldId: string, operationId: number): Promise<void>;
    /** POST /v1/servers/:server_id/worlds/:world_id/backups-queue/history/create/:operation_id/cancel */
    cancelCreate(serverId: string, worldId: string, operationId: number): Promise<void>;
    /** POST /v1/servers/:server_id/worlds/:world_id/backups-queue/history/restore/:operation_id/ack */
    ackRestore(serverId: string, worldId: string, operationId: number): Promise<void>;
    /** POST /v1/servers/:server_id/worlds/:world_id/backups-queue/history/restore/:operation_id/cancel */
    cancelRestore(serverId: string, worldId: string, operationId: number): Promise<void>;
    /** DELETE /v1/servers/:server_id/worlds/:world_id/backups-queue/:backup_id */
    delete(serverId: string, worldId: string, backupId: string): Promise<void>;
    /** POST /v1/servers/:server_id/worlds/:world_id/backups-queue/delete-many */
    deleteMany(serverId: string, worldId: string, backupIds: string[]): Promise<void>;
    /** POST /v1/servers/:server_id/worlds/:world_id/backups-queue/:backup_id/restore */
    restore(serverId: string, worldId: string, backupId: string, request: Archon.BackupsQueue.v1.BackupRequest): Promise<void>;
    /** POST /v1/servers/:server_id/worlds/:world_id/backups-queue/:backup_id/retry */
    retry(serverId: string, worldId: string, backupId: string): Promise<void>;
}
