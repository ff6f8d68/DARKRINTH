import { InferredClientModules } from '../modules';
import { BaseUrlConfig, ClientConfig } from '../types/client';
import { RequestContext, RequestOptions } from '../types/request';
import { UploadProgress, UploadRequestOptions } from '../types/upload';
import { AbstractFeature } from './abstract-feature';
import { AbstractSyncClient } from './abstract-sync';
import { AbstractUploadClient } from './abstract-upload-client';
import { AbstractWebSocketClient } from './abstract-websocket';
import { ModrinthApiError } from './errors';
type ArchonClientModules = Omit<InferredClientModules['archon'], 'backups_v1'> & {
    /** @deprecated Use `backups_queue_v1` for the Backups Queue API. */
    backups_v1: InferredClientModules['archon']['backups_v1'];
};
/**
 * Abstract base client for Modrinth APIs
 */
export declare abstract class AbstractModrinthClient extends AbstractUploadClient {
    protected config: ClientConfig;
    protected features: AbstractFeature[];
    /**
     * Maps full module ID (e.g., 'labrinth_projects_v2') to instantiated module
     */
    private _moduleInstances;
    /**
     * Maps API name (e.g., 'labrinth') to namespace object
     */
    private _moduleNamespaces;
    readonly labrinth: InferredClientModules['labrinth'];
    readonly archon: ArchonClientModules & {
        sockets: AbstractWebSocketClient;
        sync: AbstractSyncClient;
    };
    readonly kyros: InferredClientModules['kyros'];
    readonly iso3166: InferredClientModules['iso3166'];
    readonly mclogs: InferredClientModules['mclogs'];
    readonly launchermeta: InferredClientModules['launchermeta'];
    readonly paper: InferredClientModules['paper'];
    readonly purpur: InferredClientModules['purpur'];
    readonly sharedinstances: InferredClientModules['sharedinstances'];
    constructor(config: ClientConfig);
    /**
     * This creates the nested API structure (e.g., client.labrinth.projects_v2)
     * but doesn't instantiate modules until first access
     *
     * Module IDs in the registry are validated at runtime to ensure they match
     * what the module declares via getModuleID().
     */
    private initializeModules;
    /**
     * Make a request to the API
     *
     * @param path - API path (e.g., '/project/sodium')
     * @param options - Request options
     * @returns Promise resolving to the response data
     * @throws {ModrinthApiError} When the request fails or features throw errors
     */
    request<T>(path: string, options: RequestOptions): Promise<T>;
    stream(path: string, options: RequestOptions): Promise<ReadableStream<Uint8Array>>;
    /**
     * Execute the feature chain and the actual request
     *
     * Features are executed in order, with each feature calling next() to continue.
     * The last "feature" in the chain is the actual request execution.
     */
    protected executeFeatureChain<T>(context: RequestContext, executeTerminal?: () => Promise<T>): Promise<T>;
    /**
     * Execute the feature chain for an upload
     *
     * Similar to executeFeatureChain but calls executeXHRUpload at the end.
     * This allows features (auth, retry, etc.) to wrap the upload execution.
     */
    protected executeUploadFeatureChain<T>(context: RequestContext, progressCallbacks: Array<(p: UploadProgress) => void>, abortController: AbortController): Promise<T>;
    /**
     * Build the full URL for a request
     */
    protected buildUrl(path: string, baseUrl: string, version: number | 'internal' | string): string;
    protected resolveBaseUrl(baseUrl: BaseUrlConfig): string;
    /**
     * Build the request context
     */
    protected buildContext(url: string, path: string, options: RequestOptions): RequestContext;
    /**
     * Build context for an upload request
     *
     * Sets metadata.isUpload = true so features can detect uploads.
     * Supports both single file uploads and FormData uploads.
     */
    protected buildUploadContext(url: string, path: string, options: UploadRequestOptions): RequestContext;
    /**
     * Build default headers for all requests
     *
     * Subclasses can override this to add platform-specific headers
     * (e.g., Nuxt rate limit key)
     */
    protected buildDefaultHeaders(): Promise<Record<string, string>>;
    private resolveUserAgent;
    protected attachArchonSentryCaptureHeader(options: RequestOptions): void;
    private shouldCaptureArchonRequests;
    /**
     * Execute the actual HTTP request
     *
     * This must be implemented by platform-specific clients.
     *
     * @param url - Full URL to request
     * @param options - Request options
     * @returns Promise resolving to the response data
     * @throws {Error} Platform-specific errors that will be normalized by normalizeError()
     */
    protected abstract executeRequest<T>(url: string, options: RequestOptions): Promise<T>;
    protected abstract executeStreamRequest(url: string, options: RequestOptions): Promise<ReadableStream<Uint8Array>>;
    /**
     * Execute the actual XHR upload
     *
     * This must be implemented by platform clients that support uploads.
     * Called at the end of the upload feature chain.
     *
     * @param context - Request context with upload metadata
     * @param progressCallbacks - Callbacks to invoke on progress events
     * @param abortController - Controller for cancellation
     * @returns Promise resolving to the response data
     */
    protected abstract executeXHRUpload<T>(context: RequestContext, progressCallbacks: Array<(p: UploadProgress) => void>, abortController: AbortController): Promise<T>;
    /**
     * Normalize an error into a ModrinthApiError
     *
     * Platform implementations should override this to handle platform-specific errors
     * (e.g., FetchError from ofetch, Tauri HTTP errors)
     */
    protected normalizeError(error: unknown, context?: RequestContext): ModrinthApiError;
    /**
     * Helper to create a normalized error from extracted status code and response data
     */
    protected createNormalizedError(error: Error, statusCode: number | undefined, responseData: unknown): ModrinthApiError;
    /**
     * Add a feature to this client
     *
     * Features are executed in the order they are added.
     *
     * @example
     * ```typescript
     * const client = new GenericModrinthClient()
     * client.addFeature(new AuthFeature({ token: async () => getOAuthToken() }))
     * client.addFeature(new RetryFeature({ maxAttempts: 3 }))
     * ```
     */
    addFeature(feature: AbstractFeature): this;
    /**
     * Remove a feature from this client
     *
     * @example
     * ```typescript
     * const retryFeature = new RetryFeature({ maxAttempts: 3 })
     * client.addFeature(retryFeature)
     * // Later, remove it
     * client.removeFeature(retryFeature)
     * ```
     */
    removeFeature(feature: AbstractFeature): this;
    /**
     * Get all features on this client
     */
    getFeatures(): AbstractFeature[];
}
export {};
