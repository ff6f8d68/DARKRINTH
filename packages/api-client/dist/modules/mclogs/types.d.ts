export declare namespace Mclogs {
    namespace Insights {
        namespace v1 {
            type LogEntry = {
                level: number;
                time: string | null;
                prefix: string;
                lines: Array<{
                    number: number;
                    content: string;
                }>;
            };
            type Solution = {
                message: string;
            };
            type Problem = {
                message: string;
                counter: number;
                entry: LogEntry;
                solutions: Solution[];
            };
            type Information = {
                message: string;
                counter: number;
                label: string;
                value: string;
                entry: LogEntry;
            };
            type Analysis = {
                problems: Problem[];
                information: Information[];
            };
            type InsightsResponse = {
                id: string;
                name: string;
                type: string;
                version: string;
                title: string;
                analysis: Analysis;
            };
        }
    }
    namespace Logs {
        namespace v1 {
            type CreateResponse = {
                success: boolean;
                id: string;
                source: string | null;
                created: number;
                expires: number;
                size: number;
                lines: number;
                errors: number;
                url: string;
                raw: string;
                token: string;
            };
        }
    }
}
