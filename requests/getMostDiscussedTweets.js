export function getMostDiscussedTweets(bulk) {
  const tweets = JSON.parse(JSON.stringify(bulk))
  const mostDiscussed = tweets
    .map((trend) =>
      [...trend.tweets].filter((t) => {
        const {
          reply_count: reply,
          retweet_count: retweet,
          quote_count: quote,
          favorite_count: favorite,
        } = t.metrics;
        // return  (reply+quote) > 10 && (reply + quote) / favorite > 0.3
        return reply + quote > 40;
      })
    )
    .filter((array) => array.length > 0)
    .flat()
    .map((t) => {
      const ratio =
        (t.metrics.reply_count + t.metrics.quote_count) /
        t.metrics.favorite_count;

      return { ...t, ratio };
    })
    .sort((a, b) => (b.metrics.reply_count + b.metrics.quote_count) - (a.metrics.reply_count + a.metrics.quote_count) ||  b.ratio - a.ratio);
console.log('DUPLICATES',removeDuplicates(mostDiscussed))
console.log('MOSTDISCUSSED', mostDiscussed)
  return removeDuplicates(mostDiscussed);
}


function removeDuplicates(tweets) {

const ids = tweets.map(t => t.id_str)
const cleanIds = [...new Set(ids)]
// .map(id => tweets.id_str === id)

const newer = cleanIds.map(id => 
    tweets.find(t => t.id_str === id)
    )
return newer




}