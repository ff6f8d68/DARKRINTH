import { ModrinthApiError } from '../core/errors';
import { CircuitBreakerState, CircuitBreakerStorage } from '../features/circuit-breaker';
import { ClientConfig } from '../types/client';
import { RequestOptions } from '../types/request';
import { UploadHandle, UploadRequestOptions } from '../types/upload';
import { XHRUploadClient } from './xhr-upload-client';
/**
 * Circuit breaker storage using Nuxt's useState
 *
 * This provides cross-request persistence in SSR while also working in client-side.
 * State is shared between requests in the same Nuxt context.
 *
 * Note: useState must be called during initialization (in setup context) and cached,
 * as it won't work during async operations when the Nuxt context may be lost.
 */
export declare class NuxtCircuitBreakerStorage implements CircuitBreakerStorage {
    private state;
    constructor();
    get(key: string): CircuitBreakerState | undefined;
    set(key: string, state: CircuitBreakerState): void;
    clear(key: string): void;
}
/**
 * Nuxt-specific configuration
 */
export interface NuxtClientConfig extends ClientConfig {
    /**
     * Rate limit key for server-side requests.
     * This is injected as x-ratelimit-key header on server-side.
     * Can be a string (for env var) or async function (for CF Secrets Store).
     */
    rateLimitKey?: string | (() => Promise<string | undefined>);
}
/**
 * Nuxt platform client using Nuxt's $fetch
 *
 * This client is optimized for Nuxt applications and handles SSR/CSR automatically.
 *
 * Note: upload() is only available in browser context (CSR). It will throw during SSR.
 *
 * @example
 * ```typescript
 * // In a Nuxt composable
 * const config = useRuntimeConfig()
 *
 * const client = new NuxtModrinthClient({
 *   userAgent: 'my-nuxt-app/1.0.0',
 *   rateLimitKey: import.meta.server ? config.rateLimitKey : undefined,
 *   features: [
 *     new AuthFeature({
 *       token: async () => getOAuthToken()
 *     }),
 *     new CircuitBreakerFeature({
 *       storage: new NuxtCircuitBreakerStorage()
 *     })
 *   ]
 * })
 *
 * const project = await client.request('/project/sodium', { api: 'labrinth', version: 2 })
 * ```
 */
export declare class NuxtModrinthClient extends XHRUploadClient {
    protected config: NuxtClientConfig;
    private rateLimitKeyResolved;
    private rateLimitKeyPromise;
    constructor(config: NuxtClientConfig);
    /**
     * Resolve the rate limit key, handling both string and async function values.
     * Results are cached for subsequent calls.
     */
    private resolveRateLimitKey;
    /**
     * Override request to resolve rate limit key before calling super.
     * This allows async fetching of the key from CF Secrets Store.
     */
    request<T>(path: string, options: RequestOptions): Promise<T>;
    /**
     * Upload a file with progress tracking
     *
     * Note: This method is only available in browser context (CSR).
     * Calling during SSR will throw an error.
     */
    upload<T = void>(path: string, options: UploadRequestOptions): UploadHandle<T>;
    protected executeRequest<T>(url: string, options: RequestOptions): Promise<T>;
    protected executeStreamRequest(url: string, options: RequestOptions): Promise<ReadableStream<Uint8Array>>;
    protected normalizeError(error: unknown): ModrinthApiError;
    protected buildDefaultHeaders(): Promise<Record<string, string>>;
}
