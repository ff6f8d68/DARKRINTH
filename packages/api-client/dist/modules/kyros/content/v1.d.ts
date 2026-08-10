import { AbstractModule } from '../../../core/abstract-module';
import { UploadHandle, UploadProgress } from '../../../types/upload';
import { Archon } from '../../archon/types';
export declare class KyrosContentV1Module extends AbstractModule {
    getModuleID(): string;
    /**
     * Upload addon files to a world via multipart form data
     *
     * @param worldId - World UUID
     * @param files - Files to upload as addons
     * @param options - Optional progress callback
     * @returns UploadHandle with promise, onProgress, and cancel
     * @deprecated Use `kyros.upload_sessions_v1` so cancellation can remove staged addon files before finalize.
     */
    uploadAddonFile(worldId: string, files: (File | Blob)[], options?: {
        onProgress?: (progress: UploadProgress) => void;
    }): UploadHandle<void>;
    /** POST /v1/worlds/:world_id/content/upload-modpack-file */
    uploadModpackFile(worldId: string, file: File | Blob, properties: Archon.Content.v1.PropertiesFields, options?: {
        softOverride?: boolean;
        onProgress?: (progress: UploadProgress) => void;
    }): UploadHandle<void>;
}
