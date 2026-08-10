import { AbstractModule } from '../../../core/abstract-module';
import { Archon } from '../types';
export declare class ArchonServerUsersV1Module extends AbstractModule {
    getModuleID(): string;
    /**
     * Get list of users with access to a server
     * GET /v1/servers/:server_id/users
     */
    list(serverId: string): Promise<Archon.ServerUsers.v1.ServerUser[]>;
    /**
     * Add a user to a server
     * POST /v1/servers/:server_id/users
     */
    add(serverId: string, user: Archon.ServerUsers.v1.AddServerUserRequest): Promise<void>;
    /**
     * Re-send an invite to a pending server user.
     * POST /v1/servers/:server_id/users/:user_id/reinvite
     */
    reinvite(serverId: string, userId: string): Promise<Archon.ServerUsers.v1.ReinviteResponse>;
    /**
     * Remove a user from a server
     * DELETE /v1/servers/:server_id/users/:user_id
     */
    delete(serverId: string, userId: string): Promise<void>;
    /**
     * Update a user's server role
     * PATCH /v1/servers/:server_id/users/:user_id
     */
    update(serverId: string, userId: string, role: Archon.ServerUsers.v1.AssignableServerUserRole): Promise<void>;
}
