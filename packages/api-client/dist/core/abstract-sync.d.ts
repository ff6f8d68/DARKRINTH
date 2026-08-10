import { default as mitt } from 'mitt';
import { Archon } from '../modules/archon/types';
import { RequestOptions } from '../types/request';
export type SyncEventType = Archon.Sync.v1.SyncEvent['type'];
export type SyncEventOfType<E extends SyncEventType> = Extract<Archon.Sync.v1.SyncEvent, {
    type: E;
}>;
export type SyncEventHandler<E extends Archon.Sync.v1.SyncEvent = Archon.Sync.v1.SyncEvent> = (event: E) => void;
export type SyncStatusState = 'idle' | 'connecting' | 'connected' | 'reconnecting' | 'disconnected' | 'error';
export type SyncStatus = {
    state: SyncStatusState;
    connected: boolean;
    reconnecting: boolean;
    reconnectAttempts: number;
    retryDelay: number;
    lastEventId?: string;
    error?: unknown;
};
export type SyncStatusHandler = (status: SyncStatus) => void;
export type SyncConnectOptions = {
    intent?: Archon.Sync.v1.SyncIntent;
    force?: boolean;
};
export type SyncConnection = {
    serverId: string;
    intent: Archon.Sync.v1.SyncIntent;
    controller?: AbortController;
    reconnectAttempts: number;
    reconnectTimer?: ReturnType<typeof setTimeout>;
    reconnectResolve?: () => void;
    retryDelay: number;
    lastEventId?: string;
    stopped: boolean;
    status: SyncStatusState;
    error?: unknown;
};
export type SyncEmitterEvents = Record<string, unknown>;
export declare abstract class AbstractSyncClient {
    protected client: {
        stream: (path: string, options: RequestOptions) => Promise<ReadableStream<Uint8Array>>;
    };
    protected connections: Map<string, SyncConnection>;
    protected abstract emitter: ReturnType<typeof mitt<SyncEmitterEvents>>;
    constructor(client: {
        stream: (path: string, options: RequestOptions) => Promise<ReadableStream<Uint8Array>>;
    });
    abstract safeConnectServer(serverId: string, options?: SyncConnectOptions): Promise<void>;
    abstract disconnect(serverId: string): void;
    abstract disconnectAll(): void;
    on<E extends SyncEventType>(serverId: string, eventType: E, handler: SyncEventHandler<SyncEventOfType<E>>): () => void;
    onAny(serverId: string, handler: SyncEventHandler): () => void;
    onStatus(serverId: string, handler: SyncStatusHandler): () => void;
    getStatus(serverId: string): SyncStatus | null;
    protected emitSyncEvent(serverId: string, event: Archon.Sync.v1.SyncEvent): void;
    protected updateStatus(connection: SyncConnection, status: SyncStatusState, error?: unknown): void;
    protected clearListeners(serverId: string): void;
    protected connectionToStatus(connection: SyncConnection): SyncStatus;
    private getEventKey;
    private getAnyEventKey;
    private getStatusEventKey;
}
