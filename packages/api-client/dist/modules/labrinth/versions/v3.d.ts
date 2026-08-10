import { AbstractModule } from '../../../core/abstract-module';
import { UploadHandle } from '../../../types/upload';
import { Labrinth } from '../types';
export declare class LabrinthVersionsV3Module extends AbstractModule {
    getModuleID(): string;
    /**
     * Get versions for a project (v3)
     *
     * @param id - Project ID or slug (e.g., 'sodium' or 'AANobbMI')
     * @param options - Optional query parameters to filter versions
     * @returns Promise resolving to an array of v3 versions
     *
     * @example
     * ```typescript
     * const versions = await client.labrinth.versions_v3.getProjectVersions('sodium')
     * const filteredVersions = await client.labrinth.versions_v3.getProjectVersions('sodium', {
     *   game_versions: ['1.20.1'],
     *   loaders: ['fabric']
     * })
     * console.log(versions[0].version_number)
     * ```
     */
    getProjectVersions(id: string, options?: Labrinth.Versions.v3.GetProjectVersionsParams): Promise<Labrinth.Versions.v3.Version[]>;
    /**
     * Get a specific version by ID (v3)
     *
     * @param id - Version ID
     * @returns Promise resolving to the v3 version data
     *
     * @example
     * ```typescript
     * const version = await client.labrinth.versions_v3.getVersion('DXtmvS8i')
     * console.log(version.version_number)
     * ```
     */
    getVersion(id: string): Promise<Labrinth.Versions.v3.Version>;
    /**
     * Get multiple versions by IDs (v3)
     *
     * @param ids - Array of version IDs
     * @returns Promise resolving to an array of v3 versions
     *
     * @example
     * ```typescript
     * const versions = await client.labrinth.versions_v3.getVersions(['DXtmvS8i', 'abc123'])
     * console.log(versions[0].version_number)
     * ```
     */
    getVersions(ids: string[]): Promise<Labrinth.Versions.v3.Version[]>;
    /**
     * Get a version from a project by version ID or number (v3)
     *
     * @param projectId - Project ID or slug
     * @param versionId - Version ID or version number
     * @returns Promise resolving to the v3 version data
     *
     * @example
     * ```typescript
     * const version = await client.labrinth.versions_v3.getVersionFromIdOrNumber('sodium', 'DXtmvS8i')
     * const versionByNumber = await client.labrinth.versions_v3.getVersionFromIdOrNumber('sodium', '0.4.12')
     * ```
     */
    getVersionFromIdOrNumber(projectId: string, versionId: string): Promise<Labrinth.Versions.v3.Version>;
    /**
     * Create a new version for a project (v3)
     *
     * Creates a new version on an existing project. At least one file must be
     * attached unless the version is created as a draft.
     *
     * @param data - JSON metadata payload for the version (must include file_parts)
     * @param files - Array of uploaded files, in the same order as `data.file_parts`
     *
     * @returns A promise resolving to the newly created version data
     *
     * @example
     * ```ts
     * const version = await client.labrinth.versions_v3.createVersion('sodium', {
     *   name: 'v0.5.0',
     *   version_number: '0.5.0',
     *   version_type: 'release',
     *   loaders: ['fabric'],
     *   game_versions: ['1.20.1'],
     *   project_id: 'sodium',
     *   file_parts: ['primary']
     * }, [fileObject])
     * ```
     */
    createVersion(draftVersion: Labrinth.Versions.v3.DraftVersion, versionFiles: Labrinth.Versions.v3.DraftVersionFile[], projectType?: Labrinth.Projects.v2.ProjectType | null): UploadHandle<Labrinth.Versions.v3.Version>;
    /**
     * Modify an existing version by ID (v3)
     *
     * Partially updates a version’s metadata. Only JSON fields may be modified.
     * To update files, use the separate "Add files to version" endpoint.
     *
     * @param versionId - The version ID to update
     * @param data - PATCH metadata for this version (all fields optional)
     *
     * @returns A promise resolving to the updated version data
     *
     * @example
     * ```ts
     * const updated = await client.labrinth.versions_v3.modifyVersion('DXtmvS8i', {
     *   name: 'v1.0.1',
     *   changelog: 'Updated changelog',
     *   featured: true,
     *   status: 'listed'
     * })
     * ```
     */
    modifyVersion(versionId: string, data: Labrinth.Versions.v3.ModifyVersionRequest): Promise<Labrinth.Versions.v3.Version>;
    /**
     * Delete a version by ID (v3)
     *
     * @param versionId - Version ID
     *
     * @example
     * ```typescript
     * await client.labrinth.versions_v3.deleteVersion('DXtmvS8i')
     * ```
     */
    deleteVersion(versionId: string): Promise<void>;
    addFilesToVersion(versionId: string, versionFiles: Labrinth.Versions.v3.DraftVersionFile[]): UploadHandle<Labrinth.Versions.v3.Version>;
}
