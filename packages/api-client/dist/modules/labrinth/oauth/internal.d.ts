import { AbstractModule } from '../../../core/abstract-module';
import { Labrinth } from '../types';
export declare class LabrinthOAuthInternalModule extends AbstractModule {
    getModuleID(): string;
    /**
     * Get a user's OAuth applications
     *
     * @param userId - The user's ID
     * @returns Promise resolving to an array of the user's OAuth clients
     */
    getUserApps(userId: string): Promise<Labrinth.OAuth.Internal.OAuthClient[]>;
    /**
     * Get a single OAuth application by ID
     *
     * @param id - The OAuth client ID
     * @returns Promise resolving to the OAuth client
     */
    getApp(id: string): Promise<Labrinth.OAuth.Internal.OAuthClient>;
    /**
     * Get multiple OAuth applications by their IDs
     *
     * @param ids - Array of OAuth client IDs
     * @returns Promise resolving to an array of OAuth clients
     */
    getApps(ids: string[]): Promise<Labrinth.OAuth.Internal.OAuthClient[]>;
    /**
     * Create a new OAuth application
     *
     * @param data - The OAuth app creation data
     * @returns Promise resolving to the created OAuth client with its client secret
     */
    createApp(data: Labrinth.OAuth.Internal.CreateOAuthAppRequest): Promise<Labrinth.OAuth.Internal.OAuthClientCreationResult>;
    /**
     * Edit an existing OAuth application
     *
     * @param id - The OAuth client ID
     * @param data - The fields to update
     */
    editApp(id: string, data: Labrinth.OAuth.Internal.EditOAuthAppRequest): Promise<void>;
    /**
     * Delete an OAuth application
     *
     * @param id - The OAuth client ID
     */
    deleteApp(id: string): Promise<void>;
    /**
     * Update the icon for an OAuth application
     *
     * @param id - The OAuth client ID
     * @param file - The icon file
     * @param ext - The file extension (e.g. 'png', 'jpeg')
     */
    uploadAppIcon(id: string, file: File | Blob, ext: string): Promise<void>;
    /**
     * Get the current user's OAuth authorizations
     *
     * @returns Promise resolving to an array of OAuth client authorizations
     */
    getAuthorizations(): Promise<Labrinth.OAuth.Internal.OAuthClientAuthorization[]>;
    /**
     * Revoke an OAuth authorization for a client
     *
     * @param clientId - The OAuth client ID to revoke
     */
    revokeAuthorization(clientId: string): Promise<void>;
    /**
     * Initialize an OAuth authorization flow
     *
     * Returns either an OAuthClientAccessRequest (if user needs to approve)
     * or a redirect URL string (if already authorized).
     *
     * @param params - The OAuth query parameters
     * @returns Promise resolving to an access request object or redirect URL string
     */
    authorize(params: {
        client_id: string;
        redirect_uri: string;
        scope: string;
        state?: string;
    }): Promise<Labrinth.OAuth.Internal.OAuthClientAccessRequest | string>;
    /**
     * Accept an OAuth authorization request
     *
     * @param data - The flow ID to accept
     * @returns Promise resolving to a redirect URL string
     */
    accept(data: Labrinth.OAuth.Internal.AcceptRejectRequest): Promise<string>;
    /**
     * Reject an OAuth authorization request
     *
     * @param data - The flow ID to reject
     * @returns Promise resolving to a redirect URL string
     */
    reject(data: Labrinth.OAuth.Internal.AcceptRejectRequest): Promise<string>;
}
