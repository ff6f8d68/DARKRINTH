import { AbstractModule } from '../../../core/abstract-module';
import { Labrinth } from '../types';
export declare class LabrinthProjectsV2Module extends AbstractModule {
    getModuleID(): string;
    /**
     * Get a project by ID or slug
     *
     * @param id - Project ID or slug (e.g., 'sodium' or 'AANobbMI')
     * @returns Promise resolving to the project data
     *
     * @example
     * ```typescript
     * const project = await client.labrinth.projects_v2.get('sodium')
     * console.log(project.title) // "Sodium"
     * ```
     */
    get(id: string): Promise<Labrinth.Projects.v2.Project>;
    /**
     * Check that a project slug or ID exists and return its canonical project ID.
     *
     * @param idOrSlug - Project ID or slug (e.g. `sodium` or `AANobbMI`)
     */
    check(idOrSlug: string): Promise<Labrinth.Projects.v2.ProjectCheckResponse>;
    /**
     * Get multiple projects by IDs
     *
     * @param ids - Array of project IDs or slugs
     * @returns Promise resolving to array of projects
     *
     * @example
     * ```typescript
     * const projects = await client.labrinth.projects_v2.getMultiple(['sodium', 'lithium', 'phosphor'])
     * ```
     */
    getMultiple(ids: string[]): Promise<Labrinth.Projects.v2.Project[]>;
    /**
     * Search projects
     *
     * @param params - Search parameters (query, facets, filters, etc.)
     * @returns Promise resolving to search results
     *
     * @example
     * ```typescript
     * const results = await client.labrinth.projects_v2.search({
     *   query: 'optimization',
     *   facets: [['categories:optimization'], ['project_type:mod']],
     *   limit: 20
     * })
     * ```
     */
    search(params: Labrinth.Projects.v2.ProjectSearchParams): Promise<Labrinth.Projects.v2.SearchResult>;
    /**
     * Edit a project
     *
     * @param id - Project ID or slug
     * @param data - Project update data
     *
     * @example
     * ```typescript
     * await client.labrinth.projects_v2.edit('sodium', {
     *   description: 'Updated description'
     * })
     * ```
     */
    edit(id: string, data: Partial<Labrinth.Projects.v2.Project>): Promise<void>;
    /**
     * Delete a project
     *
     * @param id - Project ID or slug
     *
     * @example
     * ```typescript
     * await client.labrinth.projects_v2.delete('my-project')
     * ```
     */
    delete(id: string): Promise<void>;
    /**
     * Get dependencies for a project
     *
     * @param id - Project ID or slug
     * @returns Promise resolving to dependency info (projects and versions)
     *
     * @example
     * ```typescript
     * const deps = await client.labrinth.projects_v2.getDependencies('sodium')
     * console.log(deps.projects) // dependent projects
     * console.log(deps.versions) // dependent versions
     * ```
     */
    getDependencies(id: string): Promise<Labrinth.Projects.v2.DependencyInfo>;
    /**
     * Create a gallery image for a project
     *
     * @param id - Project ID or slug
     * @param file - Image file to upload
     * @param options - Gallery image options
     *
     * @example
     * ```typescript
     * await client.labrinth.projects_v2.createGalleryImage('sodium', imageFile, {
     *   featured: true,
     *   title: 'Screenshot 1',
     *   description: 'Main menu with Sodium enabled'
     * })
     * ```
     */
    createGalleryImage(id: string, file: Blob, options: {
        ext: string;
        featured: boolean;
        title?: string;
        description?: string;
        ordering?: number;
    }): Promise<void>;
    /**
     * Edit a gallery image for a project
     *
     * @param id - Project ID or slug
     * @param url - URL of the existing gallery image to edit
     * @param options - Gallery image options to update
     *
     * @example
     * ```typescript
     * await client.labrinth.projects_v2.editGalleryImage('sodium', 'https://cdn.modrinth.com/...', {
     *   featured: false,
     *   title: 'Updated title'
     * })
     * ```
     */
    editGalleryImage(id: string, url: string, options: {
        featured: boolean;
        title?: string;
        description?: string;
        ordering?: number;
    }): Promise<void>;
    /**
     * Delete a gallery image from a project
     *
     * @param id - Project ID or slug
     * @param url - URL of the gallery image to delete
     *
     * @example
     * ```typescript
     * await client.labrinth.projects_v2.deleteGalleryImage('sodium', 'https://cdn.modrinth.com/...')
     * ```
     */
    deleteGalleryImage(id: string, url: string): Promise<void>;
    /**
     * Get random projects
     *
     * @param count - Number of random projects to return
     * @returns Promise resolving to an array of random projects
     */
    getRandom(count: number): Promise<Labrinth.Projects.v2.Project[]>;
    /**
     * Bulk edit multiple projects at once
     *
     * @param ids - Array of project IDs to edit
     * @param data - Fields to update across all specified projects
     *
     * @example
     * ```typescript
     * await client.labrinth.projects_v2.bulkEdit(['id1', 'id2'], {
     *   issues_url: 'https://github.com/issues',
     *   source_url: null,
     * })
     * ```
     */
    bulkEdit(ids: string[], data: Labrinth.Projects.v2.BulkEditProjectRequest): Promise<void>;
}
