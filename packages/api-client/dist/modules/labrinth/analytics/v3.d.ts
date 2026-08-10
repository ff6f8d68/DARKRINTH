import { AbstractModule } from '../../../core/abstract-module';
import { Labrinth } from '../types';
export declare class LabrinthAnalyticsV3Module extends AbstractModule {
    getModuleID(): string;
    /**
     * Fetch analytics data for the authenticated user's accessible projects
     * and affiliate codes.
     *
     * @param data - Analytics request body defining time range and requested metrics
     * @returns Promise resolving to the analytics response, with time slices in `metrics`
     *
     * @example
     * ```typescript
     * const response = await client.labrinth.analytics_v3.fetch({
     *   time_range: {
     *     start: '2026-01-01T00:00:00Z',
     *     end: '2026-02-01T00:00:00Z',
     *     resolution: { slices: 31 },
     *   },
     *   project_ids: ['A1B2C3D4'],
     *   return_metrics: {
     *     project_views: { bucket_by: ['project_id'] },
     *   },
     * })
     * const timeSlices = response.metrics
     * ```
     */
    fetch(data: Labrinth.Analytics.v3.FetchRequest): Promise<Labrinth.Analytics.v3.FetchResponse>;
    /**
     * Fetch available analytics filter facets for the authenticated user's
     * accessible projects.
     *
     * POST /v3/analytics/facets
     */
    fetchFacets(data: Labrinth.Analytics.v3.FetchRequest): Promise<Labrinth.Analytics.v3.FacetsResponse>;
    /**
     * Fetch all analytics events.
     * GET /v3/analytics-event
     */
    getEvents(): Promise<Labrinth.Analytics.v3.AnalyticsEvent[]>;
}
