import { ModrinthApiError } from '../core/errors';
import { ClientConfig } from '../types/client';
import { RequestOptions } from '../types/request';
import { XHRUploadClient } from './xhr-upload-client';
/**
 * Generic platform client using ofetch
 *
 * This client works in any JavaScript environment (Node.js, browser, workers, etc).
 *
 * @example
 * ```typescript
 * const client = new GenericModrinthClient({
 *   userAgent: 'my-app/1.0.0',
 *   features: [
 *     new AuthFeature({ token: async () => getOAuthToken() }),
 *     new RetryFeature({ maxAttempts: 3 })
 *   ]
 * })
 *
 * const project = await client.request('/project/sodium', { api: 'labrinth', version: 2 })
 * ```
 */
export declare class GenericModrinthClient extends XHRUploadClient {
    constructor(config: ClientConfig);
    protected executeRequest<T>(url: string, options: RequestOptions): Promise<T>;
    protected executeStreamRequest(url: string, options: RequestOptions): Promise<ReadableStream<Uint8Array>>;
    protected normalizeError(error: unknown): ModrinthApiError;
}
