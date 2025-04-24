import {
  TWITTER_ACCESS_SECRET,
  TWITTER_ACCESS_TOKEN,
  TWITTER_APP_KEY,
  TWITTER_APP_SECRET,
} from "config/environment/env";
import type { ITwitterRepository } from "src/domain";
import { TwitterApi } from "twitter-api-v2";

export class TwitterRepository implements ITwitterRepository {
  private _twitterClient: TwitterApi;

  constructor() {
    this._twitterClient = new TwitterApi({
      appKey: TWITTER_APP_KEY,
      appSecret: TWITTER_APP_SECRET,
      accessToken: TWITTER_ACCESS_TOKEN,
      accessSecret: TWITTER_ACCESS_SECRET,
    });
  }

  async postTweet(message: string): Promise<void> {
    await this._twitterClient.v2.tweet(message);
  }
}
