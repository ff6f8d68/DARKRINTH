import { AbstractWebSocketClient } from '../core/abstract-websocket';
import { Archon } from '../modules/archon/types';
import { Emitter } from 'mitt';
type WSEventMap = {
    [K in Archon.Websocket.v0.WSEvent as `${string}:${K['event']}`]: K;
};
export declare class GenericWebSocketClient extends AbstractWebSocketClient {
    protected emitter: Emitter<WSEventMap>;
    connect(serverId: string, auth: Archon.Websocket.v0.WSAuth): Promise<void>;
    disconnect(serverId: string): void;
    private closeConnection;
    disconnectAll(): void;
    send(serverId: string, message: Archon.Websocket.v0.WSOutgoingMessage): void;
    private scheduleReconnect;
    private handleAuthExpiring;
}
export {};
