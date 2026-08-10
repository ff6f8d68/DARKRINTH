import { default as mitt } from 'mitt';
import { Archon } from '../modules/archon/types';
export type WebSocketEventHandler<E extends Archon.Websocket.v0.WSEvent = Archon.Websocket.v0.WSEvent> = (event: E) => void;
export interface WebSocketConnection {
    serverId: string;
    socket: WebSocket;
    reconnectAttempts: number;
    reconnectTimer?: ReturnType<typeof setTimeout>;
    isReconnecting: boolean;
}
export interface WebSocketStatus {
    connected: boolean;
    reconnecting: boolean;
    reconnectAttempts: number;
}
type WSEventMap = {
    [K in Archon.Websocket.v0.WSEvent as `${string}:${K['event']}`]: K;
};
export declare abstract class AbstractWebSocketClient {
    protected client: {
        archon: {
            servers_v0: {
                getWebSocketAuth: (serverId: string) => Promise<Archon.Websocket.v0.WSAuth>;
            };
        };
    };
    protected connections: Map<string, WebSocketConnection>;
    protected abstract emitter: ReturnType<typeof mitt<WSEventMap>>;
    protected readonly MAX_RECONNECT_ATTEMPTS = 10;
    protected readonly RECONNECT_BASE_DELAY = 1000;
    protected readonly RECONNECT_MAX_DELAY = 30000;
    constructor(client: {
        archon: {
            servers_v0: {
                getWebSocketAuth: (serverId: string) => Promise<Archon.Websocket.v0.WSAuth>;
            };
        };
    });
    abstract connect(serverId: string, auth: Archon.Websocket.v0.WSAuth): Promise<void>;
    abstract disconnect(serverId: string): void;
    abstract disconnectAll(): void;
    abstract send(serverId: string, message: Archon.Websocket.v0.WSOutgoingMessage): void;
    safeConnect(serverId: string, options?: {
        force?: boolean;
    }): Promise<void>;
    on<E extends Archon.Websocket.v0.WSEventType>(serverId: string, eventType: E, handler: WebSocketEventHandler<Extract<Archon.Websocket.v0.WSEvent, {
        event: E;
    }>>): () => void;
    getStatus(serverId: string): WebSocketStatus | null;
    protected getReconnectDelay(attempt: number): number;
}
export {};
