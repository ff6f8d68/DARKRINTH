import { AbstractModule } from '../../../core/abstract-module';
import { Labrinth } from '../types';
export declare class LabrinthModerationInternalModule extends AbstractModule {
    getModuleID(): string;
    getProjects(params?: Labrinth.Moderation.Internal.ProjectsRequest): Promise<Labrinth.Moderation.Internal.ProjectsResponse>;
    getProjectIds(params?: Omit<Labrinth.Moderation.Internal.ProjectsRequest, 'count' | 'offset'>): Promise<Labrinth.Moderation.Internal.ProjectIdsResponse>;
    acquireLock(projectId: string): Promise<Labrinth.Moderation.Internal.LockAcquireResponse>;
    overrideLock(projectId: string): Promise<Labrinth.Moderation.Internal.LockAcquireResponse>;
    releaseLock(projectId: string): Promise<Labrinth.Moderation.Internal.ReleaseLockResponse>;
    checkLock(projectId: string): Promise<Labrinth.Moderation.Internal.LockStatusResponse>;
    setProjectJudgements(judgements: Labrinth.Moderation.Internal.ProjectJudgements): Promise<void>;
}
