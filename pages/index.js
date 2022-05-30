import { Button, CssBaseline, Stack } from '@mui/material';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { Box } from '@mui/system';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import { rankTweets } from '../libs/utiliities';
import TweetLine from '../components/TweetLine';
import Sidebar from '../components/Sidebar';
import TrendList from '../components/TrendList';
import Navbar from '../components/Navbar';
import { useEffect, useState } from 'react';
import AppDrawer from '../components/AppDrawer';
import { getEverything } from '../requests/getEverything';
import { getAll } from '../requests/getAll';
import { getMostDiscussedTweets } from '../requests/getMostDiscussedTweets';
import { getRatioed } from '../requests/getRatioedCollection';

export default function Home({
  tweets,
  trends,
  mostDiscussedTweets,
  ratioedTweets,
}) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedTrend, setSelectedTrend] = useState(tweets[0].name);
  const [displayMode, setDisplayMode] = useState('mostDiscussed');
  const selectedTweets = tweets.filter(
    (trend) => trend.name === selectedTrend
  )[0].tweets;
  // console.log('SELECTED', selectedTweets);
  const displayedTweets = displayMode === 'mostDiscussed' ? mostDiscussedTweets : displayMode === 'trends' ? selectedTweets : ratioedTweets;
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedTrend, displayMode]);

  return (
    <CssBaseline>
      <Box width='100vw'>
        <Navbar
          setIsDrawerOpen={setIsDrawerOpen}
          displayMode={displayMode}
          setDisplayMode={setDisplayMode}
        ></Navbar>
        <Stack
          direction='row'
          sx={{ width: { xs: '100%', sm: '45%', margin: '0 auto' } }}
        >
          <TweetLine
            tweets={displayedTweets}
            displayMode={displayMode}
            setDisplayMode={setDisplayMode}
            setSelectedTrend={setSelectedTrend}
          />

          <Sidebar>
            <TrendList
              trends={trends}
              setOpen={setIsDrawerOpen}
              setSelectedTrend={setSelectedTrend}
              selectedTrend={selectedTrend}
              setDisplayMode={setDisplayMode}
            />
          </Sidebar>
        </Stack>
        <AppDrawer open={isDrawerOpen} setOpen={setIsDrawerOpen}>
          <TrendList
            trends={trends}
            setOpen={setIsDrawerOpen}
            setSelectedTrend={setSelectedTrend}
            selectedTrend={selectedTrend}
            setDisplayMode={setDisplayMode}
          />
        </AppDrawer>
      </Box>
    </CssBaseline>
  );
}

export async function getStaticProps() {
  const tweets = await (await getAll()).results;
  const mostDiscussedTweets = await getMostDiscussedTweets(tweets);
  const ratioedRes = await getRatioed(
    JSON.parse(JSON.stringify(getMostDiscussedTweets(tweets)))
  );
  const ratioed = ratioedRes.map((t) => {
    delete t._id;
    return t;
  });
  console.log('typeof result', typeof ratioed);

  const trends = tweets.map((r) => ({
    name: r.name,
    trendScore: r.trendScore,
  }));
  return {
    props: { tweets, trends, mostDiscussedTweets, ratioedTweets: ratioed },
    revalidate: 15 * 60,
  };
}
