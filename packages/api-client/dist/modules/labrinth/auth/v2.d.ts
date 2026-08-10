import { AbstractModule } from '../../../core/abstract-module';
import { Labrinth } from '../types';
export declare class LabrinthAuthV2Module extends AbstractModule {
    getModuleID(): string;
    /**
     * Log in with a password
     *
     * Returns a session token on success, or a flow ID if 2FA is required.
     *
     * @param data - Login credentials and captcha challenge
     * @returns Promise resolving to a login response with session or flow
     */
    login(data: Labrinth.Auth.v2.LoginRequest): Promise<Labrinth.Auth.v2.LoginResponse>;
    /**
     * Complete a 2FA login flow
     *
     * @param data - The 2FA code and flow ID
     * @returns Promise resolving to a session response
     */
    login2FA(data: Labrinth.Auth.v2.Login2FARequest): Promise<Labrinth.Auth.v2.Login2FAResponse>;
    /**
     * Create a new account with a password
     *
     * @param data - Account creation data
     * @returns Promise resolving to a session response
     */
    createAccount(data: Labrinth.Auth.v2.CreateAccountRequest): Promise<Labrinth.Auth.v2.CreateAccountResponse>;
    /**
     * Validate email/password inputs for account creation without creating an account.
     *
     * @param data - Prospective account credentials
     */
    validateCreateAccount(data: Labrinth.Auth.v2.ValidateCreateAccountRequest): Promise<void>;
    /**
     * Create a new account from an OAuth callback flow state
     *
     * @param data - OAuth account creation data
     * @returns Promise resolving to a session response
     */
    createOAuthAccount(data: Labrinth.Auth.v2.CreateOAuthAccountRequest): Promise<Labrinth.Auth.v2.CreateOAuthAccountResponse>;
    /**
     * Begin a password reset flow by sending a recovery email
     *
     * @param data - The username/email and captcha challenge
     */
    resetPasswordBegin(data: Labrinth.Auth.v2.ResetPasswordRequest): Promise<void>;
    /**
     * Change a user's password (via reset flow or with old password)
     *
     * @param data - The password change data
     */
    changePassword(data: Labrinth.Auth.v2.ChangePasswordRequest): Promise<void>;
    /**
     * List the current user's registered passkeys
     *
     * @returns A promise that resolves to a list of the user's registered passkeys
     */
    listPasskeys(): Promise<Labrinth.Auth.v2.Passkey[]>;
    /**
     * Begin registering a new passkey, returning the WebAuthn creation options and a flow
     *
     * @returns A promise that resolves to the WebAuthn creation options and flow
     */
    registerPasskeyStart(): Promise<Labrinth.Auth.v2.PasskeyRegisterStartResponse>;
    /**
     * Complete passkey registration with the created credential
     *
     * @param data The credential data and flow to complete registration with
     * @returns A promise that resolves to the newly registered passkey
     */
    registerPasskeyFinish(data: Labrinth.Auth.v2.PasskeyRegisterFinishRequest): Promise<Labrinth.Auth.v2.Passkey>;
    /**
     * Begin a passkey authentication flow, returning the WebAuthn request options and a flow
     *
     * @returns A promise that resolves to the WebAuthn request options and a flow
     */
    authenticatePasskeyStart(): Promise<Labrinth.Auth.v2.PasskeyAuthenticateStartResponse>;
    /**
     * Complete a passkey authentication flow, returning the new session
     *
     * @param data The credential data and flow to complete authentication with
     * @returns A promise that resolves to the new session
     */
    authenticatePasskeyFinish(data: Labrinth.Auth.v2.PasskeyAuthenticateFinishRequest): Promise<Labrinth.Sessions.v2.Session>;
    /**
     * Rename a passkey
     *
     * @param id The ID of the passkey to rename
     * @param data The new name for the passkey
     */
    renamePasskey(id: string, data: Labrinth.Auth.v2.PasskeyRenameRequest): Promise<void>;
    /**
     * Delete a passkey
     *
     * @param id The ID of the passkey to delete
     */
    deletePasskey(id: string): Promise<void>;
}
