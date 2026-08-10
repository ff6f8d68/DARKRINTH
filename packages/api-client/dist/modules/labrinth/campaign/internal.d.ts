import { AbstractModule } from '../../../core/abstract-module';
import { Labrinth } from '../types';
export declare class LabrinthCampaignInternalModule extends AbstractModule {
    getModuleID(): string;
    /**
     * Get Pride 2026 campaign fundraising progress.
     * GET /_internal/campaign/pride-26
     */
    getPride26(): Promise<Labrinth.Campaign.Internal.CampaignInfo>;
}
