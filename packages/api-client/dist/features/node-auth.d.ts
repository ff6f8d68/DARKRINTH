import { AbstractFeature, FeatureConfig } from '../core/abstract-feature';
import { RequestContext } from '../types/request';
/**
 * Node authentication credentials
 */
export interface NodeAuth {
    /** Node instance URL (e.g., "node-xyz.modrinth.com/modrinth/v0/fs") */
    url: string;
    /** Base URL without path suffix (e.g., "node-xyz.modrinth.com") — used when available */
    baseUrl?: string;
    /** JWT token */
    token: string;
}
export interface NodeAuthConfig extends FeatureConfig {
    /**
     * Get current node auth. Returns null if not authenticated.
     */
    getAuth: () => NodeAuth | null;
    /**
     * Refresh the node authentication token.
     */
    refreshAuth: () => Promise<void>;
}
/**
 * Handles authentication for Kyros node fs requests:
 * - Automatically injects Authorization header
 * - Builds the correct URL from node instance
 * - Handles 401 errors by refreshing and retrying (max 3 times)
 *
 * Only applies to requests with `useNodeAuth: true` in options.
 *
 * @example
 * ```typescript
 * const nodeAuth = new NodeAuthFeature({
 *   getAuth: () => nodeAuthState.getAuth?.() ?? null,
 *   refreshAuth: async () => {
 *     if (nodeAuthState.refreshAuth) {
 *       await nodeAuthState.refreshAuth()
 *     }
 *   },
 * })
 * client.addFeature(nodeAuth)
 * ```
 */
export declare class NodeAuthFeature extends AbstractFeature {
    protected config: NodeAuthConfig;
    private refreshPromise;
    shouldApply(context: RequestContext): boolean;
    private refreshAuthWithLock;
    execute<T>(next: () => Promise<T>, context: RequestContext): Promise<T>;
    private applyAuth;
    private buildUrl;
    /**
     * Check if a JWT token is expired or about to expire
     * Refreshes proactively if expiring within next 10 seconds
     */
    private isTokenExpired;
}
