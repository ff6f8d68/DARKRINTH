import { AbstractModule } from '../../../core/abstract-module';
import { Labrinth } from '../types';
export declare class LabrinthTagsV2Module extends AbstractModule {
    getModuleID(): string;
    /**
     * Get license text by SPDX identifier
     *
     * @param licenseId - SPDX license identifier (e.g., 'MIT', 'Apache-2.0')
     * @returns Promise resolving to the license title and body text
     *
     * @example
     * ```typescript
     * const license = await client.labrinth.tags_v2.getLicenseText('MIT')
     * console.log(license.title) // "MIT License"
     * console.log(license.body)  // full license text
     * ```
     */
    getLicenseText(licenseId: string): Promise<Labrinth.Tags.v2.LicenseText>;
}
