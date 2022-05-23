import { Stack } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { TwitterTweetEmbed } from 'react-twitter-embed';

const TweetLine = ({ tweets }) => {
  return (
    <Box  sx={{backgroundColor:'teal', flex:'3'}} >
      <Stack width="80%" mx="auto">

      {tweets.map((t) => (
        <div key={t.id}>
          <TwitterTweetEmbed tweetId={t.id} options={{ cards: 'hidden' }} />
          <p>{t.fav + ' -  ' + ' R ' + t.retweet + ' - Q ' + t.quote}</p>
        </div>
      ))}

      </Stack>
    </Box>
  );
};

export default TweetLine;
