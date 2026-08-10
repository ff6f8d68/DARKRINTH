import { AbstractModule } from '../../../core/abstract-module';
import { SharedInstances } from '../types';
export declare class SharedInstancesInstancesV1Module extends AbstractModule {
    getModuleID(): string;
    get(instanceId: string): Promise<SharedInstances.Instances.v1.Instance>;
    getForUser(userId: string): Promise<string[]>;
    getUsers(instanceId: string): Promise<SharedInstances.Instances.v1.InstanceUsers>;
    getLatestVersion(instanceId: string): Promise<SharedInstances.Instances.v1.InstanceVersion>;
    getVersion(instanceId: string, version: number): Promise<SharedInstances.Instances.v1.InstanceVersion>;
}
