// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const puppeteer = require('puppeteer')
const url = 'https://mobile.twitter.com/i/api/2/guide.json?include_profile_interstitial_type=1&include_blocking=1&include_blocked_by=1&include_followed_by=1&include_want_retweets=1&include_mute_edge=1&include_can_dm=1&include_can_media_tag=1&include_ext_has_nft_avatar=1&skip_status=1&cards_platform=Web-12&include_cards=1&include_ext_alt_text=true&include_quote_count=true&include_reply_count=1&tweet_mode=extended&include_entities=true&include_user_entities=true&include_ext_media_color=true&include_ext_media_availability=true&include_ext_sensitive_media_warning=true&include_ext_trusted_friends_metadata=true&include_ext_vibe_tag=true&send_error_codes=true&simple_quoted_tweet=true&count=20&candidate_source=trends&include_page_configuration=false&entity_tokens=false&ext=mediaStats,highlightedLabel,hasNftAvatar,voiceInfo,enrichments,superFollowMetadata,unmentionInfo'

export default function handler(req, res) {


  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs=1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA");
  myHeaders.append("cookie", "guest_id=v1:165311157726458488; ct0=39d73e71f437450ff316ff3671aeef30; att=1-K47QLplfYGXEWtm3XCTkVkDxX42KyVvLIx2YM3DM; d_prefs=MjoxLGNvbnNlbnRfdmVyc2lvbjoyLHRleHRfdmVyc2lvbjoxMDAw; gt=1527976192334340097; ct0=5b40f80c78ce44c2bb63bd776f176fe770fe68b95238afb0d8dd4a7b52f5f4f6d79c615b2f6a2a50ed80fa9d2c733b04eb4f9c1c658ccb84ce539124ac4a32e8da42ec9b77249800538e125c053fbab0; guest_id=v1%3A164985910345751140");
  myHeaders.append("x-csrf-token", "39d73e71f437450ff316ff3671aeef30");
  myHeaders.append("x-guest-token", "1527976192334340097");
  
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  fetch(url, requestOptions)
    .then(response => response.json())
    .then(result => res.status(200).send(result))
    .catch(error => console.log('error', error));










}
