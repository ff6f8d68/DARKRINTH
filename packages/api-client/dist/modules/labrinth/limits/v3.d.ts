import { AbstractModule } from '../../../core/abstract-module.js';
import { Labrinth } from '../types';
export declare class LabrinthLimitsV3Module extends AbstractModule {
    getModuleID(): string;
    /**
     * Get project creation limits for the authenticated user.
     */
    getProjectLimits(): Promise<Labrinth.Limits.v3.UserLimits>;
    /**
     * Get organization creation limits for the authenticated user.
     */
    getOrganizationLimits(): Promise<Labrinth.Limits.v3.UserLimits>;
    /**
     * Get collection creation limits for the authenticated user.
     */
    getCollectionLimits(): Promise<Labrinth.Limits.v3.UserLimits>;
}
