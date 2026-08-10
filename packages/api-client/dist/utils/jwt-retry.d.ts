/**
 * Wrap a function with JWT retry logic.
 * On 401, calls refreshToken() and retries once.
 */
export declare function withJWTRetry<T>(fn: () => Promise<T>, refreshToken: () => Promise<void>): Promise<T>;
