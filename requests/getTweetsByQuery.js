import { getOfficialTweets, mergeOfficialAndUnofficialTweets } from "./getOfficialTweets";
import { getUnofficialTweets } from "./getUnofficialTweets";



export async function getTweetsByQuery(query) {
  const unofficialData = await getUnofficialTweets(query);
  const unofficialIdsString = await unofficialData.keys.toString();
  const unofficialTweets = unofficialData.tweets;
  const officialTweets = await getOfficialTweets(unofficialIdsString);
  const formattedProva = mergeOfficialAndUnofficialTweets(
    officialTweets,
    unofficialTweets
  );

  const apires = await formattedProva;
  return apires;
}
