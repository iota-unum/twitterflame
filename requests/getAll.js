import { rankTweets } from "../libs/utiliities";
import { getTrends } from "./getTrends";
import { getTweetsByQuery } from "./getTweetsByQuery";


export async function getAll() {
    //get trends
    const trends = await getTrends();
    //get tweets for each trend
    const results = await getAllTweets(trends);
    // add score to each trend
    //return everything as an [{name, query, score, tweets}, {name, query, score, tweets}...]
  
    return { results };
  }
  
  async function getAllTweets(trends) {
    const promises = await trends.map(async (trend) => {
      const tweets = await getTweetsByQuery(trend.query);
      const trendScore = rankTweets(tweets);
      return { name: trend.name, trendScore, tweets, query: trend.query };
    });
    return (await Promise.all(promises)).sort(
      (a, b) => b.trendScore - a.trendScore
    );
  }