import { Labrinth } from '../labrinth/types';
export declare namespace Archon {
    namespace Nodes {
        namespace Internal {
            type Node = {
                id: string;
                hostname: string;
                region: string;
                created_at: string | null;
                locked: boolean;
            };
            type Server = {
                id: string;
                available: boolean;
            };
            type NodeFull = Node & {
                servers: Server[];
            };
            type Overview = {
                node_hostnames: string[];
                regions: Region[];
                total_servers_active: number;
            };
            type Region = {
                display_name: string;
                country_code: string;
                key: string;
                server_count: number;
                node_count: number;
            };
            type RegionWithStatistics = {
                region: Region;
                active_servers: string[];
            };
        }
    }
    namespace Notices {
        namespace v0 {
            type Notice = {
                id: number;
                dismissable: boolean;
                title: string | null;
                message: string;
                level: string;
                announced: string;
            };
            type ListedNotice = {
                id: number;
                dismissable: boolean;
                message: string;
                title: string | null;
                level: string;
                announce_at: string;
                expires: string | null;
                assigned: Assignment[];
                dismissed_by: Dismisser[];
            };
            type Dismisser = {
                server: string;
                dismissed_on: string;
            };
            type Assignment = {
                kind: string;
                id: string;
                name: string;
            };
            type AssignmentTarget = {
                server: string;
            } | {
                node: string;
            };
            type Announce = {
                message: string;
                title?: string | null;
                level: string;
                dismissable: boolean;
                announce_at: string;
                expires?: string | null;
            };
            type AnnouncePatch = {
                message?: string;
                title?: string | null;
                level?: string;
                dismissable?: boolean;
                announce_at?: string;
                expires?: string | null;
            };
            type PostNoticeResponseBody = {
                id: number;
            };
        }
    }
    namespace Actions {
        namespace v1 {
            type SortOrder = 'asc' | 'desc';
            type ActionName = 'server_created' | 'changed_server_name' | 'changed_server_subdomain' | 'server_reallocated' | 'server_plan_changed' | 'user_invited' | 'user_invite_revoked' | 'user_permission_modified' | 'user_removed' | 'addon_added' | 'addon_uploaded' | 'addon_disabled' | 'addon_enabled' | 'addon_deleted' | 'addon_updated' | 'modpack_changed' | 'modpack_unlinked' | 'server_repaired' | 'server_reset' | 'server_started' | 'server_stopped' | 'server_restarted' | 'server_killed' | 'port_allocation_added' | 'port_allocation_removed' | 'loader_version_edited' | 'game_version_edited' | 'server_properties_modified' | 'file_uploaded' | 'file_deleted' | 'file_renamed' | 'file_edited' | 'sftp_login' | 'console_command_executed' | 'console_cleared' | 'backup_created' | 'backup_renamed' | 'backup_restored' | 'backup_deleted' | 'startup_command_modified' | 'java_runtime_modified' | 'java_version_modified';
            type Action = {
                action: ActionName | string;
                metadata?: unknown;
            };
            type UserPermissionsActionMetadata = {
                user_id: string;
                permissions?: ServerUsers.v1.UserScope | null;
            };
            type ActionUser = {
                type: 'user';
                user_id: string;
            } | {
                type: 'support';
                user_id?: string | null;
            };
            type ActionEntry = {
                actor: ActionUser;
                action: Action;
                server_id: string;
                world_id?: string | null;
                timestamp: string;
            };
            type UserResp = {
                username: string;
                avatar_url?: string | null;
            };
            type AddonResp = {
                title: string;
                slug?: string | null;
                icon_url?: string | null;
                version?: string | null;
            };
            type VersionResp = {
                name: string;
                version_number?: string | null;
            };
            type ActionLogResponse = {
                next_offset?: number | null;
                data: ActionEntry[];
                users: Record<string, UserResp>;
                addons: Record<string, AddonResp>;
                versions: Record<string, VersionResp>;
            };
            type ActionLogFilter = {
                users?: string[];
                worlds?: Array<string | null>;
                actions?: ActionName[];
            };
            type ListActionLogOptions = {
                filter?: ActionLogFilter;
                limit?: number;
                offset?: number;
                order?: SortOrder;
                min_datetime?: string;
                max_datetime?: string;
            };
        }
    }
    namespace Transfers {
        namespace Internal {
            type ProvisionOptions = {
                region?: string | null;
                node_tags: string[];
            };
            type ScheduleServerTransfersRequest = {
                server_ids: string[];
                scheduled_at?: string | null;
                target_region?: string | null;
                node_tags?: string[];
                reason?: string | null;
            };
            type ScheduleNodeTransfersRequest = {
                node_hostnames: string[];
                scheduled_at?: string | null;
                target_region?: string | null;
                node_tags?: string[];
                reason?: string | null;
                cordon_nodes?: boolean;
                tag_nodes?: string | null;
            };
            type ScheduleTransfersResponse = {
                batch_id: number;
                scheduled_count: number;
            };
            type CancelTransfersRequest = {
                batch_ids: number[];
            };
            type CancelTransfersResponse = {
                cancelled_count: number;
            };
            type TransferLogBatchEntry = {
                id: number;
                created_by: string;
                created_at: string;
                reason?: string | null;
                scheduled_at: string;
                cancelled: boolean;
                log_count: number;
                provision_options: ProvisionOptions;
            };
            type TransferHistoryQuery = {
                page?: number;
                page_size?: number;
            };
            type TransferHistoryResponse = {
                batches: TransferLogBatchEntry[];
                total: number;
                page: number;
                page_size: number;
            };
        }
    }
    namespace Content {
        namespace v1 {
            type AddonKind = 'mod' | 'plugin' | 'datapack' | 'shader' | 'resourcepack';
            type ContentOwnerType = 'user' | 'organization';
            type ContentOwner = {
                id: string;
                name: string;
                type: ContentOwnerType;
                icon_url: string | null;
            };
            type AddonVersion = {
                id: string;
                name: string | null;
                environment?: Labrinth.Projects.v3.Environment | null;
            };
            type Addon = {
                id: string;
                filename: string;
                filesize: number;
                disabled: boolean;
                kind: AddonKind;
                from_modpack: boolean;
                pack_client_retained: boolean;
                pack_client_depends: boolean;
                has_update: string | null;
                name: string | null;
                project_id: string | null;
                version: AddonVersion | null;
                owner: ContentOwner | null;
                icon_url: string | null;
            };
            type Addons = {
                modloader: string | null;
                modloader_version: string | null;
                game_version: string | null;
                modpack: ModpackFields | null;
                addons: Addon[] | null;
            };
            type AddAddonRequest = {
                project_id: string;
                version_id?: string;
                kind?: AddonKind;
            };
            type AddAddonsRequest = AddAddonRequest[];
            type RemoveAddonRequest = {
                kind: AddonKind;
                filename: string;
            };
            type UpdateAddonRequest = {
                filename: string;
                version_id?: string | null;
            };
            type Modloader = 'forge' | 'neo_forge' | 'fabric' | 'quilt' | 'paper' | 'purpur' | 'vanilla';
            type ModpackSpecModrinth = {
                platform: 'modrinth';
                project_id: string;
                version_id: string;
            };
            type ModpackSpecLocalFile = {
                platform: 'local_file';
                filename: string;
                name: string;
                description: string | null;
            };
            type ModpackSpec = ModpackSpecModrinth | ModpackSpecLocalFile;
            type ModpackOwner = {
                id: string;
                name: string;
                type: 'user' | 'organization';
                icon_url: string | null;
            };
            type ModpackFields = {
                spec: ModpackSpec;
                has_update: string | null;
                title: string | null;
                description: string | null;
                icon_url: string | null;
                owner: ModpackOwner | null;
                version_number: string | null;
                date_published: string | null;
                downloads: number | null;
                followers: number | null;
            };
            type KnownPropertiesFields = {
                allow_cheats?: string | null;
                allow_flight?: string | null;
                difficulty?: string | null;
                enforce_whitelist?: string | null;
                force_gamemode?: string | null;
                gamemode?: string | null;
                generate_structures?: string | null;
                generator_settings?: string | null;
                hardcore?: string | null;
                level_seed?: string | null;
                level_type?: string | null;
                max_players?: string | null;
                max_tick_time?: string | null;
                motd?: string | null;
                pause_when_empty_seconds?: string | null;
                player_idle_timeout?: string | null;
                require_resource_pack?: string | null;
                resource_pack?: string | null;
                resource_pack_id?: string | null;
                resource_pack_sha1?: string | null;
                simulation_distance?: string | null;
                spawn_protection?: string | null;
                sync_chunk_writes?: string | null;
                view_distance?: string | null;
                white_list?: string | null;
            };
            type PropertiesFields = {
                known: KnownPropertiesFields;
                custom?: Record<string, string>;
            };
            type PatchPropertiesFields = {
                known?: KnownPropertiesFields;
                custom?: Record<string, string | null>;
            };
            type JreVendor = 'temurin' | 'corretto' | 'graal';
            type RuntimeOptions = {
                java_version: number | null;
                jre_vendor: JreVendor | null;
                original_invocation: string | null;
                startup_command: string | null;
            };
            type PatchRuntimeOptions = {
                java_version?: number | null;
                jre_vendor?: JreVendor | null;
                startup_command?: string | null;
            };
            type InstallWorldContent = {
                content_variant: 'modpack';
                spec: ModpackSpec;
                soft_override: boolean;
                properties?: PropertiesFields | null;
            } | {
                content_variant: 'bare';
                loader: Modloader;
                version: string;
                game_version?: string;
                soft_override: boolean;
                properties?: PropertiesFields | null;
            };
            type AddonDiffVersion = {
                id: string;
                version_number: string;
            };
            type AddonDiffProject = {
                id: string;
                title: string;
                icon_url: string | null;
                slug: string;
            };
            type AddonBaseDiffInfo = {
                current_version: AddonDiffVersion | null;
                new_version: AddonDiffVersion | null;
                file_name: string | null;
                project_id: string | null;
                project: AddonDiffProject | null;
            };
            type AddonDiffAdded = AddonBaseDiffInfo & {
                type: 'added';
                new_version_id: string;
            };
            type AddonDiffRemoved = AddonBaseDiffInfo & {
                type: 'removed';
            };
            type AddonDiffUpdated = AddonBaseDiffInfo & {
                type: 'updated';
                current_version_id: string;
                new_version_id: string;
            };
            type AddonDiff = AddonDiffAdded | AddonDiffRemoved | AddonDiffUpdated;
            type UpdateGameVersionPreview = {
                addon_changes: AddonDiff[];
                new_game_version: string;
                new_loader_version: string;
                has_unknown_content: boolean;
            };
        }
    }
    namespace ServerUsers {
        namespace v1 {
            type ServerUserRole = 'Owner' | 'Editor' | 'Viewer' | 'Unknown';
            type AssignableServerUserRole = Exclude<ServerUserRole, 'Owner' | 'Unknown'>;
            const UserScope: {
                readonly NONE: "";
                readonly SERVER_ADMIN: "SERVER_ADMIN";
                readonly BASE_READ: "BASE_READ";
                readonly POWER_ACTIONS: "POWER_ACTIONS";
                readonly EXEC_COMMANDS: "EXEC_COMMANDS";
                readonly FILES_WRITE: "FILES_WRITE";
                readonly SETUP: "SETUP";
                readonly BACKUPS: "BACKUPS";
                readonly ADVANCED: "ADVANCED";
                readonly RESET_SERVER: "RESET_SERVER";
                readonly MANAGE_USERS: "MANAGE_USERS";
                readonly SUPPORT_AGENT: "SUPPORT_AGENT";
                readonly INFRA_MANAGER: "INFRA_MANAGER";
                readonly INFRA_MANAGER_READ: "INFRA_MANAGER_READ";
                readonly INFRA_SERVERS_XFER: "INFRA_SERVERS_XFER";
                readonly INFRA_USERS: "INFRA_USERS";
            };
            type UserScope = string | number;
            type UserResp = {
                id: string;
                username: string;
                avatar_url?: string | null;
            };
            type ServerUser = {
                user: UserResp;
                added_on?: string | null;
                last_invite_sent?: string | null;
                permissions: UserScope;
            };
            type AddServerUserRequest = {
                server_id?: string | null;
                user_id: string;
                added_on?: string | null;
                role: ServerUserRole;
            };
            type ReinviteResponse = {
                sent: boolean;
                cooldown_seconds: number | null;
            };
        }
    }
    namespace Servers {
        namespace v0 {
            type ServerGetResponse = {
                servers: Server[];
                pagination: Pagination;
                users: Record<string, ServerOwner>;
            };
            type Pagination = {
                current_page: number;
                page_size: number;
                total_pages: number;
                total_items: number;
            };
            type ServerOwner = {
                id: string;
                username: string;
                avatar_url?: string | null;
            };
            type Status = 'installing' | 'broken' | 'available' | 'suspended';
            type SuspensionReason = 'moderated' | 'paymentfailed' | 'cancelled' | 'upgrading' | 'other';
            type Loader = 'Forge' | 'NeoForge' | 'Fabric' | 'Quilt' | 'Purpur' | 'Spigot' | 'Vanilla' | 'Paper';
            type Game = 'Minecraft';
            type UpstreamKind = 'modpack' | 'none';
            type Server = {
                server_id: string;
                name: string;
                owner_id: string;
                net: Net;
                game: Game;
                backup_quota: number;
                used_backup_quota: number;
                status: Status;
                suspension_reason: SuspensionReason | null;
                loader: Loader | null;
                loader_version: string | null;
                mc_version: string | null;
                upstream: Upstream | null;
                sftp_username: string;
                sftp_password: string;
                sftp_host: string;
                datacenter: string;
                notices: Notice[];
                node: NodeInfo | null;
                flows: Flows;
                is_medal: boolean;
                current_user_permissions: UserScope;
                medal_expires?: string;
            };
            type UserScope = number;
            type Net = {
                ip: string | null;
                port: number;
                domain: string;
            };
            type Upstream = {
                kind: UpstreamKind;
                version_id: string;
                project_id: string;
            };
            type Notice = {
                id: number;
                dismissable: boolean;
                title: string;
                message: string;
                level: string;
                announced: string;
            };
            type NodeInfo = {
                token: string;
                instance: string;
            };
            type Flows = {
                intro: boolean;
            };
            type GetServersOptions = {
                limit?: number;
                offset?: number;
            };
            type StockRequest = {
                cpu?: number;
                memory_mb?: number;
                swap_mb?: number;
                storage_mb?: number;
            };
            type StockResponse = {
                available: number;
            };
            type JWTAuth = {
                url: string;
                token: string;
            };
            type ReinstallLoaderRequest = {
                loader: string;
                loader_version?: string;
                game_version?: string;
            };
            type ReinstallModpackRequest = {
                project_id: string;
                version_id?: string;
            };
            type ReinstallRequest = ReinstallLoaderRequest | ReinstallModpackRequest;
            type MrpackReinstallAuth = {
                url: string;
                token: string;
            };
            type Allocation = {
                port: number;
                name: string;
            };
            type StartupConfig = {
                invocation: string;
                original_invocation: string;
                jdk_version: 'lts8' | 'lts11' | 'lts17' | 'lts21';
                jdk_build: 'corretto' | 'temurin' | 'graal';
            };
        }
        namespace v1 {
            type ServerFull = {
                id: string;
                name: string;
                subdomain: string;
                specs: ServerResources;
                sftp_username: string;
                sftp_password: string;
                tags: string[];
                location: ServerLocation;
                worlds: WorldFull[];
            };
            type ServerResources = {
                cpu: number;
                memory_mb: number;
                storage_mb: number;
                swap_mb: number;
            };
            type ServerLocation = {
                status: 'assigned';
                location_metadata: {
                    region: string;
                    region_should_be_user_displayed: boolean;
                    hostname: string;
                    is_decommissioned_node: boolean;
                };
            } | {
                status: 'unassigned';
            };
            type WorldFull = {
                id: string;
                name: string;
                created_at: string;
                is_active: boolean;
                /**
                 * @deprecated Prefer `client.archon.backups_queue_v1.list()` for queue-aware backup state.
                 */
                backups: Archon.Backups.v1.Backup[];
                content: WorldContentInfo | null;
                readiness: WorldReadiness;
            };
            type WorldReadiness = {
                data_synchronized_fetched: boolean;
            };
            type WorldContentInfo = {
                modloader: string;
                modloader_version: string;
                game_version: string;
                java_version: number | null;
                invocation: string | null;
                original_invocation: string | null;
            };
            type Region = {
                shortcode: string;
                country_code: string;
                display_name: string;
                lat: number;
                lon: number;
                zone: string;
            };
        }
    }
    namespace Backups {
        /**
         * @deprecated Use {@link Archon.BackupsQueue.v1} and `client.archon.backups_queue_v1` instead.
         */
        namespace v1 {
            /** @deprecated Use {@link Archon.BackupsQueue.v1} instead. */
            type BackupState = 'ongoing' | 'done' | 'failed' | 'cancelled' | 'unchanged';
            /** @deprecated Use {@link Archon.BackupsQueue.v1} instead. */
            type BackupTask = 'file' | 'create' | 'restore';
            /** @deprecated Use {@link Archon.BackupsQueue.v1} instead. */
            type BackupStatus = 'pending' | 'in_progress' | 'timed_out' | 'error' | 'done';
            /** @deprecated Use {@link Archon.BackupsQueue.v1} instead. */
            type BackupTaskProgress = {
                progress: number;
                state: BackupState;
            };
            /** @deprecated Use {@link Archon.BackupsQueue.v1.BackupQueueBackup} instead. */
            type Backup = {
                id: string;
                physical_id: string;
                name: string;
                created_at: string;
                automated: boolean;
                status: BackupStatus;
                interrupted: boolean;
                ongoing: boolean;
                locked: boolean;
                task?: {
                    file?: BackupTaskProgress;
                    create?: BackupTaskProgress;
                    restore?: BackupTaskProgress;
                };
            };
            /** @deprecated Use {@link Archon.BackupsQueue.v1.BackupRequest} instead. */
            type BackupRequest = {
                name: string;
            };
            /** @deprecated Use {@link Archon.BackupsQueue.v1} instead. */
            type PatchBackup = {
                name?: string;
            };
            /** @deprecated Use {@link Archon.BackupsQueue.v1.PostBackupQueueResponse} instead. */
            type PostBackupResponse = {
                id: string;
            };
        }
    }
    namespace BackupsQueue {
        namespace v1 {
            type BackupQueueOperationType = 'create' | 'restore';
            type BackupQueueState = 'pending' | 'ongoing' | 'completed' | 'cancelled' | 'failed' | 'timed_out';
            type BackupStatus = 'pending' | 'in_progress' | 'timed_out' | 'error' | 'done';
            type BackupRequest = {
                name: string;
            };
            type PostBackupQueueResponse = {
                id: string;
            };
            type UserInfo = {
                id: string;
                username: string;
                avatar_url: string | null;
            };
            type DeleteManyBackupRequest = {
                backup_ids: string[];
            };
            type ActiveOperation = {
                backup_id: string;
                operation_type: BackupQueueOperationType;
                operation_id: number | null;
                has_parent: boolean;
                scheduled_for: string;
                started_at: string | null;
                synthetic_legacy: boolean;
                user_info: UserInfo | null;
            };
            type BackupQueueOperation = {
                operation_type: BackupQueueOperationType;
                operation_id: number | null;
                state: BackupQueueState;
                scheduled_for: string;
                started_at: string | null;
                completed_at: string | null;
                has_parent: boolean;
                error: string | null;
                should_prompt: boolean;
                synthetic_legacy: boolean;
                user_info: UserInfo | null;
            };
            type BackupQueueBackup = {
                id: string;
                name: string;
                created_at: string;
                status: BackupStatus;
                locked: boolean;
                automated: boolean;
                history: BackupQueueOperation[];
            };
            type BackupsQueueResponse = {
                active_operations: ActiveOperation[];
                backups: BackupQueueBackup[];
            };
        }
    }
    namespace Sync {
        namespace v1 {
            type SyncCategory = 'backup' | 'users' | 'server' | 'protocol' | 'world';
            type SyncIntent = 'all' | SyncCategory | SyncCategory[];
            type BackupOperationStatus = 'completed' | 'cancelled' | 'failed' | 'timed-out';
            type ServerNetworkPort = {
                port: number;
                name: string;
            };
            type ProtocolResetEvent = {
                type: 'protocol.reset';
            };
            type ProtocolInvalidEvent = {
                type: 'protocol.invalid';
            };
            type ProtocolErrorEvent = {
                type: 'protocol.error';
                error: string;
            };
            type BackupNewEvent = {
                type: 'backup.new';
                id: string;
            };
            type BackupPatchEvent = {
                type: 'backup.patch';
                world_id: string;
                backup_id: string;
                name: string;
            };
            type BackupDeleteEvent = {
                type: 'backup.delete';
                world_id: string;
                backup_id: string;
            };
            type BackupOperationStartEvent = {
                type: 'backup.operation.create.init' | 'backup.operation.create.start' | 'backup.operation.restore.init' | 'backup.operation.restore.start';
                world_id: string;
                backup_id: string;
                operation_id: number;
            };
            type BackupOperationDoneEvent = {
                type: 'backup.operation.create.done' | 'backup.operation.restore.done';
                world_id: string;
                backup_id: string;
                operation_id: number;
                status: BackupOperationStatus;
            };
            type ServerPatchEvent = {
                type: 'server.patch';
                name: string;
                subdomain: string;
            };
            type ServerNetworkPatchEvent = {
                type: 'server.network.patch';
                ports: ServerNetworkPort[];
            };
            type ServerTransferEvent = {
                type: 'server.transfer.start' | 'server.transfer.done';
                target_node: string;
            };
            type UsersPatchEvent = {
                type: 'users.patch';
            };
            type WorldPatchEvent = {
                type: 'world.patch';
                world_id: string;
                name: string;
            };
            type WorldStartupPatchEvent = {
                type: 'world.startup.patch';
                world_id: string;
                java_version: number | null;
                invocation: string | null;
                original_invocation: string | null;
            };
            type WorldContentAddonPatchEvent = {
                type: 'world.content.addon.patch';
                world_id: string;
                specs: Archon.Content.v1.Addon[];
            };
            type WorldContentBaseUpdateEvent = {
                type: 'world.content.base.update';
                world_id: string;
                spec: Archon.Content.v1.Addons;
            };
            type SyncEvent = ProtocolResetEvent | ProtocolInvalidEvent | ProtocolErrorEvent | BackupNewEvent | BackupPatchEvent | BackupDeleteEvent | BackupOperationStartEvent | BackupOperationDoneEvent | ServerPatchEvent | ServerNetworkPatchEvent | ServerTransferEvent | UsersPatchEvent | WorldPatchEvent | WorldStartupPatchEvent | WorldContentAddonPatchEvent | WorldContentBaseUpdateEvent;
        }
    }
    namespace Websocket {
        namespace v0 {
            type WSAuth = {
                url: string;
                token: string;
            };
            type BackupState = 'pending' | 'ongoing' | 'done' | 'failed' | 'cancelled' | 'unchanged' | 'damaged';
            type BackupTask = 'file' | 'create' | 'restore';
            type WSBackupProgressEvent = {
                event: 'backup-progress';
                id: string;
                task: BackupTask;
                state: BackupState;
                progress: number;
                start_time?: number | null;
                finish_time?: number | null;
            };
            type WSLogEvent = {
                event: 'log';
                stream: 'stdout' | 'stderr';
                message: string;
            };
            type WSLog4jEvent = {
                event: 'log4j';
                logger_name?: string;
                level?: string;
                thread_name?: string;
                timestamp_millis?: number;
                message?: string;
                throwable?: string;
            };
            type WSStatsEvent = {
                event: 'stats';
                cpu_percent: number;
                ram_usage_bytes: number;
                ram_total_bytes: number;
                storage_usage_bytes: number;
                storage_total_bytes: number;
                net_tx_bytes: number;
                net_rx_bytes: number;
            };
            type PowerState = 'running' | 'stopped' | 'starting' | 'stopping' | 'crashed';
            type WSPowerStateEvent = {
                event: 'power-state';
                state: PowerState;
                oom_killed?: boolean;
                exit_code?: number;
            };
            type WSAuthExpiringEvent = {
                event: 'auth-expiring';
            };
            type WSAuthIncorrectEvent = {
                event: 'auth-incorrect';
            };
            type WSAuthOkEvent = {
                event: 'auth-ok';
            };
            type WSInstallationResultEvent = WSInstallationResultOkEvent | WSInstallationResultErrEvent;
            type WSInstallationResultOkEvent = {
                event: 'installation-result';
                result: 'ok';
            };
            type WSInstallationResultErrEvent = {
                event: 'installation-result';
                result: 'err';
                reason?: string;
            };
            type WSUptimeEvent = {
                event: 'uptime';
                uptime: number;
            };
            type WSNewModEvent = {
                event: 'new-mod';
                project_id: string;
                version_id: string;
            };
            type FilesystemOpKind = 'unarchive';
            type FilesystemOpState = 'queued' | 'ongoing' | 'done' | 'cancelled' | 'failure-corrupted' | 'failure-invalid-path';
            type FilesystemOperation = {
                op: FilesystemOpKind;
                id: string;
                progress: number;
                bytes_processed: number;
                files_processed: number;
                state: FilesystemOpState;
                mime: string;
                current_file?: string;
                invalid_path?: string;
                src: string;
                started: string;
            };
            type QueuedFilesystemOp = {
                op: FilesystemOpKind;
                src: string;
            };
            type WSFilesystemOpsEvent = {
                event: 'filesystem-ops';
                all: FilesystemOperation[];
            };
            type ReadinessState = 'deprovisioned' | 'waiting_active_world' | 'waiting_world_spec_details_for_progress' | 'pulling_world_data' | 'migration_zfs' | 'sync_content' | 'container_readying' | 'ready';
            type FlattenedPowerState = 'not_ready' | 'starting' | 'running' | 'stopping' | 'idle';
            type SyncInstallPhase = 'Analyzing' | 'InstallingPack' | 'InstallingLoader' | 'Addons';
            type SyncContentProgress = {
                started_at: string;
                phase: SyncInstallPhase;
                percent: number;
            };
            type SyncContentError = {
                step: string;
                description: string;
            };
            type WSStateEvent = {
                event: 'state';
                debug: string;
                power_variant: FlattenedPowerState;
                exit_code?: number | null;
                was_oom?: boolean;
                target: 'start' | 'stop' | 'restart' | null;
                uptime: number;
                progress: SyncContentProgress | null;
                content_error: SyncContentError | null;
            };
            type WSOutgoingMessage = WSAuthMessage | WSCommandMessage;
            type WSAuthMessage = {
                event: 'auth';
                jwt: string;
            };
            type WSCommandMessage = {
                event: 'command';
                cmd: string;
            };
            type WSEvent = WSBackupProgressEvent | WSLogEvent | WSLog4jEvent | WSStatsEvent | WSPowerStateEvent | WSStateEvent | WSAuthExpiringEvent | WSAuthIncorrectEvent | WSAuthOkEvent | WSInstallationResultEvent | WSUptimeEvent | WSNewModEvent | WSFilesystemOpsEvent;
            type WSEventType = WSEvent['event'];
        }
    }
}
