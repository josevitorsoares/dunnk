import type {
  NBAGameOutputType,
  NBAPlayerStatsOutputType,
} from "src/application/dtos/nba";

export interface INBARepository {
  getGames(date: string): Promise<NBAGameOutputType[]>;

  getPlayersStats(...idGames: number[]): Promise<NBAPlayerStatsOutputType[]>;
}
