import { ApiErrorData, ModrinthErrorResponse } from '../types/errors';
/**
 * Base error class for all Modrinth API errors
 */
export declare class ModrinthApiError extends Error {
    /**
     * HTTP status code (if available)
     */
    readonly statusCode?: number;
    /**
     * Original error that was caught
     */
    readonly originalError?: Error;
    /**
     * Response data from the API (if available)
     */
    readonly responseData?: unknown;
    /**
     * Error context (e.g., module name, operation being performed)
     */
    readonly context?: string;
    constructor(message: string, data?: ApiErrorData);
    /**
     * Create a ModrinthApiError from an unknown error
     */
    static fromUnknown(error: unknown, context?: string): ModrinthApiError;
}
/**
 * Error class for Modrinth server errors (kyros/archon)
 * Extends ModrinthApiError with V1 error response parsing
 */
export declare class ModrinthServerError extends ModrinthApiError {
    /**
     * V1 error information (if available)
     */
    readonly v1Error?: ModrinthErrorResponse;
    constructor(message: string, data?: ApiErrorData & {
        v1Error?: ModrinthErrorResponse;
    });
    /**
     * Create a ModrinthServerError from response data
     */
    static fromResponse(statusCode: number, responseData: unknown, context?: string): ModrinthServerError;
    /**
     * Create a ModrinthServerError from an unknown error
     */
    static fromUnknown(error: unknown, context?: string): ModrinthServerError;
}
