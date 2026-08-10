import { AbstractModule } from '../../../core/abstract-module';
import { Labrinth } from '../types';
export declare class LabrinthPayoutV3Module extends AbstractModule {
    getModuleID(): string;
    /**
     * Get the authenticated user's payout balance
     *
     * @returns Promise resolving to the user's payout balance
     */
    getBalance(): Promise<Labrinth.Payout.v3.PayoutBalance>;
    /**
     * Get the authenticated user's transaction history (withdrawals and payouts)
     *
     * @returns Promise resolving to an array of transaction items
     */
    getHistory(): Promise<Labrinth.Payout.v3.TransactionItem[]>;
    /**
     * Get available payout methods, optionally filtered by country
     *
     * @param country - Optional ISO country code to filter methods by supported countries
     * @returns Promise resolving to an array of payout methods
     */
    getMethods(country?: string): Promise<Labrinth.Payout.v3.PayoutMethod[]>;
    /**
     * Cancel a pending payout
     *
     * @param id - The payout ID to cancel
     */
    cancel(id: string): Promise<void>;
}
