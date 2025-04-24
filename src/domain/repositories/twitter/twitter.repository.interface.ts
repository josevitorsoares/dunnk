export interface ITwitterRepository {
  postTweet(message: string): Promise<void>;
}
