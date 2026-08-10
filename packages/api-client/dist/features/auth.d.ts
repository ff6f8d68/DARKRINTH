import { AbstractFeature, FeatureConfig } from '../core/abstract-feature';
import { RequestContext } from '../types/request';
/**
 * Authentication feature configuration
 */
export interface AuthConfig extends FeatureConfig {
    /**
     * Authentication token
     * - string: static token
     * - function: async function that returns token (useful for dynamic tokens)
     */
    token: string | (() => Promise<string | undefined>);
    /**
     * Token prefix (e.g., 'Bearer', 'Token')
     * @default 'Bearer'
     */
    tokenPrefix?: string;
    /**
     * Custom header name for the token
     * @default 'Authorization'
     */
    headerName?: string;
}
/**
 * Authentication feature
 *
 * Automatically injects authentication tokens into request headers.
 * Supports both static tokens and dynamic token providers.
 *
 * @example
 * ```typescript
 * const auth = new AuthFeature({
 *   token: async () => process.env.MODRINTH_TOKEN
 * })
 * ```
 */
export declare class AuthFeature extends AbstractFeature {
    protected config: AuthConfig;
    execute<T>(next: () => Promise<T>, context: RequestContext): Promise<T>;
    shouldApply(context: RequestContext): boolean;
    /**
     * Get the authentication token
     *
     * Handles both static tokens and async token providers
     */
    private getToken;
}
