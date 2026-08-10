import { AbstractModule } from '../../../core/abstract-module';
import { Labrinth } from '../types';
export declare class LabrinthUsersV2Module extends AbstractModule {
    getModuleID(): string;
    /**
     * Get a user by ID or username
     *
     * @param idOrUsername - The user's ID or username
     * @returns Promise resolving to the user data
     *
     * @example
     * ```typescript
     * const user = await client.labrinth.users_v2.get('my_user')
     * ```
     */
    get(idOrUsername: string): Promise<Labrinth.Users.v2.User>;
    /**
     * Get multiple users by their IDs
     *
     * @param ids - Array of user IDs
     * @returns Promise resolving to an array of users
     *
     * @example
     * ```typescript
     * const users = await client.labrinth.users_v2.getMultiple(['id1', 'id2'])
     * ```
     */
    getMultiple(ids: string[]): Promise<Labrinth.Users.v2.User[]>;
    /**
     * Get a user's projects
     *
     * @param idOrUsername - The user's ID or username
     * @returns Promise resolving to an array of the user's projects
     *
     * @example
     * ```typescript
     * const projects = await client.labrinth.users_v2.getProjects('my_user')
     * ```
     */
    getProjects(idOrUsername: string): Promise<Labrinth.Projects.v2.Project[]>;
    /**
     * Get a user's organizations
     *
     * @param idOrUsername - The user's ID or username
     * @returns Promise resolving to an array of the user's organizations
     *
     * @example
     * ```typescript
     * const orgs = await client.labrinth.users_v2.getOrganizations('my_user')
     * ```
     */
    getOrganizations(idOrUsername: string): Promise<Labrinth.Organizations.v3.Organization[]>;
    /**
     * Get a user's collections
     *
     * @param idOrUsername - The user's ID or username
     * @returns Promise resolving to an array of the user's collections
     *
     * @example
     * ```typescript
     * const collections = await client.labrinth.users_v2.getCollections('my_user')
     * ```
     */
    getCollections(idOrUsername: string): Promise<Labrinth.Collections.Collection[]>;
    /**
     * Get a user's notifications
     *
     * @param idOrUsername - The user's ID or username
     * @returns Promise resolving to an array of the user's notifications
     *
     * @example
     * ```typescript
     * const notifications = await client.labrinth.users_v2.getNotifications('my_user')
     * ```
     */
    getNotifications(idOrUsername: string): Promise<Labrinth.Notifications.v2.Notification[]>;
    /**
     * Get projects a user follows
     *
     * @param idOrUsername - The user's ID or username
     * @returns Promise resolving to an array of followed projects
     *
     * @example
     * ```typescript
     * const projects = await client.labrinth.users_v2.getFollowedProjects('my_user')
     * ```
     */
    getFollowedProjects(idOrUsername: string): Promise<Labrinth.Projects.v2.Project[]>;
    /**
     * Update a user
     *
     * @param idOrUsername - The user's ID or username
     * @param data - Fields to update
     *
     * @example
     * ```typescript
     * await client.labrinth.users_v2.patch('my_user', { role: 'admin' })
     * ```
     */
    patch(idOrUsername: string, data: Partial<Pick<Labrinth.Users.v2.User, 'badges' | 'bio' | 'role' | 'username'>>): Promise<void>;
    /**
     * Change a user's avatar.
     *
     * @param idOrUsername - The user's ID or username
     * @param file - Image file to upload
     * @param ext - File extension (e.g., 'png', 'jpeg', 'gif', 'webp')
     */
    changeIcon(idOrUsername: string, file: Blob, ext: string): Promise<void>;
    /**
     * Delete a user's avatar.
     *
     * @param idOrUsername - The user's ID or username
     */
    deleteIcon(idOrUsername: string): Promise<void>;
}
