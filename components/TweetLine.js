import { Stack } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import TwitterCard from './TwitterCard';

const TweetLine = ({ tweets }) => {
  return (
    <Box  sx={{backgroundColor:'teal', flex:'3', 
    width:'100%'
    
    }} >
      <Stack mx="auto">

      {tweets.map((t) => (
        <div key={t.id_str}>
          <TwitterCard tweet={t} />
          {/* <TwitterTweetEmbed tweetId={t.id_str} options={{ cards: 'hidden' }} /> */}
          <p>{t.metrics.favorite_count + ' -  ' + ' R ' + t.metrics.reply_count + ' - Q ' + t.metrics.quote_count}</p>
        </div>
      ))}

      </Stack>
    </Box>
  );
};

export default TweetLine;
