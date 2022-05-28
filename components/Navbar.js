import { AppBar, Toolbar } from '@mui/material';
import React from 'react';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import Image from 'next/image';
const Navbar = ({ setIsDrawerOpen, trendMode, setTrendMode }) => {
  console.log('TRENDMODE', trendMode);
  return (
    <AppBar position='sticky' width='100%' color='secondary'>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <p>twitterflame</p>
        {/* <p style={{borderBottom:trendMode && '2px solid white'}} >tweets</p>
           <p style={{borderBottom:`${!trendMode && '2px solid white'} `}}>trends</p> */}
      
        <a
          onClick={(e) => {
            e.preventDefault();
            console.log('CLIIIICKHANDLEEER');
            setTrendMode(false);
          }}
          style={{ borderBottom: !trendMode && '2px solid white' }}
        >
          tweets
        </a>
        <a
          onClick={(e) => {
            e.preventDefault();
            console.log('CLIIIICKHANDLEEER');
            setTrendMode(true);
          }}
          style={{ borderBottom: trendMode && '2px solid white' }}
        >
          trends
        </a>
        <WhatshotIcon onClick={() => setIsDrawerOpen(true)} />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
