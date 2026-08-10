import { AbstractModule } from '../../../core/abstract-module';
import { Labrinth } from '../types';
export declare class LabrinthBlockedUsersInternalModule extends AbstractModule {
    getModuleID(): string;
    /**
     * Check whether one user has blocked another.
     */
    getStatus(userId: string, targetId: string): Promise<Labrinth.BlockedUsers.Internal.BlockStatus>;
}
