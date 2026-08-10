import { AbstractModule } from '../../../core/abstract-module';
import { Labrinth } from '../types';
export declare class LabrinthAnalyticsInternalModule extends AbstractModule {
    getModuleID(): string;
    /**
     * Create an analytics event.
     * POST /_internal/analytics-event
     */
    createEvent(data: Labrinth.Analytics.Internal.AnalyticsEventUpsert): Promise<Labrinth.Analytics.v3.AnalyticsEvent>;
    /**
     * Edit an analytics event.
     * PATCH /_internal/analytics-event/{id}
     */
    editEvent(id: Labrinth.Analytics.v3.AnalyticsEventId, data: Labrinth.Analytics.Internal.AnalyticsEventUpsert): Promise<Labrinth.Analytics.v3.AnalyticsEvent>;
    /**
     * Delete an analytics event.
     * DELETE /_internal/analytics-event/{id}
     */
    deleteEvent(id: Labrinth.Analytics.v3.AnalyticsEventId): Promise<void>;
}
