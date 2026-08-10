import { AbstractModule } from '../../../core/abstract-module.js';
import { Labrinth } from '../types';
export declare class LabrinthPayoutsV3Module extends AbstractModule {
    getModuleID(): string;
    /**
     * Get platform revenue data.
     *
     * @param params - Optional start/end date filters
     * @returns Promise resolving to platform revenue data
     */
    getPlatformRevenue(params?: {
        start?: string;
        end?: string;
    }): Promise<Labrinth.Payouts.v3.RevenueResponse>;
}
