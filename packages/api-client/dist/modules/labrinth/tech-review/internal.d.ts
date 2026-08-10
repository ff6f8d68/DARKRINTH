import { AbstractModule } from '../../../core/abstract-module';
import { Labrinth } from '../types';
export declare class LabrinthTechReviewInternalModule extends AbstractModule {
    getModuleID(): string;
    /**
     * Search for projects awaiting technical review.
     *
     * Returns a flat list of file reports with associated project data, ownership
     * information, and moderation threads provided as lookup maps.
     *
     * @param params - Search parameters including pagination, filters, and sorting
     * @returns Response object containing reports array and lookup maps for projects, threads, and ownership
     *
     * @example
     * ```typescript
     * const response = await client.labrinth.tech_review_internal.searchProjects({
     *   limit: 20,
     *   page: 0,
     *   sort_by: 'created_asc',
     *   filter: {
     *     project_type: ['mod', 'modpack']
     *   }
     * })
     * // Access reports: response.reports
     * // Access project by ID: response.projects[projectId]
     * ```
     */
    searchProjects(params: Labrinth.TechReview.Internal.SearchProjectsRequest): Promise<Labrinth.TechReview.Internal.SearchResponse>;
    /**
     * Get detailed information about a specific file report.
     *
     * @param reportId - The Delphi report ID
     * @returns Full report with all issues and details
     *
     * @example
     * ```typescript
     * const report = await client.labrinth.tech_review_internal.getReport('report-123')
     * console.log(report.file_name, report.issues.length)
     * ```
     */
    getReport(reportId: string): Promise<Labrinth.TechReview.Internal.FileReport>;
    /**
     * Get detailed information about a specific issue.
     *
     * @param issueId - The issue ID
     * @returns Issue with all its details
     *
     * @example
     * ```typescript
     * const issue = await client.labrinth.tech_review_internal.getIssue('issue-123')
     * console.log(issue.issue_type, issue.status)
     * ```
     */
    getIssue(issueId: string): Promise<Labrinth.TechReview.Internal.FileIssue>;
    /**
     * Update the status of a technical review issue detail.
     *
     * Allows moderators to mark an individual issue detail as safe (false positive) or unsafe (malicious).
     *
     * @param detailId - The ID of the issue detail to update
     * @param data - The verdict for the detail
     * @returns Promise that resolves when the update is complete
     */
    updateIssueDetail(detailId: string, data: Labrinth.TechReview.Internal.UpdateIssueDetailRequest): Promise<void>;
    updateIssueDetails(data: Labrinth.TechReview.Internal.UpdateIssueRequest[]): Promise<void>;
    updateGlobalIssueDetails(data: Labrinth.TechReview.Internal.UpdateGlobalIssueRequest[]): Promise<void>;
    searchGlobalIssueDetails(params: Labrinth.TechReview.Internal.SearchGlobalIssueDetailsRequest): Promise<Labrinth.TechReview.Internal.SearchGlobalIssueDetailsResponse>;
    getGlobalIssueDetail(params: Labrinth.TechReview.Internal.GetGlobalIssueDetailRequest): Promise<Labrinth.TechReview.Internal.GetGlobalIssueDetailResponse>;
    submitProject(projectId: string, data: Labrinth.TechReview.Internal.SubmitProjectRequest): Promise<void>;
    /**
     * Get the project report and thread for a specific project.
     *
     * @param projectId - The project ID
     * @returns The project report (may be null if no reports exist) and the moderation thread
     */
    getProjectReport(projectId: string): Promise<Labrinth.TechReview.Internal.ProjectReportResponse>;
}
