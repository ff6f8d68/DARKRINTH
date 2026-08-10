import { AbstractModrinthClient } from '../core/abstract-client';
import { ModrinthApiError } from '../core/errors';
import { RequestContext } from '../types/request';
import { UploadHandle, UploadProgress, UploadRequestOptions } from '../types/upload';
/**
 * Abstract client with XHR-based upload implementation
 *
 * Platform-specific clients should extend this instead of AbstractModrinthClient
 * to inherit the XHR upload implementation.
 */
export declare abstract class XHRUploadClient extends AbstractModrinthClient {
    upload<T = void>(path: string, options: UploadRequestOptions): UploadHandle<T>;
    protected executeXHRUpload<T>(context: RequestContext, progressCallbacks: Array<(p: UploadProgress) => void>, abortController: AbortController): Promise<T>;
    protected createUploadError(xhr: XMLHttpRequest): ModrinthApiError;
}
