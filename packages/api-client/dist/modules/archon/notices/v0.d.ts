import { AbstractModule } from '../../../core/abstract-module';
import { Archon } from '../types';
export declare class ArchonNoticesV0Module extends AbstractModule {
    getModuleID(): string;
    /**
     * Get all server notices.
     * GET /modrinth/v0/notices
     */
    list(): Promise<Archon.Notices.v0.ListedNotice[]>;
    /**
     * Create a server notice.
     * POST /modrinth/v0/notices
     */
    create(request: Archon.Notices.v0.Announce): Promise<Archon.Notices.v0.PostNoticeResponseBody>;
    /**
     * Update a server notice.
     * PATCH /modrinth/v0/notices/:id
     */
    update(id: number, request: Archon.Notices.v0.AnnouncePatch): Promise<void>;
    /**
     * Delete a server notice.
     * DELETE /modrinth/v0/notices/:id
     */
    delete(id: number): Promise<void>;
    /**
     * Assign a notice to a server or node.
     * PUT /modrinth/v0/notices/:id/assign?server=:serverId
     * PUT /modrinth/v0/notices/:id/assign?node=:nodeId
     */
    assign(id: number, target: Archon.Notices.v0.AssignmentTarget): Promise<void>;
    /**
     * Unassign a notice from a server or node.
     * PUT /modrinth/v0/notices/:id/unassign?server=:serverId
     * PUT /modrinth/v0/notices/:id/unassign?node=:nodeId
     */
    unassign(id: number, target: Archon.Notices.v0.AssignmentTarget): Promise<void>;
    private assignmentTargetToParams;
}
