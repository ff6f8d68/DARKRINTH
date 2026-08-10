export declare namespace Paper {
    namespace Versions {
        namespace v3 {
            type Project = {
                project: {
                    id: string;
                    name: string;
                };
                versions: Record<string, string[]>;
            };
            type BuildChannel = 'STABLE' | 'BETA' | 'ALPHA';
            type Build = {
                id: number;
                time: string;
                channel: BuildChannel | string;
            };
            type VersionBuilds = {
                builds: Build[];
            };
        }
    }
}
