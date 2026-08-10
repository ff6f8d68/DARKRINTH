import { Archon } from '../modules/archon/types';
export type ParsedSseEvent = {
    kind: 'event';
    id?: string;
    event?: string;
    data: string;
};
export type ParsedSseRetry = {
    kind: 'retry';
    retry: number;
};
export type ParsedSseItem = ParsedSseEvent | ParsedSseRetry;
export declare class SseParser {
    private buffer;
    private eventName;
    private data;
    private id;
    feed(chunk: string): ParsedSseItem[];
    end(): ParsedSseItem[];
    private findLineEnd;
    private processLine;
    private dispatch;
}
export declare function parseSyncEventData(data: string): Archon.Sync.v1.SyncEvent | null;
