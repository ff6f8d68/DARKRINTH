import { AbstractModrinthClient } from '../core/abstract-client';
import { AbstractModule } from '../core/abstract-module';
import { ArchonActionsV1Module } from './archon/actions/v1';
import { ArchonBackupsV1Module } from './archon/backups/v1';
import { ArchonBackupsQueueV1Module } from './archon/backups-queue/v1';
import { ArchonContentV1Module } from './archon/content/v1';
import { ArchonNodesInternalModule } from './archon/nodes/internal';
import { ArchonNoticesV0Module } from './archon/notices/v0';
import { ArchonOptionsV1Module } from './archon/options/v1';
import { ArchonPropertiesV1Module } from './archon/properties/v1';
import { ArchonServerUsersV1Module } from './archon/server-users/v1';
import { ArchonServersV0Module } from './archon/servers/v0';
import { ArchonServersV1Module } from './archon/servers/v1';
import { ArchonTransfersInternalModule } from './archon/transfers/internal';
import { ISO3166Module } from './iso3166';
import { KyrosContentV1Module } from './kyros/content/v1';
import { KyrosFilesV0Module } from './kyros/files/v0';
import { KyrosLogsV1Module } from './kyros/logs/v1';
import { KyrosUploadSessionsV1Module } from './kyros/upload-sessions/v1';
import { LabrinthVersionsV2Module, LabrinthVersionsV3Module } from './labrinth';
import { LabrinthAffiliateInternalModule } from './labrinth/affiliate/internal';
import { LabrinthAnalyticsInternalModule } from './labrinth/analytics/internal';
import { LabrinthAnalyticsV3Module } from './labrinth/analytics/v3';
import { LabrinthAttributionInternalModule } from './labrinth/attribution/internal';
import { LabrinthAuthInternalModule } from './labrinth/auth/internal';
import { LabrinthAuthV2Module } from './labrinth/auth/v2';
import { LabrinthBillingInternalModule } from './labrinth/billing/internal';
import { LabrinthBlockedUsersInternalModule } from './labrinth/blocked-users/internal';
import { LabrinthBlockedUsersV3Module } from './labrinth/blocked-users/v3';
import { LabrinthCampaignInternalModule } from './labrinth/campaign/internal';
import { LabrinthCollectionsModule } from './labrinth/collections';
import { LabrinthContentV3Module } from './labrinth/content/v3';
import { LabrinthExternalProjectsInternalModule } from './labrinth/external-projects/internal';
import { LabrinthFriendsV3Module } from './labrinth/friends/v3';
import { LabrinthGlobalsInternalModule } from './labrinth/globals/internal';
import { LabrinthImagesV3Module } from './labrinth/images/v3';
import { LabrinthLimitsV3Module } from './labrinth/limits/v3';
import { LabrinthModerationInternalModule } from './labrinth/moderation/internal';
import { LabrinthNotificationsV2Module } from './labrinth/notifications/v2';
import { LabrinthOAuthInternalModule } from './labrinth/oauth/internal';
import { LabrinthOrganizationsV3Module } from './labrinth/organizations/v3';
import { LabrinthPatsV2Module } from './labrinth/pats/v2';
import { LabrinthPayoutV3Module } from './labrinth/payout/v3';
import { LabrinthPayoutsV3Module } from './labrinth/payouts/v3';
import { LabrinthProjectsV2Module } from './labrinth/projects/v2';
import { LabrinthProjectsV3Module } from './labrinth/projects/v3';
import { LabrinthReportsV3Module } from './labrinth/reports/v3';
import { LabrinthServerPingInternalModule } from './labrinth/server-ping/internal';
import { LabrinthSessionsV2Module } from './labrinth/sessions/v2';
import { LabrinthStateModule } from './labrinth/state';
import { LabrinthTagsV2Module } from './labrinth/tags/v2';
import { LabrinthTeamsV2Module } from './labrinth/teams/v2';
import { LabrinthTeamsV3Module } from './labrinth/teams/v3';
import { LabrinthTechReviewInternalModule } from './labrinth/tech-review/internal';
import { LabrinthThreadsV3Module } from './labrinth/threads/v3';
import { LabrinthUsersV2Module } from './labrinth/users/v2';
import { LabrinthUsersV3Module } from './labrinth/users/v3';
import { LauncherMetaManifestV0Module } from './launcher-meta/v0';
import { MclogsInsightsV1Module } from './mclogs/insights/v1';
import { MclogsLogsV1Module } from './mclogs/logs/v1';
import { PaperVersionsV3Module } from './paper/v3';
import { PurpurVersionsV2Module } from './purpur/v2';
import { SharedInstancesInstancesV1Module } from './shared-instances/instances/v1';
import { SharedInstancesInvitesV1Module } from './shared-instances/invites/v1';
import { SharedInstancesModerationV1Module } from './shared-instances/moderation/v1';
import { SharedInstancesUsersV1Module } from './shared-instances/users/v1';
type ModuleConstructor = new (client: AbstractModrinthClient) => AbstractModule;
/**
 * To add a new module:
 * 1. Create your module class extending AbstractModule
 * 2. Add one line here: `<api>_<module>: YourModuleClass`
 *
 * TypeScript will automatically infer the client's field structure from this registry.
 *
 * TODO: Better way? Probably not
 */
