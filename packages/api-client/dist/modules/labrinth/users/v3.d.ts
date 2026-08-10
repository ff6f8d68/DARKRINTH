import { AbstractModule } from '../../../core/abstract-module';
import { Labrinth } from '../types';
export declare class LabrinthUsersV3Module extends AbstractModule {
    getModuleID(): string;
    /**
     * Get the authenticated user.
     * GET /v3/user
     */
    getAuthenticated(): Promise<Labrinth.Users.v3.User>;
    /**
     * Get a user by ID or username
     *
     * @param idOrUsername - The user's ID or username
     * @returns Promise resolving to the user data
     *
     * GET /v3/user/{id}
     */
    get(idOrUsername: string): Promise<Labrinth.Users.v3.User>;
    /**
     * Search users by username prefix.
     *
     * @param query - Username search query
     * @returns Promise resolving to compact user search results
     *
     * GET /v3/users/search?query=:query
     */
    search(query: string): Promise<Labrinth.Users.v3.SearchUser[]>;
    /**
     * Get all projects the authenticated user can access directly or through
     * their organizations.
     *
     * @param idOrUsername - User ID or username. Must be the authenticated user.
     *
     * GET /v3/user/{id}/all-projects
     */
    getAllProjects(idOrUsername: string): Promise<Labrinth.Users.v3.AllProjectsResponse>;
}
