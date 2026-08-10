import { AbstractModule } from '../../../core/abstract-module';
import { Labrinth } from '../types';
export declare class LabrinthGlobalsInternalModule extends AbstractModule {
    getModuleID(): string;
    /**
     * Get configured global non-secret variables for this backend instance
     *
     * @returns Promise resolving to the global configuration
     */
    get(): Promise<Labrinth.Globals.Internal.Globals>;
}
