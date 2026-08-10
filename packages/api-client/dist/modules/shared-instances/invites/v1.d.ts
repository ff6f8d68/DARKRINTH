import { AbstractModule } from '../../../core/abstract-module';
import { SharedInstances } from '../types';
export declare class SharedInstancesInvitesV1Module extends AbstractModule {
    getModuleID(): string;
    get(inviteId: string): Promise<SharedInstances.Invites.v1.Invite>;
}
