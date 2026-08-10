import { AbstractModule } from '../../../core/abstract-module';
import { Labrinth } from '../types';
export declare class LabrinthOrganizationsV3Module extends AbstractModule {
    getModuleID(): string;
    /**
     * Get an organization by ID or slug
     *
     * @param idOrSlug - Organization ID or slug
     * @returns Promise resolving to the organization data
     *
     * @example
     * ```typescript
     * const org = await client.labrinth.organizations_v3.get('my-org')
     * ```
     */
    get(idOrSlug: string): Promise<Labrinth.Organizations.v3.Organization>;
    /**
     * Get an organization's projects
     *
     * @param idOrSlug - Organization ID or slug
     * @returns Promise resolving to the organization's projects
     *
     * @example
     * ```typescript
     * const projects = await client.labrinth.organizations_v3.getProjects('my-org')
     * ```
     */
    getProjects(idOrSlug: string): Promise<Labrinth.Projects.v3.Project[]>;
    /**
     * Get multiple organizations by their IDs
     *
     * @param ids - Array of organization IDs
     * @returns Promise resolving to an array of organizations
     *
     * @example
     * ```typescript
     * const orgs = await client.labrinth.organizations_v3.getMultiple(['id1', 'id2'])
     * ```
     */
    getMultiple(ids: string[]): Promise<Labrinth.Organizations.v3.Organization[]>;
    /**
     * Add a project to an organization
     *
     * @param idOrSlug - Organization ID or slug
     * @param request - The project to add
     *
     * @example
     * ```typescript
     * await client.labrinth.organizations_v3.addProject('my-org', { project_id: 'AABBCCDD' })
     * ```
     */
    addProject(idOrSlug: string, request: Labrinth.Organizations.v3.AddProjectRequest): Promise<void>;
    /**
     * Remove a project from an organization
     *
     * @param idOrSlug - Organization ID or slug
     * @param projectId - Project ID to remove
     * @param data - Request body containing the new_owner user ID
     *
     * @example
     * ```typescript
     * await client.labrinth.organizations_v3.removeProject('my-org', 'proj123', { new_owner: 'user456' })
     * ```
     */
    removeProject(idOrSlug: string, projectId: string, data: Labrinth.Organizations.v3.RemoveProjectRequest): Promise<void>;
}
