import { AbstractModule } from '../../core/abstract-module';
import { Paper } from './types';
export type { Paper } from './types';
export declare class PaperVersionsV3Module extends AbstractModule {
    getModuleID(): string;
    /**
     * Get the Paper project info including all supported Minecraft versions.
     */
    getProject(): Promise<Paper.Versions.v3.Project>;
    /**
     * Get available Paper builds for a Minecraft version (includes channel per build).
     *
     * Fill (`fill.papermc.io`) returns a JSON array of builds at this path — not a `{ builds }`
     * wrapper like some other Paper API shapes — so we normalize to `VersionBuilds`.
     *
     * @param mcVersion - Minecraft version (e.g. "1.21.4")
     */
    getBuilds(mcVersion: string): Promise<Paper.Versions.v3.VersionBuilds>;
}
