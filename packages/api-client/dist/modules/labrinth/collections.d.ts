import { AbstractModule } from '../../core/abstract-module.js';
import { Labrinth } from '../types';
export declare class LabrinthCollectionsModule extends AbstractModule {
    getModuleID(): string;
    /**
     * Get a collection by ID (v3)
     *
     * @param id - Collection ID
     * @returns Promise resolving to the collection data
     *
     * @example
     * ```typescript
     * const collection = await client.labrinth.collections.get('AANobbMI')
     * ```
     */
    get(id: string): Promise<Labrinth.Collections.Collection>;
    /**
     * Get multiple collections by IDs (v3)
     *
     * @param ids - Array of collection IDs
     * @returns Promise resolving to array of collections
     *
     * @example
     * ```typescript
     * const collections = await client.labrinth.collections.getMultiple(['AANobbMI', 'BBNoobMI'])
     * ```
     */
    getMultiple(ids: string[]): Promise<Labrinth.Collections.Collection[]>;
    /**
     * Edit a collection (v3)
     *
     * @param id - Collection ID
     * @param data - Collection update data
     *
     * @example
     * ```typescript
     * await client.labrinth.collections.edit('AANobbMI', {
     *   name: 'Updated name',
     *   description: 'Updated description',
     *   status: 'listed'
     * })
     * ```
     */
    edit(id: string, data: Labrinth.Collections.EditCollectionRequest): Promise<void>;
    /**
     * Delete a collection (v3)
     *
     * @param id - Collection ID
     *
     * @example
     * ```typescript
     * await client.labrinth.collections.delete('AANobbMI')
     * ```
     */
    delete(id: string): Promise<void>;
    /**
     * Edit a collection icon (v3)
     *
     * @param id - Collection ID
     * @param icon - Icon file
     * @param ext - File extension (e.g., 'png', 'jpg')
     *
     * @example
     * ```typescript
     * await client.labrinth.collections.editIcon('AANobbMI', iconFile, 'png')
     * ```
     */
    editIcon(id: string, icon: Blob, ext: string): Promise<void>;
    /**
     * Delete a collection icon (v3)
     *
     * @param id - Collection ID
     *
     * @example
     * ```typescript
     * await client.labrinth.collections.deleteIcon('AANobbMI')
     * ```
     */
    deleteIcon(id: string): Promise<void>;
}
