import { AbstractFeature, FeatureConfig } from '../core/abstract-feature';
import { RequestContext } from '../types/request';
/**
 * Circuit breaker state
 */
export type CircuitBreakerState = {
    /**
     * Number of consecutive failures
     */
    failures: number;
    /**
     * Timestamp of last failure
     */
    lastFailure: number;
};
/**
 * Circuit breaker storage interface
 */
export interface CircuitBreakerStorage {
    /**
     * Get circuit breaker state for a key
     */
    get(key: string): CircuitBreakerState | undefined;
    /**
     * Set circuit breaker state for a key
     */
    set(key: string, state: CircuitBreakerState): void;
    /**
     * Clear circuit breaker state for a key
     */
    clear?(key: string): void;
}
/**
 * Circuit breaker feature configuration
 */
export interface CircuitBreakerConfig extends FeatureConfig {
    /**
     * Maximum number of consecutive failures before opening circuit
     * @default 3
     */
    maxFailures?: number;
    /**
     * Time in milliseconds before circuit resets after opening
     * @default 30000
     */
    resetTimeout?: number;
    /**
     * HTTP status codes that count as failures
     * @default [500, 502, 503, 504]
     */
    failureStatusCodes?: number[];
    /**
     * Storage implementation for circuit state
     * If not provided, uses in-memory Map
     */
    storage?: CircuitBreakerStorage;
    /**
     * Function to generate circuit key from request context
     * By default, uses the base path (without query params)
     */
    getCircuitKey?: (url: string, method: string) => string;
}
/**
 * In-memory storage for circuit breaker state
 */
export declare class InMemoryCircuitBreakerStorage implements CircuitBreakerStorage {
    private state;
    get(key: string): CircuitBreakerState | undefined;
    set(key: string, state: CircuitBreakerState): void;
    clear(key: string): void;
}
/**
 * Circuit breaker feature
 *
 * Prevents requests to failing endpoints by "opening the circuit" after
 * a threshold of consecutive failures. The circuit automatically resets
 * after a timeout period.
 *
 * This implements the circuit breaker pattern to prevent cascading failures
 * and give failing services time to recover.
 *
 * @example
 * ```typescript
 * const circuitBreaker = new CircuitBreakerFeature({
 *   maxFailures: 3,
 *   resetTimeout: 30000, // 30 seconds
 *   failureStatusCodes: [500, 502, 503, 504]
 * })
 * ```
 */
export declare class CircuitBreakerFeature extends AbstractFeature {
    protected config: Required<CircuitBreakerConfig>;
    private storage;
    constructor(config?: CircuitBreakerConfig);
    execute<T>(next: () => Promise<T>, context: RequestContext): Promise<T>;
    shouldApply(context: RequestContext): boolean;
    /**
     * Get the circuit key for a request
     *
     * By default, uses the path and method to identify unique circuits
     */
    private getCircuitKey;
    /**
     * Check if the circuit is open for a given key
     */
    private isCircuitOpen;
    /**
     * Record a successful request
     */
    private recordSuccess;
    /**
     * Record a failed request
     */
    private recordFailure;
    /**
     * Determine if an error should count as a circuit failure
     */
    private isFailureError;
    /**
     * Get current circuit state for debugging
     *
     * @example
     * ```typescript
     * const state = circuitBreaker.getCircuitState('GET_/v2/project/sodium')
     * console.log(`Failures: ${state?.failures}, Last failure: ${state?.lastFailure}`)
     * ```
     */
    getCircuitState(key: string): CircuitBreakerState | undefined;
    /**
     * Manually reset a circuit
     *
     * @example
     * ```typescript
     * // Reset circuit after manual intervention
     * circuitBreaker.resetCircuit('GET_/v2/project/sodium')
     * ```
     */
    resetCircuit(key: string): void;
}
