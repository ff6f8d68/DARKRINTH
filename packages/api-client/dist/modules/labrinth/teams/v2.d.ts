import { AbstractModule } from '../../../core/abstract-module';
import { Labrinth } from '../types';
export declare class LabrinthTeamsV2Module extends AbstractModule {
    getModuleID(): string;
    /**
     * Add a member to a team
     *
     * @param teamId - Team ID
     * @param data - New member data including user_id
     *
     * @example
     * ```typescript
     * await client.labrinth.teams_v2.addMember('team123', { user_id: 'user456' })
     * ```
     */
    addMember(teamId: string, data: Labrinth.Teams.v2.AddTeamMemberRequest): Promise<void>;
    /**
     * Edit a team member
     *
     * @param teamId - Team ID
     * @param userId - User ID of the member to edit
     * @param data - Member update data
     *
     * @example
     * ```typescript
     * await client.labrinth.teams_v2.editMember('team123', 'user456', {
     *   role: 'Developer',
     *   permissions: 0b111,
     * })
     * ```
     */
    editMember(teamId: string, userId: string, data: Labrinth.Teams.v2.EditTeamMemberRequest): Promise<void>;
    /**
     * Remove a member from a team
     *
     * @param teamId - Team ID
     * @param userId - User ID of the member to remove
     *
     * @example
     * ```typescript
     * await client.labrinth.teams_v2.removeMember('team123', 'user456')
     * ```
     */
    removeMember(teamId: string, userId: string): Promise<void>;
    /**
     * Transfer team ownership to another member
     *
     * @param teamId - Team ID
     * @param data - Transfer data including the new owner's user_id
     *
     * @example
     * ```typescript
     * await client.labrinth.teams_v2.transferOwnership('team123', { user_id: 'user456' })
     * ```
     */
    transferOwnership(teamId: string, data: Labrinth.Teams.v2.TransferOwnershipRequest): Promise<void>;
}
