import { AbstractModule } from '../../../core/abstract-module';
import { SharedInstances } from '../types';
export declare class SharedInstancesModerationV1Module extends AbstractModule {
    getModuleID(): string;
    blacklistUsers(request: SharedInstances.Moderation.v1.BlacklistUserRequest): Promise<void>;
    unblacklistUsers(request: SharedInstances.Moderation.v1.BlacklistUserRequest): Promise<void>;
    deleteFile(instanceId: string, version: number, fileName: string): Promise<void>;
}
