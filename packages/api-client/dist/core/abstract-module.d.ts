import { AbstractModrinthClient } from './abstract-client';
export declare abstract class AbstractModule {
    protected client: AbstractModrinthClient;
    constructor(client: AbstractModrinthClient);
    /**
     * Get the module's name, used for error reporting & for module field generation.
     * @returns Module name
     */
    abstract getModuleID(): string;
}
