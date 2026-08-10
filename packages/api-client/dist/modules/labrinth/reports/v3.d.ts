import { AbstractModule } from '../../../core/abstract-module';
import { Labrinth } from '../types';
export declare class LabrinthReportsV3Module extends AbstractModule {
    getModuleID(): string;
    /**
     * Get a report by ID
     *
     * @param id - Report ID
     * @returns Promise resolving to the report data
     *
     * @example
     * ```typescript
     * const report = await client.labrinth.reports_v3.get('abc123')
     * ```
     */
    get(id: string): Promise<Labrinth.Reports.v3.Report>;
    /**
     * List reports for the current user (or all reports if moderator)
     *
     * @param params - Optional query parameters for count, offset, and whether to show all reports
     * @returns Promise resolving to an array of reports
     *
     * @example
     * ```typescript
     * const reports = await client.labrinth.reports_v3.list({ count: 100 })
     * ```
     */
    list(params?: Labrinth.Reports.v3.ListReportsParams): Promise<Labrinth.Reports.v3.Report[]>;
    /**
     * Get multiple reports by IDs
     *
     * @param ids - Array of report IDs
     * @returns Promise resolving to an array of reports
     *
     * @example
     * ```typescript
     * const reports = await client.labrinth.reports_v3.getMultiple(['id1', 'id2'])
     * ```
     */
    getMultiple(ids: string[]): Promise<Labrinth.Reports.v3.Report[]>;
    /**
     * Create a new report
     *
     * @param data - Report creation data
     * @returns Promise resolving to the created report
     *
     * @example
     * ```typescript
     * const report = await client.labrinth.reports_v3.create({
     *   report_type: 'spam',
     *   item_id: 'project123',
     *   item_type: 'project',
     *   body: 'This project is spam',
     * })
     * ```
     */
    create(data: Labrinth.Reports.v3.CreateReportRequest): Promise<Labrinth.Reports.v3.Report>;
    /**
     * Edit a report
     *
     * @param id - Report ID
     * @param data - Report edit data
     *
     * @example
     * ```typescript
     * await client.labrinth.reports_v3.edit('abc123', { closed: true })
     * ```
     */
    edit(id: string, data: Labrinth.Reports.v3.EditReportRequest): Promise<void>;
    /**
     * Delete a report (moderator only)
     *
     * @param id - Report ID
     *
     * @example
     * ```typescript
     * await client.labrinth.reports_v3.delete('abc123')
     * ```
     */
    delete(id: string): Promise<void>;
}
