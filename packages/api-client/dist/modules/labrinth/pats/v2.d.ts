import { AbstractModule } from '../../../core/abstract-module';
import { Labrinth } from '../types';
export declare class LabrinthPatsV2Module extends AbstractModule {
    getModuleID(): string;
    /**
     * Get all personal access tokens for the authenticated user
     *
     * @returns Promise resolving to an array of PATs
     */
    list(): Promise<Labrinth.Pats.v2.PersonalAccessToken[]>;
    /**
     * Create a new personal access token
     *
     * @param data - The PAT creation request data
     * @returns Promise resolving to the newly created PAT (includes access_token)
     */
    create(data: Labrinth.Pats.v2.CreatePatRequest): Promise<Labrinth.Pats.v2.PersonalAccessToken>;
    /**
     * Modify an existing personal access token
     *
     * @param id - The PAT ID
     * @param data - The fields to update
     */
    modify(id: string, data: Labrinth.Pats.v2.ModifyPatRequest): Promise<void>;
    /**
     * Delete a personal access token
     *
     * @param id - The PAT ID
     */
    delete(id: string): Promise<void>;
}
