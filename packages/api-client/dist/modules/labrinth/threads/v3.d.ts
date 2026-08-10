import { AbstractModule } from '../../../core/abstract-module';
import { Labrinth } from '../types';
export declare class LabrinthThreadsV3Module extends AbstractModule {
    getModuleID(): string;
    /**
     * Get a thread by ID (v3)
     *
     * @param id - Thread ID
     * @returns Promise resolving to the thread data
     *
     * @example
     * ```typescript
     * const thread = await client.labrinth.threads_v3.getThread('abc123')
     * console.log(thread.messages)
     * ```
     */
    getThread(id: string): Promise<Labrinth.Threads.v3.Thread>;
    /**
     * Get multiple threads by IDs (v3)
     *
     * @param ids - Array of thread IDs
     * @returns Promise resolving to an array of threads
     *
     * @example
     * ```typescript
     * const threads = await client.labrinth.threads_v3.getMultiple(['id1', 'id2'])
     * ```
     */
    getMultiple(ids: string[]): Promise<Labrinth.Threads.v3.Thread[]>;
    /**
     * Send a message to a thread (v3)
     *
     * @param id - Thread ID
     * @param message - Message body to send
     * @returns Promise resolving when message is sent
     *
     * @example
     * ```typescript
     * await client.labrinth.threads_v3.sendMessage('abc123', {
     *   body: { type: 'text', body: 'Hello!' }
     * })
     * ```
     */
    sendMessage(id: string, message: Labrinth.Threads.v3.SendMessageRequest): Promise<void>;
    /**
     * Delete a message from a thread (v3)
     *
     * @param messageId - Message ID
     * @returns Promise resolving when message is deleted
     *
     * @example
     * ```typescript
     * await client.labrinth.threads_v3.deleteMessage('msg123')
     * ```
     */
    deleteMessage(messageId: string): Promise<void>;
}