export declare const MODULE_REGISTRY: {
    readonly archon_actions_v1: typeof ArchonActionsV1Module;
    readonly archon_backups_queue_v1: typeof ArchonBackupsQueueV1Module;
    readonly archon_backups_v1: typeof ArchonBackupsV1Module;
    readonly archon_content_v1: typeof ArchonContentV1Module;
    readonly archon_nodes_internal: typeof ArchonNodesInternalModule;
    readonly archon_notices_v0: typeof ArchonNoticesV0Module;
    readonly archon_options_v1: typeof ArchonOptionsV1Module;
    readonly archon_properties_v1: typeof ArchonPropertiesV1Module;
    readonly archon_server_users_v1: typeof ArchonServerUsersV1Module;
    readonly archon_servers_v0: typeof ArchonServersV0Module;
    readonly archon_servers_v1: typeof ArchonServersV1Module;
    readonly archon_transfers_internal: typeof ArchonTransfersInternalModule;
    readonly iso3166_data: typeof ISO3166Module;
    readonly mclogs_insights_v1: typeof MclogsInsightsV1Module;
    readonly mclogs_logs_v1: typeof MclogsLogsV1Module;
    readonly launchermeta_manifest_v0: typeof LauncherMetaManifestV0Module;
    readonly kyros_content_v1: typeof KyrosContentV1Module;
    readonly kyros_files_v0: typeof KyrosFilesV0Module;
    readonly kyros_logs_v1: typeof KyrosLogsV1Module;
    readonly kyros_upload_sessions_v1: typeof KyrosUploadSessionsV1Module;
    readonly labrinth_affiliate_internal: typeof LabrinthAffiliateInternalModule;
    readonly labrinth_analytics_internal: typeof LabrinthAnalyticsInternalModule;
    readonly labrinth_analytics_v3: typeof LabrinthAnalyticsV3Module;
    readonly labrinth_auth_internal: typeof LabrinthAuthInternalModule;
    readonly labrinth_auth_v2: typeof LabrinthAuthV2Module;
    readonly labrinth_attribution_internal: typeof LabrinthAttributionInternalModule;
    readonly labrinth_billing_internal: typeof LabrinthBillingInternalModule;
    readonly labrinth_blocked_users_internal: typeof LabrinthBlockedUsersInternalModule;
    readonly labrinth_blocked_users_v3: typeof LabrinthBlockedUsersV3Module;
    readonly labrinth_campaign_internal: typeof LabrinthCampaignInternalModule;
    readonly labrinth_collections: typeof LabrinthCollectionsModule;
    readonly labrinth_content_v3: typeof LabrinthContentV3Module;
    readonly labrinth_external_projects_internal: typeof LabrinthExternalProjectsInternalModule;
    readonly labrinth_friends_v3: typeof LabrinthFriendsV3Module;
    readonly labrinth_globals_internal: typeof LabrinthGlobalsInternalModule;
    readonly labrinth_images_v3: typeof LabrinthImagesV3Module;
    readonly labrinth_moderation_internal: typeof LabrinthModerationInternalModule;
    readonly labrinth_notifications_v2: typeof LabrinthNotificationsV2Module;
    readonly labrinth_oauth_internal: typeof LabrinthOAuthInternalModule;
    readonly labrinth_organizations_v3: typeof LabrinthOrganizationsV3Module;
    readonly labrinth_pats_v2: typeof LabrinthPatsV2Module;
    readonly labrinth_limits_v3: typeof LabrinthLimitsV3Module;
    readonly labrinth_payout_v3: typeof LabrinthPayoutV3Module;
    readonly labrinth_payouts_v3: typeof LabrinthPayoutsV3Module;
    readonly labrinth_projects_v2: typeof LabrinthProjectsV2Module;
    readonly labrinth_projects_v3: typeof LabrinthProjectsV3Module;
    readonly labrinth_reports_v3: typeof LabrinthReportsV3Module;
    readonly labrinth_server_ping_internal: typeof LabrinthServerPingInternalModule;
    readonly labrinth_sessions_v2: typeof LabrinthSessionsV2Module;
    readonly labrinth_state: typeof LabrinthStateModule;
    readonly labrinth_tags_v2: typeof LabrinthTagsV2Module;
    readonly labrinth_teams_v2: typeof LabrinthTeamsV2Module;
    readonly labrinth_teams_v3: typeof LabrinthTeamsV3Module;
    readonly labrinth_tech_review_internal: typeof LabrinthTechReviewInternalModule;
    readonly labrinth_threads_v3: typeof LabrinthThreadsV3Module;
    readonly labrinth_users_v2: typeof LabrinthUsersV2Module;
    readonly labrinth_users_v3: typeof LabrinthUsersV3Module;
    readonly labrinth_versions_v2: typeof LabrinthVersionsV2Module;
    readonly labrinth_versions_v3: typeof LabrinthVersionsV3Module;
    readonly paper_versions_v3: typeof PaperVersionsV3Module;
    readonly purpur_versions_v2: typeof PurpurVersionsV2Module;
    readonly sharedinstances_invites_v1: typeof SharedInstancesInvitesV1Module;
    readonly sharedinstances_instances_v1: typeof SharedInstancesInstancesV1Module;
    readonly sharedinstances_moderation_v1: typeof SharedInstancesModerationV1Module;
    readonly sharedinstances_users_v1: typeof SharedInstancesUsersV1Module;
};
export type ModuleID = keyof typeof MODULE_REGISTRY;
/**
 * Parse a module ID into [api, moduleName] tuple
 *
 * @param id - Module ID in format `<api>_<module>` (e.g., 'labrinth_projects_v2')
 * @returns Tuple of [api, moduleName] (e.g., ['labrinth', 'projects_v2'])
 * @throws Error if module ID doesn't match expected format
 */
