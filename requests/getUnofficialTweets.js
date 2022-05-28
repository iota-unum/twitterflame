import { DateTime } from "luxon";


export async function getUnofficialTweets(trend) {
    const date = DateTime.now().minus({ days: 1 }).toISODate()

    // const date = '2022-05-23'
  const query = trend;
  const min_replies = 5;
  var myHeaders = new Headers();
  myHeaders.append('Authorization', process.env.TWEETS_AUTHORIZATION);
  myHeaders.append('Cookie', process.env.TWEETS_COOKIE);
  myHeaders.append('x-csrf-token', process.env.TWEETS_X_CSRF_TOKEN);

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };

  const json = await fetch(
    `https://mobile.twitter.com/i/api/2/search/adaptive.json?include_profile_interstitial_type=1&include_blocking=1&include_blocked_by=1&include_followed_by=1&include_want_retweets=1&include_mute_edge=1&include_can_dm=1&include_can_media_tag=1&include_ext_has_nft_avatar=1&skip_status=1&cards_platform=Web-12&include_cards=1&include_ext_alt_text=true&include_quote_count=true&include_reply_count=1&tweet_mode=extended&include_entities=true&include_user_entities=true&include_ext_media_color=true&include_ext_media_availability=true&include_ext_sensitive_media_warning=true&include_ext_trusted_friends_metadata=true&include_ext_vibe_tag=true&send_error_codes=true&simple_quoted_tweet=true&q=\"${query}\" min_replies:${min_replies} lang:it since:${date}&count=20&query_source=trend_click&pc=1&spelling_corrections=1&ext=mediaStats,highlightedLabel,hasNftAvatar,voiceInfo,enrichments,superFollowMetadata,unmentionInfo&`,
    requestOptions
  );

  const res = await json.json();
  const tweets = res.globalObjects.tweets;

  const keys = getTweetsIds(tweets);

  return { keys, tweets };
}

function getTweetsIds(tweets) {
  const ids = Object.keys(tweets);
  // const idsString = ids.toString()
  return ids;
}
// data.threaded_conversation_with_injections_v2.instructions[0].entries[0].content.itemContent.tweet_results.result.legacy.extended_entities.media[0].video_info.variants[3].url



