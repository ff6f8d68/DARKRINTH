import { AbstractModule } from '../../../core/abstract-module';
import { Archon } from '../types';
export declare class ArchonTransfersInternalModule extends AbstractModule {
    getModuleID(): string;
    /**
     * Schedule transfers for specific servers.
     * POST /_internal/transfers/schedule/servers
     */
    scheduleServers(request: Archon.Transfers.Internal.ScheduleServerTransfersRequest): Promise<Archon.Transfers.Internal.ScheduleTransfersResponse>;
    /**
     * Schedule transfers for all servers on specific nodes.
     * POST /_internal/transfers/schedule/nodes
     */
    scheduleNodes(request: Archon.Transfers.Internal.ScheduleNodeTransfersRequest): Promise<Archon.Transfers.Internal.ScheduleTransfersResponse>;
    /**
     * Get transfer batch history.
     * GET /_internal/transfers/history
     */
    history(options?: Archon.Transfers.Internal.TransferHistoryQuery): Promise<Archon.Transfers.Internal.TransferHistoryResponse>;
    /**
     * Cancel pending transfer batches.
     * POST /_internal/transfers/cancel
     */
    cancel(request: Archon.Transfers.Internal.CancelTransfersRequest): Promise<Archon.Transfers.Internal.CancelTransfersResponse>;
}
