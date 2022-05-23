import { formatTrendResponse } from "../libs/utiliities";

export function getTrends(){


    var myHeaders = new Headers();
    myHeaders.append("Authorization", process.env.TRENDS_AUTHORIZATION);
    myHeaders.append("Cookie", process.env.TRENDS_COOKIE);
    myHeaders.append("x-csrf-token", process.env.TRENDS_X_CSRF_TOKEN);
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    return fetch("https://mobile.twitter.com/i/api/2/guide.json?include_profile_interstitial_type=1&include_blocking=1&include_blocked_by=1&include_followed_by=1&include_want_retweets=1&include_mute_edge=1&include_can_dm=1&include_can_media_tag=1&include_ext_has_nft_avatar=1&skip_status=1&cards_platform=Web-12&include_cards=1&include_ext_alt_text=true&include_quote_count=true&include_reply_count=1&tweet_mode=extended&include_entities=true&include_user_entities=true&include_ext_media_color=true&include_ext_media_availability=true&include_ext_sensitive_media_warning=true&include_ext_trusted_friends_metadata=true&include_ext_vibe_tag=true&send_error_codes=true&simple_quoted_tweet=true&count=20&candidate_source=trends&include_page_configuration=false&entity_tokens=false&ext=mediaStats,highlightedLabel,hasNftAvatar,voiceInfo,enrichments,superFollowMetadata,unmentionInfo", requestOptions)
    .then(response => response.json())
    .then(result => formatTrendResponse(result))
    .catch(error => console.log('error', error));
        
        









}