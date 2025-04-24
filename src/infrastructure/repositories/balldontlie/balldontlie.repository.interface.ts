import { BalldontlieAPI } from "@balldontlie/sdk";
import { BALLDONTLIE_SDK_KEY } from "config/environment";
import type {
  NBAGameOutputType,
  NBAPlayerStatsOutputType,
} from "src/application/dtos/nba";
import type { INBARepository } from "src/domain/repositories";

export class BallDontLieRepository implements INBARepository {
  private _nbaClient: BalldontlieAPI;

  constructor() {
    this._nbaClient = new BalldontlieAPI({
      apiKey: BALLDONTLIE_SDK_KEY,
    });
  }

  async getGames(date: string): Promise<NBAGameOutputType[]> {
    const { data } = await this._nbaClient.nba.getGames({ dates: [date] });

    return data;
  }

  async getPlayersStats(...idGames: number[]): Promise<NBAPlayerStatsOutputType[]> {
    const { data } = await this._nbaClient.nba.getStats({
      game_ids: idGames,
    });

    return data;
  }
}
