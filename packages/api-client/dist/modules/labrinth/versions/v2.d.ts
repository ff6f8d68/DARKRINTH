import { AbstractModule } from '../../../core/abstract-module';
import { Labrinth } from '../types';
export declare class LabrinthVersionsV2Module extends AbstractModule {
    getModuleID(): string;
    /**
     * Get versions for a project (v2)
     *
     * @param id - Project ID or slug (e.g., 'sodium' or 'AANobbMI')
     * @param options - Optional query parameters to filter versions
     * @returns Promise resolving to an array of v2 versions
     *
     * @example
     * ```typescript
     * const versions = await client.labrinth.versions_v2.getProjectVersions('sodium')
     * const filteredVersions = await client.labrinth.versions_v2.getProjectVersions('sodium', {
     *   game_versions: ['1.20.1'],
     *   loaders: ['fabric'],
     *   include_changelog: false
     * })
     * console.log(versions[0].version_number)
     * ```
     */
    getProjectVersions(id: string, options?: Labrinth.Versions.v2.GetProjectVersionsParams): Promise<Labrinth.Versions.v2.Version[]>;
    /**
     * Get a specific version by ID (v2)
     *
     * @param id - Version ID
     * @returns Promise resolving to the v2 version data
     *
     * @example
     * ```typescript
     * const version = await client.labrinth.versions_v2.getVersion('DXtmvS8i')
     * console.log(version.version_number)
     * ```
     */
    getVersion(id: string): Promise<Labrinth.Versions.v2.Version>;
    getVersionFromFileHash(hash: string, algorithm: keyof Labrinth.Versions.v2.VersionFileHash): Promise<Labrinth.Versions.v2.Version>;
    /**
     * Get multiple versions by IDs (v2)
     *
     * @param ids - Array of version IDs
     * @returns Promise resolving to an array of v2 versions
     *
     * @example
     * ```typescript
     * const versions = await client.labrinth.versions_v2.getVersions(['DXtmvS8i', 'abc123'])
     * console.log(versions[0].version_number)
     * ```
     */
    getVersions(ids: string[]): Promise<Labrinth.Versions.v2.Version[]>;
    /**
     * Get a version from a project by version ID or number (v2)
     *
     * @param projectId - Project ID or slug
     * @param versionId - Version ID or version number
     * @returns Promise resolving to the v2 version data
     *
     * @example
     * ```typescript
     * const version = await client.labrinth.versions_v2.getVersionFromIdOrNumber('sodium', 'DXtmvS8i')
     * const versionByNumber = await client.labrinth.versions_v2.getVersionFromIdOrNumber('sodium', '0.4.12')
     * ```
     */
    getVersionFromIdOrNumber(projectId: string, versionId: string): Promise<Labrinth.Versions.v2.Version>;
    /**
     * Delete a version by ID (v2)
     *
     * @param versionId - Version ID
     *
     * @example
     * ```typescript
     * await client.labrinth.versions_v2.deleteVersion('DXtmvS8i')
     * ```
     */
    deleteVersion(versionId: string): Promise<void>;
}
