export declare namespace LauncherMeta {
    namespace Manifest {
        namespace v0 {
            type LoaderVersion = {
                id: string;
                url: string;
                stable: boolean;
            };
            type GameVersionEntry = {
                id: string;
                stable: boolean;
                versionGroup?: string;
                loaders: LoaderVersion[];
            };
            type VersionGroup = {
                id: string;
                loaders: LoaderVersion[];
            };
            type Manifest = {
                gameVersions: GameVersionEntry[];
                versionGroups?: VersionGroup[];
            };
        }
    }
}
