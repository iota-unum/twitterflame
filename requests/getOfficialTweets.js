import TwitterApi from 'twitter-api-v2';
const client = new TwitterApi(process.env.TWITTER_BEARER_TOKEN);


export async function getOfficialTweets(idsString){
  const tweets =  client.v1.get('statuses/lookup.json', { id: idsString,tweet_mode:"extended"});
return tweets

}



export function mergeOfficialAndUnofficialTweets(official, unofficial){

const mergedTweets = official.map(off =>{

const {id_str, user,  } = off
const extended_entities = off.extended_entities || null

const {name, screen_name, profile_image_url_https} = user
const {full_text, reply_count, retweet_count, favorite_count, quote_count, created_at, } = unofficial[id_str] 
const tweetScore = reply_count + quote_count
  return {id_str, created_at, name, screen_name, profile_image_url_https, full_text, tweetScore, metrics:{retweet_count, favorite_count, quote_count, reply_count},extended_entities} 
})

return mergedTweets
}