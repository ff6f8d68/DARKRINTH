import { AbstractModule } from '../../../core/abstract-module';
import { Labrinth } from '../types';
export declare class LabrinthTeamsV3Module extends AbstractModule {
    getModuleID(): string;
    /**
     * Get multiple teams by their IDs
     *
     * @param ids - Array of team IDs
     * @returns Promise resolving to an array of team member arrays (one per team)
     *
     * @example
     * ```typescript
     * const teams = await client.labrinth.teams_v3.getMultiple(['team1', 'team2'])
     * // teams[0] = members of team1, teams[1] = members of team2
     * ```
     */
    getMultiple(ids: string[]): Promise<Labrinth.Projects.v3.TeamMember[][]>;
}
