import { AbstractModule } from '../../../core/abstract-module';
import { Labrinth } from '../types';
export declare class LabrinthFriendsV3Module extends AbstractModule {
    getModuleID(): string;
    /**
     * Get friends and pending friend requests for the authenticated user
     *
     * @returns Promise resolving to friend relationships
     */
    list(): Promise<Labrinth.Friends.v3.UserFriend[]>;
    /**
     * Send or accept a friend request
     *
     * @param idOrUsername - The target user's ID or username
     */
    add(idOrUsername: string): Promise<void>;
    /**
     * Remove a friend or pending friend request
     *
     * @param idOrUsername - The target user's ID or username
     */
    remove(idOrUsername: string): Promise<void>;
}
