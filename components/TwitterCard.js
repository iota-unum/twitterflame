import React from 'react';
import { formatDate } from '../libs/utiliities';
import Link from 'next/link';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Button, Stack } from '@mui/material';
import Image from 'next/image'
import { Box } from '@mui/system';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import { BsTwitter } from 'react-icons/bs';
// import format from 'date-fns/format'

const TwitterCard = ({ tweet, trendMode, setTrendMode, setSelectedTrend }) => {

  const {
    created_at,
    id_str,
    full_text: text,
    name,
    screen_name,
    profile_image_url_https: profile_image_url,
  } = tweet;
  const ratio = (tweet.metrics.reply_count + tweet.metrics.quote_count) / tweet.metrics.favorite_count
  const status = text.replace(/(?:https?|ftp):\/\/[\n\S]+/g, '');
  const tweetImage = tweet.extended_entities?.media[0].media_url_https;
  const imgWidth = tweet.extended_entities?.media[0].sizes.small.w
  const imgHeight = tweet.extended_entities?.media[0].sizes.small.h
  const tweetUrl = `https://twitter.com/${screen_name}/status/${tweet.id_str}`;
  //   console.log(id_str, screen_name)
  // console.log(formatDate(created_at));
  function handleClick(){

    setTrendMode(true)
    setSelectedTrend(tweet.query.name)

  }
  return (
    <div className='twitter-card'>
      <div className='card-header'>
        <div className='header-left'>
          <div className='avatar'>
            <img src={profile_image_url} alt='' />
          </div>
          <div className='name'>
            <p className='nickname'>{name}</p>
            <p className='handle'>@{screen_name}</p>
          </div>
        </div>
        <div className='header-right'>
          {/* <BsTwitter size={'1.65em'} color={'var(--selectedColor'}/> */}

          <Link href={tweetUrl}>
            <Button
              variant='text'
              endIcon={<TwitterIcon />}
              size='small'
              target='_blank'
            >
              see on {/* <a target="_blank">see on</a> */}
            </Button>
          </Link>
        </div>
      </div>

      <div className='card-text'> {status} </div>
     
      <div className='card-image'  >
        {

tweetImage &&  <Image width={imgWidth}  height={imgHeight} src={tweetImage} />

        }
        {/* <img src={tweetImage} alt="" /> */}
      </div>

      <div className='card-footer'>
        <Stack direction='row' justifyContent='space-between'>
          <div className='date'>{formatDate(created_at)}</div>
        <Stack direction='row' spacing={2} color="secondary">
          <span> {tweet.metrics.reply_count} </span>
          <span> {tweet.metrics.retweet_count} </span>
          <span> {tweet.metrics.favorite_count} </span>
          </Stack>

        </Stack>
        {!trendMode && <Button onClick={handleClick} > {tweet.query.name}</Button>}
      </div>
      <style jsx>
        {`
          .twitter-card {
            border: ${ratio > 1 && `5px solid purple`};
            border-radius: 0.8em;
            width: 95%;
            display: flex;
            flex-direction: column;
            background-color: white;
            overflow: hidden;
            padding: 1.3em;
            margin: 0 auto;
            font-size: 0.7em;
            color: black;
            font-family: Arial, Helvetica, sans-serif;
            text-align: left;
            font-size: 1rem;
            width:100%;

          }

          .card-header {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            font-size: 0.8rem;
          }

          .header-left {
            display: flex;
            align-items: center;
          }
          .avatar {
            width: 2.9em;
          }
          .avatar img {
            border-radius: 50%;
            width: 100%;
          }
          .name {
            padding-left: 0.5em;
            line-height: 0.3em;
          }
          .nickname {
            font-weight: bolder;
            letter-spacing: -0.02em;
          }
          .handle {
            font-weight: lighter;
            font-size: 0.9em;
            opacity: 0.9;
            color: 'red';
          }
          .card-text {
            padding-top: 1em;
            line-height: 1.1em;
            opacity: 0.9;
            line-height: 1.3;
          }
          .card-image {
            width: 200px;
            border-radius: 0.8em;
            overflow: hidden;
            margin: 1em auto;
            width: 100%;
          }
          img {
            width: 100%;
          }
          .date {
            font-size: 0.8em;
            opacity: 0.7;
          }
        `}
      </style>
    </div>
  );
};

export default TwitterCard;
