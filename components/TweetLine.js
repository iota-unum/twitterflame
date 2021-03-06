import { Stack } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import TwitterCard from './TwitterCard';

const TweetLine = ({
  tweets,
  displayMode,
  setDisplayMode,
  setSelectedTrend,
}) => {
  return (
    <Box
      sx={{
        backgroundColor: 'lightgrey',
        flex: '4',
        width: '50%',
      }}
    >
      <Stack mx='auto' sx={{ margin: '0 auto', width: '100%' }} spacing={3}>
        {tweets.map((t) => (
          <div key={t.id_str}>
            <TwitterCard
              tweet={t}
              displayMode={displayMode}
              setDisplayMode={setDisplayMode}
              setSelectedTrend={setSelectedTrend}
            />
            {/* <TwitterTweetEmbed tweetId={t.id_str} options={{ cards: 'hidden' }} /> */}
            {/* <p>{t.metrics.favorite_count + ' -  ' + ' R ' + t.metrics.reply_count + ' - Q ' + t.metrics.quote_count}</p> */}
          </div>
        ))}
      </Stack>
    </Box>
  );
};

export default TweetLine;
