import { AbstractModule } from '../../core/abstract-module';
import { Purpur } from './types';
export type { Purpur } from './types';
export declare class PurpurVersionsV2Module extends AbstractModule {
    getModuleID(): string;
    /**
     * Get the Purpur project info including all supported Minecraft versions.
     */
    getProject(): Promise<Purpur.Versions.v2.Project>;
    /**
     * Get available Purpur builds for a Minecraft version.
     *
     * @param mcVersion - Minecraft version (e.g. "1.21.4")
     */
    getBuilds(mcVersion: string): Promise<Purpur.Versions.v2.VersionBuilds>;
}
