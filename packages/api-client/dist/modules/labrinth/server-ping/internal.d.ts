import { AbstractModule } from '../../../core/abstract-module';
import { Labrinth } from '../types';
export declare class LabrinthServerPingInternalModule extends AbstractModule {
    getModuleID(): string;
    /**
     * Ping a Minecraft Java server
     * POST /_internal/server-ping/minecraft-java
     */
    pingMinecraftJava(request: Labrinth.ServerPing.Internal.MinecraftJavaPingRequest): Promise<void>;
}
