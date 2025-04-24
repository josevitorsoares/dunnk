export interface IGetNBAGamesUseCase {
  execute(date: string): Promise<void>;
}
