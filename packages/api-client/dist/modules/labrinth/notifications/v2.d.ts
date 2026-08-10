import { AbstractModule } from '../../../core/abstract-module';
import { Labrinth } from '../types';
export declare class LabrinthNotificationsV2Module extends AbstractModule {
    getModuleID(): string;
    /**
     * Get all notifications for a user
     *
     * @param userId - The user's ID
     * @returns Promise resolving to the user's notifications
     *
     * @example
     * ```typescript
     * const notifications = await client.labrinth.notifications_v2.getUserNotifications('user123')
     * ```
     */
    getUserNotifications(userId: string): Promise<Labrinth.Notifications.v2.Notification[]>;
    /**
     * Get multiple notifications by their IDs
     *
     * @param ids - Array of notification IDs
     * @returns Promise resolving to an array of notifications
     *
     * @example
     * ```typescript
     * const notifications = await client.labrinth.notifications_v2.getMultiple(['id1', 'id2'])
     * ```
     */
    getMultiple(ids: string[]): Promise<Labrinth.Notifications.v2.Notification[]>;
    /**
     * Mark a single notification as read
     *
     * @param id - Notification ID
     *
     * @example
     * ```typescript
     * await client.labrinth.notifications_v2.markAsRead('notif123')
     * ```
     */
    markAsRead(id: string): Promise<void>;
    /**
     * Mark multiple notifications as read
     *
     * @param ids - Array of notification IDs to mark as read
     *
     * @example
     * ```typescript
     * await client.labrinth.notifications_v2.markMultipleAsRead(['id1', 'id2'])
     * ```
     */
    markMultipleAsRead(ids: string[]): Promise<void>;
    /**
     * Delete a single notification
     *
     * @param id - Notification ID
     *
     * @example
     * ```typescript
     * await client.labrinth.notifications_v2.delete('notif123')
     * ```
     */
    delete(id: string): Promise<void>;
    /**
     * Delete multiple notifications
     *
     * @param ids - Array of notification IDs to delete
     *
     * @example
     * ```typescript
     * await client.labrinth.notifications_v2.deleteMultiple(['id1', 'id2'])
     * ```
     */
    deleteMultiple(ids: string[]): Promise<void>;
}
