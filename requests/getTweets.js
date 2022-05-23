
import { formatSearchResponse } from "../libs/utiliities";

export function getTweets(trend){

    const query=  trend
    const min_replies = 5
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs=1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA");
    myHeaders.append("Cookie", "dnt=1; kdt=23Ef4GVbwx95wf42DUpCuRzSeqkLOxszszMLRONB; d_prefs=MToxLGNvbnNlbnRfdmVyc2lvbjoyLHRleHRfdmVyc2lvbjoxMDAw; guest_id_ads=v1:165311672872291648; guest_id_marketing=v1:165311672872291648; lang=it; auth_multi=\"763485613:8753c415e87c97b15dd26e9444f5eaa3687c8a48\"; auth_token=2b30a0a773767ca1c70b9ae0c16da71a262686e3; personalization_id=\"v1_8T1gc8bSaG9Ro71MHZvrFQ==\"; guest_id=v1:165319981211500629; twid=u=1415383654759636994; ct0=b422e5db1d8643a806af6d409ca8c4b480c7954e9f206244c53ff70383c249c44854ee70c974e822d9a266849d47a0730f2922963e410270637b4e950bd6f35c6e89d89a7a2ee3a6940b95220b231e6b");
    myHeaders.append("x-csrf-token", "b422e5db1d8643a806af6d409ca8c4b480c7954e9f206244c53ff70383c249c44854ee70c974e822d9a266849d47a0730f2922963e410270637b4e950bd6f35c6e89d89a7a2ee3a6940b95220b231e6b");
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    return fetch(`https://mobile.twitter.com/i/api/2/search/adaptive.json?include_profile_interstitial_type=1&include_blocking=1&include_blocked_by=1&include_followed_by=1&include_want_retweets=1&include_mute_edge=1&include_can_dm=1&include_can_media_tag=1&include_ext_has_nft_avatar=1&skip_status=1&cards_platform=Web-12&include_cards=1&include_ext_alt_text=true&include_quote_count=true&include_reply_count=1&tweet_mode=extended&include_entities=true&include_user_entities=true&include_ext_media_color=true&include_ext_media_availability=true&include_ext_sensitive_media_warning=true&include_ext_trusted_friends_metadata=true&include_ext_vibe_tag=true&send_error_codes=true&simple_quoted_tweet=true&q=\"${query}\" min_replies:${min_replies} lang:it since:2022-05-22&count=20&query_source=typed_query&pc=1&spelling_corrections=1&ext=mediaStats,highlightedLabel,hasNftAvatar,voiceInfo,enrichments,superFollowMetadata,unmentionInfo`, requestOptions)
    .then(response => response.json())
    .then(result => formatSearchResponse(result))
    .catch(error => console.log('error', error));






}