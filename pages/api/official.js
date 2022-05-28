import { getIdsStringFromTweetsArray } from "../../libs/utiliities"
import { getOfficialTweets , } from "../../requests/getOfficialTweets"
import { getTweets } from "../../requests/getTweets"

export default async function handler(req, res) {

    const unofficialTweets = await getTweets('alessandro')
    const idsStr = getIdsStringFromTweetsArray(unofficialTweets)
    const  officialTweets= await getOfficialTweets(idsStr)
    const idstr2 = officialTweets.map(off => off.id_str).toString()
    res.status(200).send({official:idstr2,unofficial: idsStr})
    
     }



