import { AbstractModule } from '../../../core/abstract-module';
import { Labrinth } from '../types';
export declare class LabrinthBlockedUsersV3Module extends AbstractModule {
    getModuleID(): string;
    /**
     * List the users blocked by the authenticated user.
     */
    list(): Promise<Labrinth.BlockedUsers.v3.BlockedUserId[]>;
    /**
     * Block a user.
     *
     * @param idOrUsername - The target user's ID or username
     */
    block(idOrUsername: string): Promise<void>;
    /**
     * Unblock a user.
     *
     * @param idOrUsername - The target user's ID or username
     */
    unblock(idOrUsername: string): Promise<void>;
}
