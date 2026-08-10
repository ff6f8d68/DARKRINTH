import { AbstractModule } from '../../../core/abstract-module';
import { Labrinth } from '../types';
export declare class LabrinthExternalProjectsInternalModule extends AbstractModule {
    getModuleID(): string;
    search(data: Labrinth.ExternalProjects.Internal.SearchRequest): Promise<Labrinth.ExternalProjects.Internal.ExternalProject[]>;
    getBySha1(sha1: string): Promise<Labrinth.ExternalProjects.Internal.ExternalProject>;
    update(id: number, data: Labrinth.ExternalProjects.Internal.UpdateLicenseRequest): Promise<Labrinth.ExternalProjects.Internal.ExternalProject>;
    addFile(data: Labrinth.ExternalProjects.Internal.AddFileRequest): Promise<Labrinth.ExternalProjects.Internal.ExternalProject>;
}
