import { AbstractModule } from '../../../core/abstract-module';
import { SharedInstances } from '../types';
export declare class SharedInstancesUsersV1Module extends AbstractModule {
    getModuleID(): string;
    getBlacklistStatus(userId: string): Promise<SharedInstances.Users.v1.BlacklistStatus>;
}
