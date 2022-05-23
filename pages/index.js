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
import { useState } from 'react';
import AppDrawer from '../components/AppDrawer';

export default function Home({ tweets, trends }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedTrend, setSelectedTrend] = useState(tweets.results[0].name)
  const selectedTweets = tweets.results.filter(trend => trend.name === selectedTrend)[0].tweets
  console.log('SELECTED', selectedTweets)
  return (
    <CssBaseline>

    <Box width="100vw">
      <Navbar setIsDrawerOpen={setIsDrawerOpen}></Navbar>
      <Stack direction='row'  >
        <TweetLine tweets={selectedTweets}  />

        <Sidebar>
          <TrendList trends={trends} setOpen={setIsDrawerOpen} setSelectedTrend={setSelectedTrend} selectedTrend={selectedTrend} />
        </Sidebar>
      </Stack>
      <AppDrawer open={isDrawerOpen} setOpen={setIsDrawerOpen}>
        <TrendList trends={trends} setOpen={setIsDrawerOpen} setSelectedTrend={setSelectedTrend} selectedTrend={selectedTrend} />
      </AppDrawer>
    </Box>

    </CssBaseline>
  );
}

export async function getStaticProps() {
  const tweetsResponse = await fetch('http://localhost:3000/api/all');
  const tweets = await tweetsResponse.json();
  // const tweets = tweetsJson.results[0].tweets;
  const trends = tweets.results.map((r) => ({
    name: r.name,
    trendScore: r.trendScore,
  }));
  return {
    props: { tweets, trends },
  };
}
