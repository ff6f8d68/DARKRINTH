import { AbstractModule } from '../../core/abstract-module';
import { ISO3166 } from './types';
export type { ISO3166 } from './types';
/**
 * Module for fetching ISO 3166 country and subdivision data
 * Data from https://github.com/ipregistry/iso3166 (Licensed under CC BY-SA 4.0)
 * @platform Not for use in Tauri or Nuxt environments, only node.
 */
export declare class ISO3166Module extends AbstractModule {
    getModuleID(): string;
    /**
     * Build ISO 3166 country and subdivision data from the ipregistry repository
     *
     * @returns Promise resolving to countries and subdivisions data
     *
     * @example
     * ```typescript
     * const data = await client.iso3166.data.build()
     * console.log(data.countries) // Array of country data
     * console.log(data.subdivisions['US']) // Array of US state data
     * ```
     */
    build(): Promise<ISO3166.State>;
}
