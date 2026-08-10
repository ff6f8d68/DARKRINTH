export interface WebSocketPingOptions {
    count?: number;
    intervalMs?: number;
    settleDelayMs?: number;
    timeoutMs?: number;
    signal?: AbortSignal;
}
export declare function pingWebSocketUrl(url: string, options?: WebSocketPingOptions): Promise<number>;
