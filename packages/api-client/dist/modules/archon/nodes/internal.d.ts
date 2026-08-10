import { AbstractModule } from '../../../core/abstract-module';
import { Archon } from '../types';
export declare class ArchonNodesInternalModule extends AbstractModule {
    getModuleID(): string;
    /**
     * Get node hostnames and region summary for admin tooling.
     * GET /_internal/nodes/overview
     */
    overview(): Promise<Archon.Nodes.Internal.Overview>;
}
