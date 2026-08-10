import { AbstractModule } from '../../../core/abstract-module';
import { Labrinth } from '../types';
export declare class LabrinthSessionsV2Module extends AbstractModule {
    getModuleID(): string;
    /**
     * List all sessions for the authenticated user
     *
     * @returns Promise resolving to an array of sessions
     */
    list(): Promise<Labrinth.Sessions.v2.Session[]>;
    /**
     * Delete (revoke) a session
     *
     * @param id - The session ID
     */
    delete(id: string): Promise<void>;
}
