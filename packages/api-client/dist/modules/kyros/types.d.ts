export declare namespace Kyros {
    namespace UploadSessions {
        namespace v1 {
            type Scope = 'content' | 'files';
            type UploadSessionStatus = 'active' | 'uploading' | 'finalizing' | 'cancelled' | 'finalized' | 'expired';
            interface UploadSessionResponse {
                upload_id: string;
                status: UploadSessionStatus;
                created_at: number;
                updated_at: number;
                last_upload_at: number | null;
                expires_at: number;
                entry_count: number;
                uploaded_byte_count: number;
            }
            interface GetUploadSessionResponse {
                session: UploadSessionResponse | null;
            }
        }
    }
    namespace Files {
        namespace v0 {
            interface DirectoryItem {
                name: string;
                type: 'file' | 'directory' | 'symlink';
                path: string;
                modified: number;
                created: number;
                size?: number;
                count?: number;
                target?: string;
            }
            interface DirectoryResponse {
                items: DirectoryItem[];
                total: number;
                current: number;
            }
            interface ExtractResult {
                modpack_name: string | null;
                conflicting_files: string[];
            }
        }
    }
}
