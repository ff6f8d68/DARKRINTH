import { AbstractModule } from '../../core/abstract-module';
import { LauncherMeta } from './types';
export type { LauncherMeta } from './types';
export declare class LauncherMetaManifestV0Module extends AbstractModule {
    getModuleID(): string;
    /**
     * Get the loader manifest for a given loader platform.
     *
     * launcher-meta refuses CORS preflights that ask for the `Content-Type`
     * header (returns 403), so we strip the default `Content-Type: application/json`
     * the abstract client sets — these are body-less GETs and don't need it.
     * Without this the browser preflight is rejected and the GET never fires.
     *
     * @param loader - Loader platform (fabric, forge, quilt, neo)
     */
    getManifest(loader: string, formatVersion?: number): Promise<LauncherMeta.Manifest.v0.Manifest>;
}
