import { AbstractModule } from '../../../core/abstract-module';
import { UploadHandle, UploadProgress } from '../../../types/upload';
import { Archon } from '../../archon/types';
import { Kyros } from '../types';
type NodeFsAuth = Pick<Archon.Servers.v0.JWTAuth, 'url' | 'token'>;
export declare class KyrosFilesV0Module extends AbstractModule {
    getModuleID(): string;
    private getNodeBaseUrl;
    /**
     * List directory contents with pagination
     *
     * @param path - Directory path (e.g., "/")
     * @param page - Page number (1-indexed)
     * @param pageSize - Items per page
     * @returns Directory listing with items and pagination info
     */
    listDirectory(path: string, page?: number, pageSize?: number): Promise<Kyros.Files.v0.DirectoryResponse>;
    /**
     * Create a file or directory
     *
     * @param path - Path for new item (e.g., "/new-folder")
     * @param type - Type of item to create
     */
    createFileOrFolder(path: string, type: 'file' | 'directory'): Promise<void>;
    /**
     * Download a file from a server's filesystem
     *
     * @param path - File path (e.g., "/server-icon-original.png")
     * @returns Promise resolving to file Blob
     */
    downloadFile(path: string): Promise<Blob>;
    /**
     * Download a file using explicit filesystem auth credentials.
     *
     * @param auth - Filesystem auth (url + token) from Archon
     * @param path - File path (e.g., "/server-icon.png")
     * @returns Promise resolving to file Blob
     */
    downloadFileWithAuth(auth: NodeFsAuth, path: string): Promise<Blob>;
    /**
     * Upload a file to a server's filesystem with progress tracking
     *
     * @param path - Destination path (e.g., "/server-icon.png")
     * @param file - File to upload
     * @param options - Optional progress callback and feature overrides
     * @returns UploadHandle with promise, onProgress, and cancel
     * @deprecated Use `kyros.upload_sessions_v1` for bulk uploads so cancellation can remove staged files before finalize.
     */
    uploadFile(path: string, file: File | Blob, options?: {
        onProgress?: (progress: UploadProgress) => void;
        retry?: boolean | number;
    }): UploadHandle<void>;
    /**
     * Upload a file using explicit filesystem auth credentials.
     *
     * @param auth - Filesystem auth (url + token) from Archon
     * @param path - Destination path (e.g., "/server-icon.png")
     * @param file - File to upload
     * @param options - Optional progress callback and feature overrides
     * @returns UploadHandle with promise, onProgress, and cancel
     */
    uploadFileWithAuth(auth: NodeFsAuth, path: string, file: File | Blob, options?: {
        onProgress?: (progress: UploadProgress) => void;
        retry?: boolean | number;
    }): UploadHandle<void>;
    /**
     * Update file contents
     *
     * @param path - File path to update
     * @param content - New file content (string or Blob)
     */
    updateFile(path: string, content: string | Blob): Promise<void>;
    /**
     * Move a file or folder to a new location
     *
     * @param sourcePath - Current path
     * @param destPath - New path
     */
    moveFileOrFolder(sourcePath: string, destPath: string): Promise<void>;
    /**
     * Rename a file or folder (convenience wrapper around move)
     *
     * @param path - Current file/folder path
     * @param newName - New name (not full path)
     */
    renameFileOrFolder(path: string, newName: string): Promise<void>;
    /**
     * Delete a file or folder
     *
     * @param path - Path to delete
     * @param recursive - If true, delete directory contents recursively
     */
    deleteFileOrFolder(path: string, recursive: boolean): Promise<void>;
    /**
     * Delete a file or folder using explicit filesystem auth credentials.
     *
     * @param auth - Filesystem auth (url + token) from Archon
     * @param path - Path to delete
     * @param recursive - If true, delete directory contents recursively
     */
    deleteFileOrFolderWithAuth(auth: NodeFsAuth, path: string, recursive: boolean): Promise<void>;
    /**
     * Extract an archive file (zip, tar, etc.)
     *
     * Uses v1 API endpoint.
     *
     * @param path - Path to archive file
     * @param override - If true, overwrite existing files
     * @param dry - If true, perform dry run (returns conflicts without extracting)
     * @returns Extract result with modpack name and conflicting files
     */
    extractFile(path: string, override?: boolean, dry?: boolean): Promise<Kyros.Files.v0.ExtractResult>;
    /**
     * Modify a filesystem operation (dismiss or cancel)
     *
     * Uses v1 API endpoint.
     *
     * @param opId - Operation ID (UUID)
     * @param action - Action to perform
     */
    modifyOperation(opId: string, action: 'dismiss' | 'cancel'): Promise<void>;
}
export {};
