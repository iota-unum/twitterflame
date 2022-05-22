export function formatTrendResponse(response) {
  return response.timeline.instructions[1].addEntries.entries[1].content.timelineModule.items.map(
    (item) => {
const trend = item.item.content.trend
const {name, url} = trend

const fullUrl = url.url
const query = fullUrl.match(/query=(.*?)&/i)[1];
return {
name,
query
}

    } 
  );
}

export function formatSearchResponse(response) {
  const rawTweets = response.globalObjects.tweets;
  const tweets = Object.keys(rawTweets).map((k) => {
    const { id, reply_count, retweet_count, quote_count, favorite_count } =
      rawTweets[k];
    return {
      id: k,
      replies: reply_count,
      fav: favorite_count,
      retweet: retweet_count,
      quote: quote_count,
    };
  });
  return tweets
}
// export function extractTrends(response){

// return response.timeline.instructions[1].addEntries.entries[1].content.timelineModule.items

// .map(item => item.item)

// }

// fullUrl.match(/URL=(.*?)&/i)[1];