export declare function parseModuleID(id: string): [string, string];
/**
 * Build nested module structure from flat registry
 *
 * Transforms:
 * ```
 * { labrinth_projects_v2: Constructor, labrinth_users_v2: Constructor }
 * ```
 * Into:
 * ```
 * { labrinth: { projects_v2: Constructor, users_v2: Constructor } }
 * ```
 *
 * @returns Nested structure organized by API namespace
 */
export declare function buildModuleStructure(): Record<string, Record<string, ModuleConstructor>>;
/**
 * Extract API name from module ID
 * @example ParseAPI<'labrinth_projects_v2'> = 'labrinth'
 */
type ParseAPI<T extends string> = T extends `${infer API}_${string}` ? API : never;
/**
 * Extract module name for a given API
 * @example ParseModule<'labrinth_projects_v2', 'labrinth'> = 'projects_v2'
 */
type ParseModule<T extends string, API extends string> = T extends `${API}_${infer Module}` ? Module : never;
/**
 * Group registry modules by API namespace
 *
 * Transforms flat registry into nested structure at the type level:
 * ```
 * { labrinth_projects_v2: ModuleClass } → { labrinth: { projects_v2: ModuleInstance } }
 * ```
 */
type GroupByAPI<Registry extends Record<string, ModuleConstructor>> = {
    [API in ParseAPI<keyof Registry & string>]: {
        [Module in ParseModule<keyof Registry & string, API>]: InstanceType<Registry[`${API}_${Module}`]>;
    };
};
/**
 * Inferred client module structure
 **/
export type InferredClientModules = GroupByAPI<typeof MODULE_REGISTRY>;
export {};
