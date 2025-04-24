import type { NBAGameOutputType, NBATeamType } from "./nba-game.output.dto";

export type NBAPlayerType = {
  id: number;
  first_name: string;
  last_name: string;
  position: string;
  height: string;
  weight: string;
  jersey_number: string;
  college: string;
  country: string;
  draft_year: number;
  draft_round: number;
  draft_number: number;
};

export type NBAPlayerStatsOutputType = {
  id: number;
  min: string;
  fgm: number;
  fga: number;
  fg_pct: number;
  fg3m: number;
  fg3a: number;
  fg3_pct: number;
  ftm: number;
  fta: number;
  ft_pct: number;
  oreb: number;
  dreb: number;
  reb: number;
  ast: number;
  stl: number;
  blk: number;
  turnover: number;
  pf: number;
  pts: number;
  player: NBAPlayerType;
  team: NBATeamType;
  game: NBAGameOutputType;
};
