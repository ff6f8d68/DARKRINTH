import { RequestOptions } from '../types/request';
export declare function appendRequestParams(url: string, params?: RequestOptions['params']): string;
export declare function toFetchBody(body: unknown): BodyInit | null | undefined;
export declare function parseResponseErrorData(response: Response): Promise<unknown>;
