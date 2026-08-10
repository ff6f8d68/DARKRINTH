import { AbstractModule } from '../../../core/abstract-module';
import { Labrinth } from '../types';
export declare class LabrinthAuthInternalModule extends AbstractModule {
    getModuleID(): string;
    /**
     * Check if the user is subscribed to the newsletter
     *
     * @returns Promise resolving to the subscription status
     */
    getNewsletterStatus(): Promise<Labrinth.Auth.Internal.SubscriptionStatus>;
    /**
     * Subscribe to the newsletter
     */
    subscribeNewsletter(): Promise<void>;
    /**
     * Create a signed Discord community bot handoff URL
     */
    createDiscordCommunityLink(): Promise<Labrinth.Auth.Internal.DiscordCommunityLinkResponse>;
}
