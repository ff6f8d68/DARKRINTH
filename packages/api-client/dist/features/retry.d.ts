import { AbstractFeature, FeatureConfig } from '../core/abstract-feature';
import { RequestContext } from '../types/request';
/**
 * Backoff strategy for retries
 */
export type BackoffStrategy = 'exponential' | 'linear' | 'constant';
/**
 * Retry feature configuration
 */
export interface RetryConfig extends FeatureConfig {
    /**
     * Maximum number of retry attempts
     * @default 3
     */
    maxAttempts?: number;
    /**
     * Backoff strategy to use
     * @default 'exponential'
     */
    backoffStrategy?: BackoffStrategy;
    /**
     * Initial delay in milliseconds before first retry
     * @default 1000
     */
    initialDelay?: number;
    /**
     * Maximum delay in milliseconds between retries
     * @default 15000
     */
    maxDelay?: number;
    /**
     * HTTP status codes that should trigger a retry
     * @default [408, 429, 500, 502, 503, 504]
     */
    retryableStatusCodes?: number[];
    /**
     * Whether to retry on network errors (connection refused, timeout, etc.)
     * @default true
     */
    retryOnNetworkError?: boolean;
    /**
     * Custom function to determine if an error should be retried
     */
    shouldRetry?: (error: unknown, attempt: number) => boolean;
}
/**
 * Retry feature
 *
 * Automatically retries failed requests with configurable backoff strategy.
 * Only retries errors that are likely to succeed on retry (e.g., timeout, 5xx errors).
 *
 * @example
 * ```typescript
 * const retry = new RetryFeature({
 *   maxAttempts: 3,
 *   backoffStrategy: 'exponential',
 *   initialDelay: 1000,
 *   maxDelay: 15000
 * })
 * ```
 */
export declare class RetryFeature extends AbstractFeature {
    protected config: Required<RetryConfig>;
    constructor(config?: RetryConfig);
    execute<T>(next: () => Promise<T>, context: RequestContext): Promise<T>;
    shouldApply(context: RequestContext): boolean;
    /**
     * Determine if an error should be retried
     */
    private shouldRetryError;
    /**
     * Check if an error is a network error
     */
    private isNetworkError;
    /**
     * Get max attempts for this request
     */
    private getMaxAttempts;
    /**
     * Calculate delay before next retry based on backoff strategy
     */
    private calculateDelay;
    /**
     * Sleep for a given duration
     */
    private sleep;
}
