import { getOfficialTweets, mergeOfficialAndUnofficialTweets } from "./getOfficialTweets";
import { getUnofficialTweets } from "./getUnofficialTweets";



export async function getTweetsByQuery(query) {
  const unofficialData = await getUnofficialTweets(query);
  const unofficialIdsString = await unofficialData.keys.toString();
  const unofficialTweets = unofficialData.tweets;
  const officialTweets = await getOfficialTweets(unofficialIdsString);
  const formattedTweets = mergeOfficialAndUnofficialTweets(
    officialTweets,
    unofficialTweets
  );
const sortedTweets = formattedTweets.sort((a, b) => b.tweetScore - a.tweetScore);
  const apires = await sortedTweets;
  return apires;
}

