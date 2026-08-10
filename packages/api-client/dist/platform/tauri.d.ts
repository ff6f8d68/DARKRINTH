import { ModrinthApiError } from '../core/errors';
import { ClientConfig } from '../types/client';
import { RequestOptions } from '../types/request';
import { XHRUploadClient } from './xhr-upload-client';
/**
 * Tauri-specific configuration
 * TODO: extend into interface if needed.
 */
export type TauriClientConfig = ClientConfig;
/**
 * Tauri platform client using Tauri v2 HTTP plugin
 *
 * Extends XHRUploadClient to provide upload with progress tracking.
 *
 * @example
 * ```typescript
 * import { getVersion } from '@tauri-apps/api/app'
 *
 * const client = new TauriModrinthClient({
 *   userAgent: async () => `modrinth/theseus/${await getVersion()} (support@modrinth.com)`,
 *   features: [
 *     new AuthFeature({ token: async () => getOAuthToken() })
 *   ]
 * })
 *
 * const project = await client.request('/project/sodium', { api: 'labrinth', version: 2 })
 * ```
 */
export declare class TauriModrinthClient extends XHRUploadClient {
    protected config: TauriClientConfig;
    constructor(config: TauriClientConfig);
    protected executeRequest<T>(url: string, options: RequestOptions): Promise<T>;
    protected executeStreamRequest(url: string, options: RequestOptions): Promise<ReadableStream<Uint8Array>>;
    protected normalizeError(error: unknown): ModrinthApiError;
}
