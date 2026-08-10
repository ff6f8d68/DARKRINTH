import { AbstractModule } from '../../../core/abstract-module';
import { Labrinth } from '../types';
export declare class LabrinthProjectsV3Module extends AbstractModule {
    getModuleID(): string;
    /**
     * Get a project by ID or slug (v3)
     *
     * @param id - Project ID or slug (e.g., 'sodium' or 'AANobbMI')
     * @returns Promise resolving to the v3 project data
     *
     * @example
     * ```typescript
     * const project = await client.labrinth.projects_v3.get('sodium')
     * console.log(project.project_types) // v3 field
     * ```
     */
    get(id: string): Promise<Labrinth.Projects.v3.Project>;
    /**
     * Get a project's dependencies (v3)
     *
     * Returns all projects and versions that are dependencies of this project's versions.
     *
     * @param id - Project ID or slug
     * @returns Promise resolving to dependency data with projects and versions
     *
     * @example
     * ```typescript
     * const deps = await client.labrinth.projects_v3.getDependencies('sodium')
     * console.log(deps.projects) // Array of project objects
     * console.log(deps.versions) // Array of version objects
     * ```
     */
    getDependencies(id: string): Promise<Labrinth.Projects.v3.ProjectDependencies>;
    /**
     * Get multiple projects by IDs (v3)
     *
     * @param ids - Array of project IDs or slugs
     * @returns Promise resolving to array of v3 projects
     *
     * @example
     * ```typescript
     * const projects = await client.labrinth.projects_v3.getMultiple(['sodium', 'lithium'])
     * ```
     */
    getMultiple(ids: string[]): Promise<Labrinth.Projects.v3.Project[]>;
    /**
     * Search projects (v3)
     *
     * @param params - Search parameters
     * @returns Promise resolving to v3 search results
     */
    search(params: Labrinth.Search.SearchParams, options?: {
        headers?: Record<string, string>;
    }): Promise<Labrinth.Search.v3.SearchResults>;
    /**
     * Edit a project (v3)
     *
     * @param id - Project ID or slug
     * @param data - Project update data (v3 fields)
     *
     * @example
     * ```typescript
     * await client.labrinth.projects_v3.edit('sodium', {
     *   environment: 'client_and_server'
     * })
     * ```
     */
    edit(id: string, data: Labrinth.Projects.v3.EditProjectRequest): Promise<void>;
    /**
     * Get the organization that owns a project
     *
     * @param id - Project ID or slug
     * @returns Promise resolving to the organization data, or null if the project is not owned by an organization
     */
    getOrganization(id: string): Promise<Labrinth.Projects.v3.Organization | null>;
    /**
     * Get the team members of a project
     *
     * @param id - Project ID or slug
     * @returns Promise resolving to an array of team members
     */
    getMembers(id: string): Promise<Labrinth.Projects.v3.TeamMember[]>;
    createServerProject(data: Labrinth.Projects.v3.CreateServerProjectRequest): Promise<Labrinth.Projects.v3.Project>;
    /**
     * Delete a project
     *
     * @param id - Project ID or slug
     *
     * @example
     * ```typescript
     * await client.labrinth.projects_v3.deleteProject('my-project')
     * ```
     */
    deleteProject(id: string): Promise<void>;
    /**
     * Change the icon of a project
     *
     * @param id - Project ID or slug
     * @param file - Image file to upload
     * @param ext - File extension (e.g., 'png', 'jpeg', 'gif', 'webp')
     *
     * @example
     * ```typescript
     * await client.labrinth.projects_v3.changeIcon('sodium', imageFile, 'png')
     * ```
     */
    changeIcon(id: string, file: Blob, ext: string): Promise<void>;
    /**
     * Delete the icon of a project
     *
     * @param id - Project ID or slug
     *
     * @example
     * ```typescript
     * await client.labrinth.projects_v3.deleteIcon('sodium')
     * ```
     */
    deleteIcon(id: string): Promise<void>;
}
