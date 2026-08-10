import { NodeAuth } from '../features/node-auth';
/**
 * Global node auth state.
 * Set by server management pages, read by NodeAuthFeature.
 */
export declare const nodeAuthState: {
    getAuth: (() => NodeAuth | null) | null;
    refreshAuth: (() => Promise<void>) | null;
};
/**
 * Configure the node auth state. Call this when entering server management.
 *
 * @param getAuth - Function that returns current auth or null
 * @param refreshAuth - Function to refresh the auth token
 *
 * @example
 * ```typescript
 * // In server management page setup
 * setNodeAuthState(
 *   () => fsAuth.value,
 *   refreshFsAuth,
 * )
 * ```
 */
export declare function setNodeAuthState(getAuth: () => NodeAuth | null, refreshAuth: () => Promise<void>): void;
/**
 * Clear the node auth state. Call this when leaving server management.
 *
 * @example
 * ```typescript
 * onUnmounted(() => {
 *   clearNodeAuthState()
 * })
 * ```
 */
export declare function clearNodeAuthState(): void;
