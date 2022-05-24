

// get unofficial tweets => tweets & idsStr
// get official tweets => tweets
// merge official & unofficial => get a result like in /api/all

import { getOfficialTweets, mergeOfficialAndUnofficialTweets } from "../../requests/getOfficialTweets";
import { getUnofficialTweets } from "../../requests/getUnofficialTweets";


export default async function handler(req, res) {



    const unofficialData = await getUnofficialTweets('capezzone')
    const unofficialIdsString = await unofficialData.keys.toString()
    const unofficialTweets = unofficialData.tweets
    const officialTweets = await getOfficialTweets(unofficialIdsString)
    const formattedProva = mergeOfficialAndUnofficialTweets(officialTweets, unofficialTweets)

    const apires = await officialTweets
    res.status(200).send(apires)
}