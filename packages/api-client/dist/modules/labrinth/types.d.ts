import { RawDecimal } from '../../utils/types';
import { ISO3166 } from '../iso3166/types';
export declare namespace Labrinth {
    namespace Content {
        namespace v3 {
            type ContentType = 'mod' | 'plugin' | 'datapack' | 'resourcepack' | 'shader' | 'modpack';
            type ResolutionPreferences = {
                game_versions?: string[];
                loaders?: string[];
            };
            type ResolveContentRequest = {
                project_id: string;
                version_id?: string | null;
                content_type: ContentType;
                selected?: ResolutionPreferences;
                target?: ResolutionPreferences;
                existing_project_ids?: string[];
            };
            type ResolveContentPlan = {
                primary: ResolvedContent;
                dependencies: ResolvedContent[];
                skipped: SkippedContent[];
            };
            type ResolvedContent = {
                project_id: string;
                version_id: string;
                dependent_on_version_id?: string | null;
            };
            type SkippedContent = {
                project_id: string;
                version_id?: string | null;
                dependent_on_version_id?: string | null;
                reason: 'already_installed' | 'duplicate_project' | 'conflicting_dependency' | 'no_compatible_version' | 'missing_version' | 'quilt_fabric_api';
            };
        }
    }
    namespace Campaign {
        namespace Internal {
            type CampaignInfo = {
                total_donations_usd: RawDecimal;
                target_usd: RawDecimal;
                num_donators: number;
            };
        }
    }
    namespace Billing {
        namespace Internal {
            type PriceDuration = 'five-days' | 'monthly' | 'quarterly' | 'yearly';
            type SubscriptionStatus = 'provisioned' | 'unprovisioned';
            type UserSubscription = {
                id: string;
                user_id: string;
                price_id: string;
                interval: PriceDuration;
                status: SubscriptionStatus;
                created: string;
                metadata?: SubscriptionMetadata;
                next_charge_tax_amount?: number | null;
            };
            type SubscriptionMetadata = {
                type: 'pyro';
                id: string;
                region?: string;
            } | {
                type: 'medal';
                id: string;
            };
            type ChargeStatus = 'open' | 'processing' | 'succeeded' | 'failed' | 'cancelled' | 'expiring';
            type ChargeType = 'one-time' | 'subscription' | 'proration' | 'refund';
            type PaymentPlatform = 'Stripe' | 'None';
            type Charge = {
                id: string;
                user_id: string;
                price_id: string;
                amount: number;
                currency_code: string;
                status: ChargeStatus;
                due: string;
                last_attempt: string | null;
                type: ChargeType;
                subscription_id: string | null;
                subscription_interval: PriceDuration | null;
                platform: PaymentPlatform;
                parent_charge_id: string | null;
                net: number | null;
            };
            type ProductMetadata = {
                type: 'midas';
            } | {
                type: 'pyro';
                cpu: number;
                ram: number;
                swap: number;
                storage: number;
            } | {
                type: 'medal';
                cpu: number;
                ram: number;
                swap: number;
                storage: number;
                region: string;
            };
            type Price = {
                type: 'one-time';
                price: number;
            } | {
                type: 'recurring';
                intervals: Record<PriceDuration, number>;
            };
            type ProductPrice = {
                id: string;
                product_id: string;
                prices: Price;
                currency_code: string;
            };
            type Product = {
                id: string;
                metadata: ProductMetadata;
                prices: ProductPrice[];
                unitary: boolean;
            };
            type EditSubscriptionRequest = {
                interval?: PriceDuration;
                payment_method?: string;
                cancelled?: boolean;
                region?: string;
                product?: string;
            };
            type EditSubscriptionResponse = {
                payment_intent_id: string;
                client_secret: string;
                tax: number;
                total: number;
            };
            type AddPaymentMethodFlowResponse = {
                client_secret: string;
            };
            type EditPaymentMethodRequest = {
                primary: boolean;
            };
            type InitiatePaymentRequest = {
                type: 'payment_method' | 'confirmation_token';
                id?: string;
                token?: string;
                charge: {
                    type: 'existing';
                    id: string;
                } | {
                    type: 'new';
                    product_id: string;
                    interval?: PriceDuration;
                };
                existing_payment_intent?: string;
                metadata?: {
                    type: 'pyro';
                    server_name?: string;
                    server_region?: string;
                    source: unknown;
                };
            };
            type InitiatePaymentResponse = {
                payment_intent_id?: string;
                client_secret?: string;
                price_id: string;
                tax: number;
                total: number;
                payment_method?: string;
            };
            type RefundChargeRequest = {
                type: 'full' | 'partial' | 'none';
                amount?: number;
                unprovision?: boolean;
            };
            type CreditRequest = {
                subscription_ids: string[];
                days: number;
                send_email: boolean;
                message: string;
            } | {
                nodes: string[];
                days: number;
                send_email: boolean;
                message: string;
            } | {
                region: string;
                days: number;
                send_email: boolean;
                message: string;
            };
        }
    }
    namespace Payout {
        namespace v3 {
            type PayoutBalance = {
                available: number;
                withdrawn_lifetime: number;
                withdrawn_ytd: number;
                pending: number;
                dates: Record<string, number>;
                requested_form_type: string | null;
                form_completion_status: string | null;
            };
            type PayoutStatus = 'success' | 'in-transit' | 'cancelled' | 'cancelling' | 'failed' | 'unknown';
            type PayoutMethodType = 'venmo' | 'paypal' | 'tremendous' | 'muralpay';
            type PayoutSource = 'creator_rewards' | 'affilites';
            type TransactionItem = {
                type: 'withdrawal';
                id: string;
                status: PayoutStatus;
                created: string;
                amount: number;
                fee: number | null;
                method_type: PayoutMethodType | null;
                method_id: string | null;
                method_address: string | null;
            } | {
                type: 'payout_available';
                created: string;
                payout_source: PayoutSource;
                amount: number;
            };
            type WithdrawalFees = {
                net_usd: number;
                fee: number;
                exchange_rate: number | null;
            };
            type PayoutDecimal = number;
            type PayoutInterval = {
                standard?: {
                    min: number;
                    max: number;
                };
                fixed?: {
                    values: PayoutDecimal[];
                };
            };
            type PayoutMethod = {
                id: string;
                type: PayoutMethodType;
                name: string;
                category: string | null;
                image_url: string | null;
                image_logo_url: string | null;
                interval: PayoutInterval;
                currency_code: string | null;
                exchange_rate: number | null;
            };
        }
    }
    namespace Affiliate {
        namespace Internal {
            type AffiliateCode = {
                id: string;
                created_at: string | null;
                created_by: string | null;
                affiliate: string;
                source_name: string;
            };
            type CreateRequest = {
                affiliate?: string;
                source_name: string;
            };
            type PatchRequest = {
                source_name: string;
            };
        }
    }
    namespace Attribution {
        namespace Internal {
            type AttributionPermissionKind = 'license' | 'my_project' | 'special_permissions' | 'globally_allowed' | 'no_permission';
            type AttributionResolutionKind = AttributionPermissionKind;
            type AttributionLicense = string | {
                name: string;
            };
            type AttributionModerationStatusKind = 'not_allowed' | 'approved' | 'bad_proof';
            type AttributionModerationStatus = {
                kind: AttributionModerationStatusKind;
                reason: string;
                moderated_at?: string;
                moderated_by?: string;
            };
            type AttributionResolutionBase = {
                notes: string;
                image_urls: string[];
                moderation_status?: AttributionModerationStatus | null;
                updated_by_moderator: boolean;
            };
            type AttributionResolution = (AttributionResolutionBase & {
                kind: 'license';
                license: AttributionLicense;
                link_to_work: string;
            }) | (AttributionResolutionBase & {
                kind: 'my_project';
                license: AttributionLicense;
            }) | (AttributionResolutionBase & {
                kind: 'special_permissions';
                link_to_work: string;
            }) | (AttributionResolutionBase & {
                kind: 'globally_allowed';
                link_to_work: string;
            }) | (AttributionResolutionBase & {
                kind: 'no_permission';
                link_to_work?: string;
            });
            type FlameProject = {
                id: number;
                title: string;
                url: string;
                icon_url: string;
            };
            type AttributionFile = {
                name: string;
                sha1: string;
                versions: string[];
                moderation_external_license_id?: number;
                moderation_external_license?: ExternalProjects.Internal.ExternalProject;
            };
            type AttributionVersionInfo = {
                id: string;
                name: string;
                version_number: string;
                date_created: string;
            };
            type OverrideFileOnPlatform = {
                file_path: string;
                sha1: string;
                version_id: string;
                platform_version_id: string;
                platform_project_id: string;
            };
            type AttributionGroup = {
                id: string;
                flame_project: FlameProject | null;
                attribution: AttributionResolution | null;
                attributed_at: string | null;
                attributed_by: string | null;
                files: AttributionFile[];
                versions: AttributionVersionInfo[];
                override_files_on_platform: OverrideFileOnPlatform[];
            };
            type UpdateGroupRequest = {
                attribution: AttributionResolution;
            };
            type DeleteGroupsRequest = {
                groups: string[];
            };
            type DeleteAllGroupsRequest = {
                project_id: string;
            };
            type AssignRequest = {
                sha1: string;
                target_group_id: number;
                project_id: string;
            };
            type SplitRequest = {
                sha1: string;
                project_id: string;
            };
            type FileScanResponse = {
                new_attribution_groups: number;
                new_attribution_files: number;
                scanned_file_names: string[];
            };
        }
    }
    namespace Images {
        namespace v3 {
            /** Extensions accepted by POST /v3/image (Labrinth image pipeline). */
            type ImageExtension = 'bmp' | 'gif' | 'jpeg' | 'jpg' | 'png' | 'webp';
            /** `context` query values accepted by POST /v3/image. */
            type ImageUploadContext = 'project' | 'version' | 'thread_message' | 'report';
            type UploadedImage = {
                id: string;
                url: string;
                size: number;
                created: string;
                owner_id: string;
            } & ({
                context: 'project';
                project_id: string;
            } | {
                context: 'version';
                version_id: string;
            } | {
                context: 'thread_message';
                thread_message_id: string;
            } | {
                context: 'report';
                report_id: string | null;
            });
            type UploadedImageFor<C extends ImageUploadContext> = Extract<UploadedImage, {
                context: C;
            }>;
            /**
             * Target for POST /v3/image (per-context id query params, plus `context`).
             * `ext` is passed as a separate argument on the client module.
             */
            type UploadImageParams = {
                context: 'project';
                project_id: string;
            } | {
                context: 'version';
                version_id: string;
            } | {
                context: 'thread_message';
                thread_message_id: string;
            } | {
                context: 'report';
                report_id?: string;
            };
        }
    }
    namespace Analytics {
        namespace Internal {
            type AnalyticsEventUpsert = {
                announcement_url: string | null;
                for_metric_kind: v3.AnalyticsEventMetricKind[] | null;
                title: string;
                ends: string;
                starts: string;
            };
        }
        namespace v3 {
            type AnalyticsEventId = number;
            type AnalyticsEventMetricKind = 'views' | 'revenue' | 'downloads' | 'playtime';
            type AnalyticsEvent = {
                announcement_url: string | null;
                for_metric_kind: AnalyticsEventMetricKind[] | null;
                title: string;
                ends: string;
                id: AnalyticsEventId;
                starts: string;
            };
            type FetchRequest = {
                time_range: TimeRange;
                return_metrics: ReturnMetrics;
                project_ids?: string[];
            };
            type TimeRange = {
                start: string;
                end: string;
                resolution: TimeRangeResolution;
            };
            type TimeRangeResolution = {
                slices: number;
            } | {
                minutes: number;
            };
            type ReturnMetrics = {
                project_views?: Metrics<ProjectViewsField, ProjectViewsFilters>;
                project_downloads?: Metrics<ProjectDownloadsField, ProjectDownloadsFilters>;
                project_playtime?: Metrics<ProjectPlaytimeField, ProjectPlaytimeFilters>;
                project_revenue?: Metrics<ProjectRevenueField, ProjectRevenueFilters>;
                affiliate_code_clicks?: Metrics<AffiliateCodeClicksField, AffiliateCodeClicksFilters>;
                affiliate_code_conversions?: Metrics<AffiliateCodeConversionsField, AffiliateCodeConversionsFilters>;
                affiliate_code_revenue?: Metrics<AffiliateCodeRevenueField, AffiliateCodeRevenueFilters>;
            };
            type Metrics<BucketBy, FilterBy> = {
                bucket_by?: BucketBy[];
                filter_by?: FilterBy;
            };
            type ProjectViewsField = 'project_id' | 'domain' | 'site_path' | 'monetized' | 'country';
            type ProjectDownloadsField = 'project_id' | 'version_id' | 'dependent_project_id' | 'user_agent' | 'domain' | 'country' | 'monetized' | 'reason' | 'game_version' | 'loader';
            type ProjectPlaytimeField = 'project_id' | 'version_id' | 'loader' | 'game_version' | 'country';
            type ProjectRevenueField = 'project_id' | 'user_id';
            type DownloadReason = 'standalone' | 'dependency' | 'modpack' | 'update';
            type AffiliateCodeClicksField = 'affiliate_code_id';
            type AffiliateCodeConversionsField = 'affiliate_code_id';
            type AffiliateCodeRevenueField = 'affiliate_code_id';
            type ProjectViewsFilters = {
                domain?: string[];
                site_path?: string[];
                monetized?: boolean[];
                country?: string[];
            };
            type ProjectDownloadsFilters = {
                version_id?: string[];
                dependent_project_id?: string[];
                domain?: string[];
                user_agent?: string[];
                monetized?: boolean[];
                country?: string[];
                reason?: DownloadReason[];
                game_version?: string[];
                loader?: string[];
            };
            type ProjectPlaytimeFilters = {
                version_id?: string[];
                loader?: string[];
                game_version?: string[];
                country?: string[];
            };
            type ProjectRevenueFilters = {
                user_id?: string[];
            };
            type AffiliateCodeClicksFilters = {
                affiliate_code_id?: string[];
            };
            type AffiliateCodeConversionsFilters = {
                affiliate_code_id?: string[];
            };
            type AffiliateCodeRevenueFilters = {
                affiliate_code_id?: string[];
            };
            type FetchResponse = {
                metrics: TimeSlice[];
                projects: Record<string, Projects.v3.Project>;
                users: Record<string, Users.v3.User>;
                project_events: ProjectAnalyticsEvent[];
            };
            type FacetsResponse = {
                facets: AnalyticsFacets;
            };
            type AnalyticsFacets = {
                project_views?: Partial<ProjectViewsFacets>;
                project_downloads?: Partial<ProjectDownloadsFacets>;
                project_playtime?: Partial<ProjectPlaytimeFacets>;
            };
            type ProjectViewsFacets = {
                domain: string[];
                site_path: string[];
                monetized: boolean[];
                country: string[];
            };
            type ProjectDownloadsFacets = {
                project_id: string[];
                domain: string[];
                user_agent: string[];
                version_id: string[];
                monetized: boolean[];
                country: string[];
                reason: DownloadReason[];
                game_version: string[];
                loader: string[];
            };
            type ProjectPlaytimeFacets = {
                version_id: string[];
                loader: string[];
                game_version: string[];
                country: string[];
            };
            type TimeSlice = AnalyticsData[];
            type ProjectAnalyticsEvent = {
                project_id: string;
                timestamp: string;
            } & ProjectAnalyticsEventKind;
            type ProjectAnalyticsEventKind = {
                kind: 'version_uploaded';
                version_id: string;
                version_name: string;
                version_number: string;
            } | {
                kind: 'status_changed';
                status_from: Projects.v2.ProjectStatus;
                status_to: Projects.v2.ProjectStatus;
            };
            type AnalyticsData = ProjectAnalytics | AffiliateCodeAnalytics;
            type ProjectAnalytics = {
                source_project: string;
            } & ProjectMetrics;
            type ProjectMetrics = ({
                metric_kind: 'views';
            } & ProjectViews) | ({
                metric_kind: 'downloads';
            } & ProjectDownloads) | ({
                metric_kind: 'playtime';
            } & ProjectPlaytime) | ({
                metric_kind: 'revenue';
            } & ProjectRevenue);
            type ProjectViews = {
                domain?: string;
                site_path?: string;
                monetized?: boolean;
                country?: string;
                views: number;
            };
            type ProjectDownloads = {
                user_agent?: string;
                domain?: string;
                version_id?: string;
                dependent_project_id?: string;
                country?: string;
                monetized?: boolean;
                reason?: DownloadReason;
                game_version?: string;
                loader?: string;
                downloads: number;
            };
            type ProjectPlaytime = {
                version_id?: string;
                loader?: string;
                game_version?: string;
                country?: string;
                seconds: number;
            };
            type ProjectRevenue = {
                user_id?: string;
                revenue: string;
            };
            type AffiliateCodeAnalytics = {
                source_affiliate_code: string;
            } & AffiliateCodeMetrics;
            type AffiliateCodeMetrics = ({
                metric_kind: 'clicks';
            } & AffiliateCodeClicks) | ({
                metric_kind: 'conversions';
            } & AffiliateCodeConversions) | ({
                metric_kind: 'revenue';
            } & AffiliateCodeRevenue);
            type AffiliateCodeClicks = {
                clicks: number;
            };
            type AffiliateCodeConversions = {
                conversions: number;
            };
            type AffiliateCodeRevenue = {
                revenue: string;
            };
        }
    }
    namespace Auth {
        namespace Internal {
            type SubscriptionStatus = {
                subscribed: boolean;
            };
            type DiscordCommunityLinkResponse = {
                url: string;
            };
        }
        namespace v2 {
            type LoginRequest = {
                username: string;
                password: string;
                challenge: string;
            };
            type LoginResponse = {
                session?: string;
                flow?: string;
            };
            type Login2FARequest = {
                code: string;
                flow: string;
            };
            type Login2FAResponse = {
                session: string;
            };
            type CreateAccountRequest = {
                username: string;
                password: string;
                email: string;
                challenge: string;
                sign_up_newsletter?: boolean;
                account_consent?: boolean;
            };
            type CreateAccountResponse = {
                session: string;
            };
            type ValidateCreateAccountRequest = {
                username: string;
                password: string;
                email: string;
            };
            type CreateOAuthAccountRequest = {
                username: string;
                state: string;
                challenge: string;
                sign_up_newsletter: boolean;
                account_consent?: boolean;
            };
            type CreateOAuthAccountResponse = {
                session: string;
            };
            type ResetPasswordRequest = {
                username: string;
                challenge: string;
            };
            type ChangePasswordRequest = {
                flow?: string;
                old_password?: string;
                new_password?: string;
            };
            type Passkey = {
                id: string;
                name: string;
                created_at: string;
                last_used: string | null;
            };
            type PasskeyRegisterStartResponse = {
                options: Record<string, unknown>;
                flow: string;
            };
            type PasskeyRegisterFinishRequest = {
                flow: string;
                name: string;
                credential: unknown;
            };
            type PasskeyAuthenticateStartResponse = {
                options: Record<string, unknown>;
                flow: string;
            };
            type PasskeyAuthenticateFinishRequest = {
                flow: string;
                credential: unknown;
            };
            type PasskeyRenameRequest = {
                name: string;
            };
        }
    }
    namespace Globals {
        namespace Internal {
            type Globals = {
                tax_compliance_thresholds: Record<string, number>;
                captcha_enabled: boolean;
            };
        }
    }
    namespace OAuth {
        namespace Internal {
            type OAuthClientAccessRequest = {
                flow_id: string;
                client_id: string;
                client_name: string;
                client_icon: string | null;
                requested_scopes: number;
            };
            type AcceptRejectRequest = {
                flow: string;
            };
            type OAuthRedirectUri = {
                id: string;
                client_id: string;
                uri: string;
            };
            type OAuthClient = {
                id: string;
                name: string;
                icon_url: string | null;
                max_scopes: number;
                redirect_uris: OAuthRedirectUri[];
                created_by: string;
                created: string;
                url: string | null;
                description: string | null;
            };
            type OAuthClientCreationResult = OAuthClient & {
                client_secret: string;
            };
            type OAuthClientAuthorization = {
                id: string;
                app_id: string;
                user_id: string;
                scopes: number;
                created: string;
            };
            type CreateOAuthAppRequest = {
                name: string;
                max_scopes: number;
                redirect_uris: string[];
                url?: string;
                description?: string;
            };
            type EditOAuthAppRequest = {
                name?: string;
                max_scopes?: number;
                redirect_uris?: string[];
                url?: string | null;
                description?: string | null;
                icon_url?: string;
            };
        }
    }
    namespace Projects {
        namespace v2 {
            type Environment = 'required' | 'optional' | 'unsupported' | 'unknown';
            type ProjectStatus = 'approved' | 'archived' | 'rejected' | 'draft' | 'unlisted' | 'processing' | 'withheld' | 'scheduled' | 'private' | 'unknown';
            type MonetizationStatus = 'monetized' | 'demonetized' | 'force-demonetized';
            type ProjectType = 'mod' | 'modpack' | 'resourcepack' | 'shader' | 'plugin' | 'datapack' | 'project';
            type GalleryImage = {
                url: string;
                featured: boolean;
                title?: string;
                description?: string;
                created: string;
                ordering: number;
            };
            type DonationLink = {
                id: string;
                platform: string;
                url: string;
            };
            interface CreateProjectBase {
                title: string;
                project_type: 'mod';
                slug: string;
                description: string;
                body: string;
                requested_status: v2.ProjectStatus;
                initial_versions: unknown[];
                team_members: unknown[];
                categories: string[];
                client_side: string;
                server_side: string;
                license_id: string;
                is_draft: boolean;
                organization_id?: string;
            }
            type Project = {
                id: string;
                slug: string;
                project_type: ProjectType;
                actualProjectType: ProjectType;
                team: string;
                organization: string | null;
                title: string;
                description: string;
                body: string;
                published: string;
                updated: string;
                approved?: string;
                queued?: string;
                status: ProjectStatus;
                requested_status?: ProjectStatus;
                moderator_message?: {
                    message: string;
                    body?: string;
                };
                license: {
                    id: string;
                    name: string;
                    url?: string;
                };
                client_side: Environment;
                server_side: Environment;
                downloads: number;
                followers: number;
                categories: string[];
                additional_categories: string[];
                game_versions: string[];
                loaders: string[];
                versions: string[];
                icon_url?: string;
                issues_url?: string;
                source_url?: string;
                wiki_url?: string;
                discord_url?: string;
                donation_urls?: DonationLink[];
                gallery?: GalleryImage[];
                color?: number;
                thread_id: string;
                monetization_status: MonetizationStatus;
            };
            type ProjectCheckResponse = {
                id: string;
            };
            type SearchResultHit = {
                project_id: string;
                project_type: ProjectType;
                slug: string;
                author: string;
                title: string;
                description: string;
                categories: string[];
                display_categories: string[];
                versions: string[];
                downloads: number;
                follows: number;
                icon_url: string;
                date_created: string;
                date_modified: string;
                latest_version?: string;
                license: string;
                client_side: Environment;
                server_side: Environment;
                gallery: string[];
                color?: number;
            };
            type SearchResult = {
                hits: SearchResultHit[];
                offset: number;
                limit: number;
                total_hits: number;
            };
            type ProjectSearchParams = {
                query?: string;
                facets?: string[][];
                new_filters?: string;
                filters?: string;
                index?: 'relevance' | 'downloads' | 'follows' | 'newest' | 'updated';
                offset?: number;
                limit?: number;
            };
            interface DependencyInfo {
                projects: Project[];
                versions: Labrinth.Versions.v2.Version[];
            }
            type BulkEditProjectRequest = {
                categories?: string[];
                add_categories?: string[];
                remove_categories?: string[];
                additional_categories?: string[];
                add_additional_categories?: string[];
                remove_additional_categories?: string[];
                donation_urls?: DonationLink[];
                add_donation_urls?: DonationLink[];
                remove_donation_urls?: DonationLink[];
                issues_url?: string | null;
                source_url?: string | null;
                wiki_url?: string | null;
                discord_url?: string | null;
            };
        }
        namespace v3 {
            export type ProjectType = 'mod' | 'modpack' | 'resourcepack' | 'shader' | 'plugin' | 'datapack';
            export type Environment = 'client_and_server' | 'client_only' | 'client_only_server_optional' | 'singleplayer_only' | 'server_only' | 'server_only_client_optional' | 'dedicated_server_only' | 'client_or_server' | 'client_or_server_prefers_both' | 'unknown';
            export type GalleryItem = {
                url: string;
                raw_url: string;
                featured: boolean;
                name?: string;
                description?: string;
                created: string;
                ordering: number;
            };
            export type Link = {
                platform: string;
                donation: boolean;
                url: string;
            };
            export type Project = {
                id: string;
                slug?: string;
                project_types: ProjectType[];
                games: string[];
                team_id: string;
                organization?: string;
                name: string;
                summary: string;
                description: string;
                published: string;
                updated: string;
                approved?: string;
                queued?: string;
                status: v2.ProjectStatus;
                requested_status?: v2.ProjectStatus;
                license: {
                    id: string;
                    name: string;
                    url?: string;
                };
                downloads: number;
                followers: number;
                categories: string[];
                additional_categories: string[];
                loaders: string[];
                mrpack_loaders: string[];
                versions: string[];
                icon_url?: string;
                link_urls: Record<string, Link>;
                gallery: GalleryItem[];
                color?: number;
                thread_id: string;
                monetization_status: v2.MonetizationStatus;
                side_types_migration_review_status: 'reviewed' | 'pending';
                environment?: Environment[];
                minecraft_server?: MinecraftServer | null;
                minecraft_java_server?: MinecraftJavaServer | null;
                minecraft_bedrock_server?: MinecraftBedrockServer | null;
                minecraft_mod?: unknown | null;
                /**
                 * @deprecated Not recommended to use.
                 **/
                [key: string]: unknown;
            };
            interface CreateProjectBase {
                name: string;
                slug: string;
                summary: string;
                description: string;
                requested_status: v2.ProjectStatus;
                organization_id?: string;
            }
            export interface MinecraftJavaServerPing {
                address: string;
                data?: {
                    description: string;
                    latency: {
                        nanos: number;
                        secs: number;
                    };
                    players_max: number;
                    players_online: number;
                    version_name: string;
                    version_protocol: number;
                };
                port: number;
                when: string;
            }
            export interface MinecraftServer {
                max_players?: number;
                region?: string;
                active_version?: string | null;
                languages?: string[];
                /**
                 * deprecated, use region instead
                 */
                country?: string;
            }
            export interface ModpackContent {
                kind: 'modpack';
                version_id: string;
                project_id?: string;
                project_name?: string;
                project_icon?: string;
            }
            export interface VanillaContent {
                kind: 'vanilla';
                supported_game_versions: string[];
                recommended_game_version?: string;
            }
            export interface MinecraftJavaServer {
                address?: string;
                content?: ModpackContent | VanillaContent;
                verified_plays_4w?: number | null;
                verified_plays_2w?: number | null;
                ping: Projects.v3.MinecraftJavaServerPing | null;
            }
            export interface MinecraftBedrockServer {
                address?: string;
            }
            export interface CreateServerProjectRequest {
                base: CreateProjectBase;
                minecraft_server?: MinecraftServer;
                minecraft_java_server?: Omit<MinecraftJavaServer, 'ping'>;
                minecraft_bedrock_server?: MinecraftBedrockServer;
            }
            export type EditProjectRequest = {
                name?: string;
                summary?: string;
                description?: string;
                categories?: string[];
                additional_categories?: string[];
                license_url?: string | null;
                link_urls?: Record<string, string | null>;
                license_id?: string;
                slug?: string;
                status?: v2.ProjectStatus;
                requested_status?: v2.ProjectStatus | null;
                moderation_message?: string | null;
                moderation_message_body?: string | null;
                monetization_status?: v2.MonetizationStatus;
                side_types_migration_review_status?: 'reviewed' | 'pending';
                environment?: Environment;
                minecraft_server?: MinecraftServer;
                minecraft_java_server?: MinecraftJavaServer;
                minecraft_bedrock_server?: MinecraftBedrockServer;
                [key: string]: unknown;
            };
            export type Organization = {
                id: string;
                slug: string;
                name: string;
                team_id: string;
                description: string;
                icon_url: string | null;
                color: number | null;
                members: TeamMember[];
            };
            export type OrganizationMember = {
                team_id: string;
                user: Users.v3.User;
                role: string;
                is_owner: boolean;
                permissions: number;
                organization_permissions: number;
                accepted: boolean;
                payouts_split: number;
                ordering: number;
            };
            export type TeamMember = {
                team_id: string;
                user: Users.v3.User;
                role: string;
                is_owner: boolean;
                permissions: number | null;
                organization_permissions: number | null;
                accepted: boolean;
                payouts_split: number | null;
                ordering: number;
            };
            export type Team = {
                id: string;
                members: TeamMember[];
            };
            export type ProjectDependencies = {
                projects: Project[];
                versions: Labrinth.Versions.v3.Version[];
            };
            export {};
        }
    }
    namespace Organizations {
        namespace v3 {
            type Organization = {
                id: string;
                slug: string;
                name: string;
                team_id: string;
                description: string;
                icon_url: string | null;
                color: number | null;
                members: Projects.v3.TeamMember[];
                moderation_notes?: Users.Common.ModerationNote | null;
            };
            type CreateOrganizationRequest = {
                slug: string;
                name: string;
                description: string;
            };
            type EditOrganizationRequest = {
                description?: string;
                slug?: string;
                name?: string;
            };
            type AddProjectRequest = {
                project_id: string;
            };
            type RemoveProjectRequest = {
                new_owner: string;
            };
        }
    }
    namespace Versions {
        namespace v2 {
            type VersionType = 'release' | 'beta' | 'alpha';
            type VersionStatus = 'listed' | 'archived' | 'draft' | 'unlisted' | 'scheduled' | 'unknown';
            type DependencyType = 'required' | 'optional' | 'incompatible' | 'embedded';
            type FileType = 'required-resource-pack' | 'optional-resource-pack' | 'unknown';
            type VersionFileHash = {
                sha512: string;
                sha1: string;
            };
            type VersionFile = {
                id?: string;
                hashes: VersionFileHash;
                url: string;
                filename: string;
                primary: boolean;
                size: number;
                file_type?: FileType;
            };
            type Dependency = {
                file_name?: string;
                dependency_type: DependencyType;
            } & ({
                project_id: string;
            } | {
                version_id: string;
                project_id?: string;
            });
            type Version = {
                id: string;
                project_id: string;
                author_id: string;
                featured: boolean;
                name: string;
                version_number: string;
                changelog: string;
                changelog_url?: string | null;
                date_published: string;
                downloads: number;
                version_type: VersionType;
                status: VersionStatus;
                requested_status?: VersionStatus | null;
                files: VersionFile[];
                dependencies: Dependency[];
                game_versions: string[];
                loaders: string[];
            };
            interface GetProjectVersionsParams {
                game_versions?: string[];
                loaders?: string[];
                include_changelog?: boolean;
                limit?: number;
                offset?: number;
            }
        }
        namespace v3 {
            export type FlameProject = {
                id: number;
                title: string;
                url: string;
                icon_url: string;
            };
            export type DependencyAttribution = {
                flame_project?: FlameProject;
                resolution?: DependencyAttributionResolution;
            };
            export type DependencyAttributionResolution = {
                kind: 'license';
                license: Labrinth.Attribution.Internal.AttributionLicense;
                link_to_work: string;
            } | {
                kind: 'globally_allowed';
                link_to_work: string;
            } | {
                kind: 'my_project';
                license: Labrinth.Attribution.Internal.AttributionLicense;
            } | {
                kind: 'special_permissions';
                link_to_work: string;
            } | {
                kind: 'no_permission';
                link_to_work?: string;
            };
            export interface Dependency {
                dependency_type: Labrinth.Versions.v2.DependencyType;
                project_id?: string;
                file_name?: string;
                version_id?: string;
                attribution?: DependencyAttribution;
            }
            export interface GetProjectVersionsParams {
                game_versions?: string[];
                loaders?: string[];
                include_changelog?: boolean;
                limit?: number;
                offset?: number;
                apiVersion?: 2 | 3;
            }
            export type VersionChannel = 'release' | 'beta' | 'alpha';
            export type FileType = 'required-resource-pack' | 'optional-resource-pack' | 'sources-jar' | 'dev-jar' | 'javadoc-jar' | 'signature' | 'unknown';
            export type FileHashType = 'sha512' | 'sha1';
            export type VersionFileHash = {
                [key in FileHashType]: string;
            };
            export interface VersionFile {
                id?: string;
                hashes: VersionFileHash;
                url: string;
                filename: string;
                primary: boolean;
                size: number;
                file_type?: FileType;
            }
            interface JavaServerVersion {
                /**
                 * The version id of the modpack
                 */
                modpack: string;
            }
            export interface Version {
                name: string;
                version_number: string;
                changelog?: string;
                dependencies: Dependency[];
                game_versions: string[];
                version_type: VersionChannel;
                loaders: string[];
                featured: boolean;
                status: Labrinth.Versions.v2.VersionStatus;
                id: string;
                project_id: string;
                author_id: string;
                date_published: string;
                downloads: number;
                files: VersionFile[];
                files_missing_attribution?: string[];
                environment?: Labrinth.Projects.v3.Environment;
                mrpack_loaders?: string[];
                minecraft_java_server?: JavaServerVersion;
            }
            export interface DraftVersionFile {
                fileType?: FileType;
                file: File;
            }
            export type DraftVersion = Omit<Labrinth.Versions.v3.CreateVersionRequest, 'file_parts' | 'primary_file' | 'file_types'> & {
                existing_files?: VersionFile[];
                version_id?: string;
                environment?: Labrinth.Projects.v3.Environment;
            };
            export interface CreateVersionRequest {
                name: string;
                version_number: string;
                changelog: string;
                dependencies?: Array<{
                    version_id?: string;
                    project_id?: string;
                    file_name?: string;
                    dependency_type: Labrinth.Versions.v2.DependencyType;
                }>;
                game_versions: string[];
                version_type: 'release' | 'beta' | 'alpha';
                loaders: string[];
                featured?: boolean;
                status?: 'listed' | 'archived' | 'draft' | 'unlisted' | 'scheduled' | 'unknown';
                requested_status?: 'listed' | 'archived' | 'draft' | 'unlisted' | null;
                project_id: string;
                file_parts: string[];
                primary_file?: string;
                file_types?: Record<string, Labrinth.Versions.v3.FileType | null>;
                environment?: Labrinth.Projects.v3.Environment;
                mrpack_loaders?: string[];
            }
            export type ModifyVersionRequest = Partial<Omit<CreateVersionRequest, 'project_id' | 'file_parts' | 'primary_file' | 'file_types'>> & {
                file_types?: {
                    algorithm: string;
                    hash: string;
                    file_type: Labrinth.Versions.v3.FileType | null;
                }[];
            };
            export type AddFilesToVersionRequest = {
                file_parts: string[];
                file_types?: Record<string, Labrinth.Versions.v3.FileType | null>;
            };
            export {};
        }
    }
    namespace Users {
        namespace Common {
            type Role = 'developer' | 'moderator' | 'admin';
            type AuthProvider = 'github' | 'discord' | 'microsoft' | 'gitlab' | 'google' | 'steam' | 'paypal';
            type UserPayoutData = {
                paypal_address?: string;
                paypal_country?: string;
                venmo_handle?: string;
                balance: number;
            };
            type ModerationNote = {
                notes: string;
                last_modified: string;
                created_at: string;
                last_author: string;
                user_rating: number;
                version: number;
            };
        }
        namespace v2 {
            type Role = Common.Role;
            type AuthProvider = Common.AuthProvider;
            type UserPayoutData = Common.UserPayoutData;
            type User = {
                id: string;
                username: string;
                name?: string;
                avatar_url?: string;
                bio?: string;
                created: string;
                role: Role;
                badges: number;
                auth_providers?: AuthProvider[];
                email?: string;
                email_verified?: boolean;
                has_password?: boolean;
                has_totp?: boolean;
                payout_data?: UserPayoutData;
                github_id?: number;
            };
        }
        namespace v3 {
            type Role = Common.Role;
            type AuthProvider = Common.AuthProvider;
            type UserPayoutData = Common.UserPayoutData;
            type Pride26CampaignDonation = {
                last_donated_at: string;
                has_badge: boolean;
                has_midas: boolean;
            };
            type UserCampaigns = {
                pride_26: Pride26CampaignDonation | null;
            };
            type User = {
                id: string;
                username: string;
                avatar_url?: string;
                bio?: string;
                created: string;
                role: Role;
                badges: number;
                campaigns: UserCampaigns;
                auth_providers?: AuthProvider[];
                email?: string;
                email_verified?: boolean;
                has_password?: boolean;
                has_totp?: boolean;
                payout_data?: UserPayoutData;
                stripe_customer_id?: string;
                allow_friend_requests?: boolean;
                moderation_notes?: Common.ModerationNote | null;
                github_id?: number;
                discord_id?: string;
                steam_id?: string;
            };
            type SearchUser = {
                id: string;
                username: string;
                avatar_url: string | null;
            };
            type AllProjectsResponse = {
                projects: Projects.v3.Project[];
                organizations: Record<string, Organizations.v3.Organization>;
            };
        }
    }
    namespace Friends {
        namespace v3 {
            type UserFriend = {
                id: string;
                friend_id: string;
                accepted: boolean;
                created: string;
            };
        }
    }
    namespace BlockedUsers {
        namespace Internal {
            type BlockStatus = {
                blocked: boolean;
            };
        }
        namespace v3 {
            type BlockedUserId = string;
        }
    }
    namespace ServerPing {
        namespace Internal {
            type MinecraftJavaPingRequest = {
                address: string;
                timeout_ms?: number;
            };
        }
    }
    namespace Tags {
        namespace v2 {
            interface Category {
                icon: string;
                name: string;
                project_type: string;
                header: string;
            }
            interface Loader {
                icon: string;
                name: string;
                supported_project_types: string[];
            }
            interface GameVersion {
                version: string;
                version_type: string;
                date: string;
                major: boolean;
            }
            interface DonationPlatform {
                short: string;
                name: string;
            }
            type LicenseText = {
                title: string;
                body: string;
            };
        }
    }
    namespace Teams {
        namespace v2 {
            type AddTeamMemberRequest = {
                user_id: string;
                role?: string;
                permissions?: number;
                organization_permissions?: number | null;
                payouts_split?: number;
                ordering?: number;
            };
            type EditTeamMemberRequest = {
                permissions?: number;
                organization_permissions?: number | null;
                role?: string;
                payouts_split?: number;
                ordering?: number;
            };
            type TransferOwnershipRequest = {
                user_id: string;
            };
        }
    }
    namespace Search {
        type SearchParams = {
            query?: string;
            offset?: string | number;
            index?: string;
            limit?: string | number;
            new_filters?: string;
            facets?: string[][];
            filters?: string;
            version?: string;
        };
        namespace v2 {
            interface ResultSearchProject {
                project_id: string;
                project_type: string;
                all_project_types: string[];
                slug: string | null;
                author: string;
                author_id: string | null;
                organization: string | null;
                organization_id: string | null;
                title: string;
                description: string;
                categories: string[];
                display_categories: string[];
                versions: string[];
                downloads: number;
                follows: number;
                icon_url: string;
                date_created: string;
                date_modified: string;
                latest_version: string;
                license: string;
                client_side: string;
                server_side: string;
                gallery: string[];
                featured_gallery: string | null;
                color: number | null;
            }
            interface SearchResults {
                hits: ResultSearchProject[];
                offset: number;
                limit: number;
                total_hits: number;
            }
        }
        namespace v3 {
            interface ResultSearchProject {
                version_id: string;
                project_id: string;
                project_types: string[];
                all_project_types: string[];
                slug: string | null;
                author: string;
                author_id: string | null;
                organization: string | null;
                organization_id: string | null;
                name: string;
                summary: string;
                categories: string[];
                display_categories: string[];
                downloads: number;
                follows: number;
                icon_url: string | null;
                date_created: string;
                date_modified: string;
                license: string;
                gallery: string[];
                featured_gallery: string | null;
                color: number | null;
                loaders: string[];
                project_loader_fields?: Record<string, unknown[]> & {
                    environment?: Projects.v3.Environment[];
                };
                minecraft_server?: Projects.v3.MinecraftServer | null;
                minecraft_java_server?: Projects.v3.MinecraftJavaServer | null;
                minecraft_bedrock_server?: Projects.v3.MinecraftBedrockServer | null;
                minecraft_mod?: unknown | null;
            }
            interface SearchResults {
                hits: ResultSearchProject[];
                page: number;
                hits_per_page: number;
                total_hits: number;
            }
        }
    }
    namespace Threads {
        namespace v3 {
            type ThreadType = 'report' | 'project' | 'direct_message';
            type MessageBody = {
                type: 'text';
                body: string;
                private?: boolean;
                replying_to?: string;
                associated_images?: string[];
            } | {
                type: 'status_change';
                new_status: Projects.v2.ProjectStatus;
                old_status: Projects.v2.ProjectStatus;
            } | {
                type: 'tech_review';
                verdict: 'safe' | 'unsafe';
            } | {
                type: 'tech_review_entered';
            } | {
                type: 'tech_review_exited';
            } | {
                type: 'tech_review_exit_file_deleted';
            } | {
                type: 'thread_closure';
            } | {
                type: 'thread_reopen';
            } | {
                type: 'deleted';
                private?: boolean;
            };
            type ThreadMessage = {
                id: string | null;
                author_id: string | null;
                body: MessageBody;
                created: string;
                hide_identity: boolean;
            };
            type ThreadMember = {
                id: string;
                username: string;
                avatar_url: string;
                role: string;
                badges: number;
                created: string;
                bio?: string;
            };
            type Thread = {
                id: string;
                type: ThreadType;
                project_id: string | null;
                report_id: string | null;
                messages: ThreadMessage[];
                members: ThreadMember[];
            };
            type SendMessageRequest = {
                body: MessageBody;
            };
        }
    }
    namespace Reports {
        namespace v3 {
            type ItemType = 'project' | 'version' | 'user' | 'shared-instance' | 'unknown';
            type Report = {
                id: string;
                report_type: string;
                item_id: string;
                item_type: ItemType;
                shared_instance_version_id?: number;
                reporter: string;
                body: string;
                created: string;
                closed: boolean;
                thread_id: string;
            };
            type CreateReportRequest = {
                report_type: string;
                item_id: string;
                item_type: ItemType;
                body: string;
                uploaded_images?: string[];
            };
            type EditReportRequest = {
                body?: string;
                closed?: boolean;
            };
            type ListReportsParams = {
                count?: number;
                offset?: number;
                all?: boolean;
            };
        }
    }
    namespace Moderation {
        namespace Internal {
            type Ownership = {
                kind: 'user';
                id: string;
                name: string;
                icon_url: string | null;
            } | {
                kind: 'organization';
                id: string;
                name: string;
                icon_url: string | null;
            };
            type ProjectsSort = 'oldest' | 'newest' | 'most_external_deps' | 'least_external_deps';
            type ProjectsRequest = {
                count?: number;
                offset?: number;
                has_external_dependencies?: boolean;
                exclude_technical_review?: boolean;
                query?: string;
                project_type?: string;
                sort?: ProjectsSort;
            };
            type QueueProject = {
                id: string;
                slug: string | null;
                name: string;
                summary: string;
                icon_url: string | null;
                status: Projects.v2.ProjectStatus;
                requested_status: Projects.v2.ProjectStatus | null;
                queued: string | null;
                published: string;
                updated: string;
                project_types: string[];
                ownership: Ownership;
                external_dependencies_count: number;
            };
            type ProjectsResponse = {
                total: number;
                projects: QueueProject[];
            };
            type ProjectIdsResponse = {
                ids: string[];
            };
            type LockedByUser = {
                id: string;
                username: string;
                avatar_url?: string;
            };
            type LockStatusResponse = {
                locked: boolean;
                is_own_lock: boolean;
                locked_by?: LockedByUser;
                locked_at?: string;
                expires_at?: string;
                expired?: boolean;
            };
            type LockAcquireResponse = {
                success: boolean;
                is_own_lock: boolean;
                locked_by?: LockedByUser;
                locked_at?: string;
                expires_at?: string;
                expired?: boolean;
            };
            type ReleaseLockResponse = {
                success: boolean;
            };
            type ProjectJudgementStatus = ExternalProjects.Internal.ExternalLicenseStatus;
            type FlameJudgement = {
                type: 'flame';
                id: number;
                status: ProjectJudgementStatus;
                link: string;
                title: string;
            };
            type UnknownJudgement = {
                type: 'unknown';
                status: ProjectJudgementStatus;
                proof?: string;
                link?: string;
                title?: string;
            };
            type ProjectJudgement = FlameJudgement | UnknownJudgement;
            type ProjectJudgements = Record<string, ProjectJudgement>;
        }
    }
    namespace Notifications {
        namespace v2 {
            type NotificationAction = {
                title: string;
                action_route: [string, string];
            };
            type NotificationBody = {
                type: string;
                project_id?: string;
                version_id?: string;
                report_id?: string;
                thread_id?: string;
                message_id?: string;
                invited_by?: string;
                organization_id?: string;
                server_id?: string;
                server_name?: string;
                team_id?: string;
                role?: string;
                old_status?: string;
                new_status?: string;
                [key: string]: unknown;
            };
            type Notification = {
                id: string;
                user_id: string;
                type: string | null;
                title: string;
                text: string;
                link: string;
                read: boolean;
                created: string;
                actions: NotificationAction[];
                body: NotificationBody;
            };
        }
    }
    namespace Payouts {
        namespace v3 {
            type RevenueData = {
                time: number;
                revenue: string;
                creator_revenue: string;
            };
            type RevenueResponse = {
                all_time: string;
                all_time_available: string;
                data: RevenueData[];
            };
        }
    }
    namespace Limits {
        namespace v3 {
            type UserLimits = {
                current: number;
                max: number;
            };
        }
    }
    namespace Collections {
        type CollectionStatus = 'listed' | 'unlisted' | 'private' | 'rejected' | 'unknown';
        type Collection = {
            id: string;
            user: string;
            name: string;
            description: string | null;
            icon_url: string | null;
            color: number | null;
            status: CollectionStatus;
            created: string;
            updated: string;
            projects: string[];
        };
        type EditCollectionRequest = {
            name?: string;
            description?: string | null;
            status?: CollectionStatus;
            new_projects?: string[];
        };
    }
    namespace State {
        interface PayoutMethodInfo {
            id: string;
            type: string;
            name: string;
            image_logo_url: string | null;
        }
        interface GeneratedState {
            categories: Tags.v2.Category[];
            loaders: Tags.v2.Loader[];
            gameVersions: Tags.v2.GameVersion[];
            donationPlatforms: Tags.v2.DonationPlatform[];
            reportTypes: string[];
            muralBankDetails?: Record<string, {
                bankNames: string[];
            }>;
            tremendousIdMap?: Record<string, {
                name: string;
                image_url: string | null;
            }>;
            homePageProjects?: Projects.v2.Project[];
            homePageSearch?: Search.v2.SearchResults;
            homePageNotifs?: Search.v2.SearchResults;
            products?: Billing.Internal.Product[];
            countries: ISO3166.Country[];
            subdivisions: Record<string, ISO3166.Subdivision[]>;
            taxComplianceThresholds?: Record<string, number>;
            errors: unknown[];
        }
    }
    namespace ExternalProjects {
        namespace Internal {
            type ExternalLicenseStatus = 'yes' | 'with-attribution-and-source' | 'with-attribution' | 'no' | 'permanent-no' | 'unidentified';
            type LinkedFile = {
                name: string | null;
                sha1: string;
            };
            type ExternalProject = {
                id: number;
                title: string | null;
                status: ExternalLicenseStatus;
                link: string | null;
                exceptions: string | null;
                proof: string | null;
                flame_project_id: number | null;
                inserted_at: string | null;
                inserted_by: number | null;
                updated_at: string | null;
                updated_by: number | null;
                linked_files?: LinkedFile[];
            };
            type SearchRequest = {
                title?: string;
                flame_id?: number;
            };
            type UpdateLicenseRequest = {
                title?: string;
                status: ExternalLicenseStatus;
                link?: string;
                exceptions?: string;
                proof?: string;
                flame_project_id?: number;
            };
            type AddFileRequest = {
                hashes: string[];
                license_id: number;
            };
        }
    }
    namespace TechReview {
        namespace Internal {
            type SearchProjectsRequest = {
                limit?: number;
                page?: number;
                filter?: SearchProjectsFilter;
                sort_by?: SearchProjectsSort;
            };
            type SearchProjectsFilter = {
                project_type?: string[];
                replied_to?: 'replied' | 'unreplied';
                project_status?: string[];
                issue_type?: string[];
            };
            type SearchProjectsSort = 'created_asc' | 'created_desc' | 'severity_asc' | 'severity_desc';
            type UpdateIssueRequest = {
                detail_id: string;
                verdict: DelphiReportIssueStatus;
            };
            type UpdateIssueDetailRequest = {
                verdict: DelphiReportIssueStatus;
            };
            type UpdateGlobalIssueRequest = {
                detail_key: string;
                verdict: DelphiReportIssueStatus;
            };
            type SearchGlobalIssueDetailsRequest = {
                limit?: number;
                page?: number;
                query?: string | null;
            };
            type SearchGlobalIssueDetailsResponse = {
                total: number;
                traces: GlobalIssueDetail[];
            };
            type GetGlobalIssueDetailRequest = {
                detail_key: string;
                limit?: number;
                after_detail_id?: string | null;
            };
            type GetGlobalIssueDetailResponse = {
                trace: GlobalIssueDetail;
                next_after_detail_id: string | null;
            };
            type GlobalIssueDetail = {
                detail_key: string;
                verdict: DelphiReportIssueStatus;
                local_trace_count: number;
                local_traces: GlobalIssueDetailTrace[];
            };
            type GlobalIssueDetailTrace = {
                detail_id: string;
                issue_id: string;
                issue_type: string;
                project_id: string;
                project_slug: string | null;
                project_name: string;
                version_id: string;
                version_number: string;
                file_id: string;
                file_name: string;
                jar: string | null;
                file_path: string;
                severity: DelphiSeverity;
                local_status: DelphiReportIssueStatus;
                effective_status: DelphiReportIssueStatus;
            };
            type SubmitProjectRequest = {
                verdict: 'safe' | 'unsafe';
                message?: string;
            };
            type SearchResponse = {
                project_reports: ProjectReport[];
                projects: Record<string, ProjectModerationInfo>;
                threads: Record<string, Thread>;
                ownership: Record<string, Ownership>;
            };
            type ProjectModerationInfo = {
                id: string;
                thread_id: string;
                name: string;
                project_types: string[];
                icon_url: string | null;
            } & Projects.v3.Project;
            type ProjectReport = {
                project_id: string;
                max_severity: DelphiSeverity | null;
                versions: VersionReport[];
            };
            type VersionReport = {
                version_id: string;
                files: FileReport[];
            };
            type FileReport = {
                report_id: string;
                file_id: string;
                created: string;
                flag_reason: FlagReason;
                severity: DelphiSeverity;
                file_name: string;
                file_size: number;
                download_url: string;
                issues: FileIssue[];
            };
            type FileIssue = {
                id: string;
                report_id: string;
                issue_type: string;
                details: ReportIssueDetail[];
            };
            type ReportIssueDetail = {
                id: string;
                issue_id: string;
                key: string;
                jar: string | null;
                file_path: string;
                decompiled_source: string | null;
                data: Record<string, unknown>;
                severity: DelphiSeverity;
                local_status: DelphiReportIssueStatus | null;
                global_status: DelphiReportIssueStatus | null;
                status: DelphiReportIssueStatus;
            };
            type Ownership = {
                kind: 'user';
                id: string;
                name: string;
                icon_url?: string;
            } | {
                kind: 'organization';
                id: string;
                name: string;
                icon_url?: string;
            };
            type DBThread = {
                id: string;
                project_id?: string;
                report_id?: string;
                type_: ThreadType;
                messages: DBThreadMessage[];
                members: string[];
            };
            type DBThreadMessage = {
                id: string;
                thread_id: string;
                author_id?: string;
                body: MessageBody;
                created: string;
                hide_identity: boolean;
            };
            type MessageBody = {
                type: 'text';
                body: string;
                private?: boolean;
                replying_to?: string;
                associated_images?: string[];
            } | {
                type: 'status_change';
                new_status: Projects.v2.ProjectStatus;
                old_status: Projects.v2.ProjectStatus;
            } | {
                type: 'tech_review';
                verdict: 'safe' | 'unsafe';
            } | {
                type: 'tech_review_entered';
            } | {
                type: 'tech_review_exited';
            } | {
                type: 'tech_review_exit_file_deleted';
            } | {
                type: 'thread_closure';
            } | {
                type: 'thread_reopen';
            } | {
                type: 'deleted';
                private?: boolean;
            };
            type ThreadType = 'report' | 'project' | 'direct_message';
            type User = {
                id: string;
                username: string;
                avatar_url: string;
                role: string;
                badges: number;
                created: string;
                bio?: string;
            };
            type ThreadMessage = {
                id: string | null;
                author_id: string | null;
                body: MessageBody;
                created: string;
                hide_identity: boolean;
            };
            type Thread = {
                id: string;
                type: ThreadType;
                project_id: string | null;
                report_id: string | null;
                messages: ThreadMessage[];
                members: User[];
            };
            type FlagReason = 'delphi';
            type DelphiSeverity = 'low' | 'medium' | 'high' | 'severe';
            type DelphiReportIssueStatus = 'pending' | 'safe' | 'unsafe';
            type ProjectReportResponse = {
                project_report: ProjectReport | null;
                thread: Thread;
            };
        }
    }
    namespace Pats {
        namespace v2 {
            type PersonalAccessToken = {
                id: string;
                name: string;
                access_token: string | null;
                scopes: number;
                user_id: string;
                created: string;
                expires: string;
                last_used: string | null;
            };
            type CreatePatRequest = {
                scopes: number;
                name: string;
                expires: string;
            };
            type ModifyPatRequest = {
                scopes?: number;
                name?: string;
                expires?: string;
            };
        }
    }
    namespace Sessions {
        namespace v2 {
            type Session = {
                id: string;
                session: string | null;
                user_id: string;
                created: string;
                last_login: string;
                expires: string;
                refresh_expires: string;
                os: string | null;
                platform: string | null;
                user_agent: string;
                city: string | null;
                country: string | null;
                ip: string;
                current: boolean;
            };
        }
    }
}
