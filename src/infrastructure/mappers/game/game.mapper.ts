import type { NBAGameOutputType } from "src/application/dtos";
import type { GameEntity } from "src/domain/entities";

export class GameEntityMapper {
  static toEntity(input: NBAGameOutputType): GameEntity {
    const date = new Date(input.date);

    return {
      id: input.id,
      date: date.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }),
      homeTeam: input.home_team.full_name,
      homeTeamScore: input.home_team_score,
      homeAbbreviation: input.home_team.abbreviation,
      visitorTeam: input.visitor_team.full_name,
      visitorTeamScore: input.visitor_team_score,
      visitorAbbreviation: input.visitor_team.abbreviation,
    };
  }
}
