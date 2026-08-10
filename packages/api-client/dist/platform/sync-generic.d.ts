import { AbstractSyncClient, SyncConnectOptions, SyncEmitterEvents } from '../core/abstract-sync';
import { Emitter } from 'mitt';
export declare class GenericSyncClient extends AbstractSyncClient {
    protected emitter: Emitter<SyncEmitterEvents>;
    safeConnectServer(serverId: string, options?: SyncConnectOptions): Promise<void>;
    disconnect(serverId: string): void;
    disconnectAll(): void;
    private runConnection;
    private consumeStream;
    private processParsedItems;
    private waitForReconnect;
    private closeConnection;
    private getReconnectDelay;
    private updateLastEventId;
    private intentToParam;
    private isAbortError;
}
