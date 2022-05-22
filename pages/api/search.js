// export default function handler(req, res) {
// const query= 'mentecatti+comunisti'
// const min_replies = 5
//     var myHeaders = new Headers();
//     myHeaders.append("cookie", "g_state={\"i_p\":1653126307363,\"i_l\":1}; dnt=1; kdt=23Ef4GVbwx95wf42DUpCuRzSeqkLOxszszMLRONB; d_prefs=MToxLGNvbnNlbnRfdmVyc2lvbjoyLHRleHRfdmVyc2lvbjoxMDAw; guest_id_ads=v1:165311672872291648; guest_id_marketing=v1:165311672872291648; lang=it; auth_multi=\"763485613:8753c415e87c97b15dd26e9444f5eaa3687c8a48\"; auth_token=2b30a0a773767ca1c70b9ae0c16da71a262686e3; personalization_id=\"v1_QNE54iEwdPa8aDxvqae3UA==\"; guest_id=v1:165318590437681465; twid=u=1415383654759636994; ct0=689baf66aba7539f36a32ad8dacbd8bf7d9bb98474f92c2672a995879759ca58528931343d58522625e621e0276da3e7b671364f0d42de2c557d9cac190a16836d48288fe1fa57a5fac3cc513b76c38e; _twitter_sess=BAh7CSIKZmxhc2hJQzonQWN0aW9uQ29udHJvbGxlcjo6Rmxhc2g6OkZsYXNo%0ASGFzaHsABjoKQHVzZWR7ADoPY3JlYXRlZF9hdGwrCCckk%2BmAAToMY3NyZl9p%0AZCIlOGVhM2ZhMGRkOGY3NjBmNGUxMmYxYTA2MzBlNTQyZTA6B2lkIiU2MzE2%0AYzkzMzI2MzQ5ZjZiNjZkZjU3MzgxNzk1N2EwMQ%3D%3D--b6fc0402fdfd296784dd670979fad93c5894bd04; external_referer=padhuUp37ziiacYL7n02B+6EgB/jV+VcWjUdD2R7iG0=|0|8e8t2xd8A2w=; ct0=291bd407194006f5162bf86670f351f5c330efbabcfc30e958c3b81364999ec8e79ad7c5f77682dbeb21b32858780e28a90ad13402e386639962c3e8c856f35a57b3d77fa0580271cfe0f551ec877a3e; guest_id=v1%3A164985910345751140");
//     myHeaders.append("Authorization", "Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs=1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA");
//     myHeaders.append("referer", "https://twitter.com/search?q=bimbiminkia min_replies:10&src=typed_query");
//     myHeaders.append("x-csrf-token", "689baf66aba7539f36a32ad8dacbd8bf7d9bb98474f92c2672a995879759ca58528931343d58522625e621e0276da3e7b671364f0d42de2c557d9cac190a16836d48288fe1fa57a5fac3cc513b76c38e");
    
//     var requestOptions = {
//       method: 'GET',
//       headers: myHeaders,
//       redirect: 'follow'
//     };
    
//     fetch(`https://twitter.com/i/api/2/search/adaptive.json?include_profile_interstitial_type=1&include_blocking=1&include_blocked_by=1&include_followed_by=1&include_want_retweets=1&include_mute_edge=1&include_can_dm=1&include_can_media_tag=1&include_ext_has_nft_avatar=1&skip_status=1&cards_platform=Web-12&include_cards=1&include_ext_alt_text=true&include_quote_count=true&include_reply_count=1&tweet_mode=extended&include_entities=true&include_user_entities=true&include_ext_media_color=true&include_ext_media_availability=true&include_ext_sensitive_media_warning=true&include_ext_trusted_friends_metadata=true&include_ext_vibe_tag=true&send_error_codes=true&simple_quoted_tweet=true&q=${query} min_replies:${min_replies}&count=30&query_source=typed_query&pc=1&spelling_corrections=1&ext=mediaStats,highlightedLabel,hasNftAvatar,voiceInfo,enrichments,superFollowMetadata,unmentionInfo`, requestOptions)
//       .then(response => response.json())
//       .then(result => res.status(200).send(result))
//       .catch(error => console.log('error', error));







//  }