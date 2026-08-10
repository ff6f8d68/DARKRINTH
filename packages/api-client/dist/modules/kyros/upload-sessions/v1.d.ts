import { AbstractModule } from '../../../core/abstract-module';
import { UploadHandle, UploadProgress } from '../../../types/upload';
import { Kyros } from '../types';
export type UploadSessionFile = {
    file: File | Blob;
    filename: string;
};
export declare class KyrosUploadSessionsV1Module extends AbstractModule {
    getModuleID(): string;
    create(scope: Kyros.UploadSessions.v1.Scope, worldId: string): Promise<Kyros.UploadSessions.v1.UploadSessionResponse>;
    get(scope: Kyros.UploadSessions.v1.Scope, worldId: string): Promise<Kyros.UploadSessions.v1.GetUploadSessionResponse>;
    uploadFiles(scope: Kyros.UploadSessions.v1.Scope, worldId: string, uploadId: string, files: UploadSessionFile[], options?: {
        onProgress?: (progress: UploadProgress) => void;
        retry?: boolean | number;
    }): UploadHandle<Kyros.UploadSessions.v1.UploadSessionResponse>;
    finalize(scope: Kyros.UploadSessions.v1.Scope, worldId: string, uploadId: string): Promise<Kyros.UploadSessions.v1.UploadSessionResponse>;
    cancel(scope: Kyros.UploadSessions.v1.Scope, worldId: string, uploadId: string): Promise<Kyros.UploadSessions.v1.UploadSessionResponse>;
}
