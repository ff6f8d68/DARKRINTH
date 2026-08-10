import { AbstractModule } from '../../../core/abstract-module';
import { Labrinth } from '../types';
export declare class LabrinthAffiliateInternalModule extends AbstractModule {
    getModuleID(): string;
    /**
     * Get all affiliate codes for the authenticated user (or all if admin)
     * GET /_internal/affiliate
     */
    getAll(): Promise<Labrinth.Affiliate.Internal.AffiliateCode[]>;
    /**
     * Create a new affiliate code
     * PUT /_internal/affiliate
     */
    create(data: Labrinth.Affiliate.Internal.CreateRequest): Promise<Labrinth.Affiliate.Internal.AffiliateCode>;
    /**
     * Get a specific affiliate code by ID
     * GET /_internal/affiliate/{id}
     */
    get(id: string): Promise<Labrinth.Affiliate.Internal.AffiliateCode>;
    /**
     * Delete an affiliate code
     * DELETE /_internal/affiliate/{id}
     */
    delete(id: string): Promise<void>;
    /**
     * Update an affiliate code's source name
     * PATCH /_internal/affiliate/{id}
     */
    patch(id: string, data: Labrinth.Affiliate.Internal.PatchRequest): Promise<void>;
}
