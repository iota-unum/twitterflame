import { getAll } from "../../requests/getAll"
import { getMostDiscussedTweets } from "../../requests/getMostDiscussedTweets"

export default async function handler(req, res) {

const wholeResponse = await  (await getAll()).results
// const selected = wholeResponse.map(trend => 
//     trend.tweets.filter(t => {
//      const {reply_count:reply, retweet_count: retweet, quote_count: quote, favorite_count: favorite} =  t.metrics
//     // return  (reply+quote) > 10 && (reply + quote) / favorite > 0.3
//     return  (reply+quote) > 30
//     }

        
//     )
    
//     )
//     .filter(array => array.length > 0).flat()
//     .map(t => {
//         const ratio = (t.metrics.reply_count + t.metrics.quote_count) / t.metrics.favorite_count
//         return {...t, ratio}
//     })
//     .sort((a,b)=> b.ratio - a.ratio)
const selected = await getMostDiscussedTweets(wholeResponse)

    res.json({response: wholeResponse})
}


