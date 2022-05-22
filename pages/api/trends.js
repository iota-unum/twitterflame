
import { formatTrendResponse } from "../../libs/utiliities";

export default function handler(req, res) {

    var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs=1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA");
myHeaders.append("Cookie", "dnt=1; kdt=23Ef4GVbwx95wf42DUpCuRzSeqkLOxszszMLRONB; d_prefs=MToxLGNvbnNlbnRfdmVyc2lvbjoyLHRleHRfdmVyc2lvbjoxMDAw; guest_id_ads=v1:165311672872291648; guest_id_marketing=v1:165311672872291648; lang=it; auth_multi=\"763485613:8753c415e87c97b15dd26e9444f5eaa3687c8a48\"; auth_token=2b30a0a773767ca1c70b9ae0c16da71a262686e3; personalization_id=\"v1_9yaHNUjqIG2b4GBtXyaJ3g==\"; guest_id=v1:165319523807623494; twid=u=1415383654759636994; ct0=ffc6c29b8f72b8462674880a47c7c72c90493e8e73fd1f36ab0f30d36d7c4711cb41a91361b17b7f6710a14e14b0f8d74aee2bf1174f29d82b0efb2b9aefd482c46a63b1d7c838b3ec3f24236e64006a");
myHeaders.append("x-csrf-token", "ffc6c29b8f72b8462674880a47c7c72c90493e8e73fd1f36ab0f30d36d7c4711cb41a91361b17b7f6710a14e14b0f8d74aee2bf1174f29d82b0efb2b9aefd482c46a63b1d7c838b3ec3f24236e64006a");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://mobile.twitter.com/i/api/2/guide.json?include_profile_interstitial_type=1&include_blocking=1&include_blocked_by=1&include_followed_by=1&include_want_retweets=1&include_mute_edge=1&include_can_dm=1&include_can_media_tag=1&include_ext_has_nft_avatar=1&skip_status=1&cards_platform=Web-12&include_cards=1&include_ext_alt_text=true&include_quote_count=true&include_reply_count=1&tweet_mode=extended&include_entities=true&include_user_entities=true&include_ext_media_color=true&include_ext_media_availability=true&include_ext_sensitive_media_warning=true&include_ext_trusted_friends_metadata=true&include_ext_vibe_tag=true&send_error_codes=true&simple_quoted_tweet=true&count=20&candidate_source=trends&include_page_configuration=false&entity_tokens=false&ext=mediaStats,highlightedLabel,hasNftAvatar,voiceInfo,enrichments,superFollowMetadata,unmentionInfo", requestOptions)
.then(response => response.json())
.then(result => res.status(200).send(formatTrendResponse(result)))
.catch(error => console.log('error', error));
    
    
    
    
    
    
     }