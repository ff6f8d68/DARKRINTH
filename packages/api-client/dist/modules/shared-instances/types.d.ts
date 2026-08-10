export declare namespace SharedInstances {
    namespace Invites {
        namespace v1 {
            type UserManager = {
                id: string;
                name: string;
                type: 'user';
                avatar?: string | null;
            };
            type ServerManager = {
                name: string;
                type: 'server';
                icon?: string | null;
            };
            type Manager = UserManager | ServerManager;
            type InviteUser = {
                id: string;
                name: string;
                avatar?: string | null;
                joined_at: string | null;
            };
            type Invite = {
                instance_id: string;
                instance_name: string;
                instance_icon?: string | null;
                game_version: string;
                loader_version: string;
                managers: Manager[];
                instance_users?: InviteUser[];
            };
        }
    }
    namespace Instances {
        namespace v1 {
            type Instance = {
                name: string;
                icon: string | null;
                quarantine: boolean;
            };
            type JoinType = 'owner' | 'invite' | 'link';
            type InstanceUser = {
                id: string;
                joined_at: string | null;
                join_type: JoinType;
                last_played: string | null;
            };
            type InstanceUsers = {
                users: InstanceUser[];
                tokens: number;
            };
            type FileMetadata = {
                path: string;
                hash: string;
            };
            type ExternalFile = {
                file_name: string;
                file_type: string;
                url: string;
                file_size?: number;
                metadata?: FileMetadata[];
            };
            type InstanceVersion = {
                version: number;
                modrinth_ids?: string[];
                ready: boolean;
                external_files: ExternalFile[];
                modpack_id: string | null;
                game_version: string;
                loader: string;
                loader_version: string;
            };
        }
    }
    namespace Moderation {
        namespace v1 {
            type BlacklistUserRequest = {
                user_ids: string[];
            };
        }
    }
    namespace Users {
        namespace v1 {
            type BlacklistStatus = {
                blacklisted: boolean;
            };
        }
    }
}
