import { AbstractModule } from '../../../core/abstract-module';
import { Labrinth } from '../types';
export declare class LabrinthContentV3Module extends AbstractModule {
    getModuleID(): string;
    resolve(request: Labrinth.Content.v3.ResolveContentRequest): Promise<Labrinth.Content.v3.ResolveContentPlan>;
}
