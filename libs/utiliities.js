export function formatTrendResponse(response) {
  return response.timeline.instructions[1].addEntries.entries[1].content.timelineModule.items.map(
    (item) => item.item.content.trend.name
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
