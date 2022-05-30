import { AppBar, Toolbar } from '@mui/material';
import React from 'react';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import Image from 'next/image';
const Navbar = ({ setIsDrawerOpen, displayMode, setDisplayMode }) => {
  console.log('displayMode', displayMode);
  return (
    <AppBar position='sticky' width='100%' color='primary'>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* <p style={{borderBottom:displayMode && '2px solid white'}} >tweets</p>
           <p style={{borderBottom:`${!displayMode && '2px solid white'} `}}>trends</p> */}
        <a
          onClick={(e) => {
            e.preventDefault();
            console.log('CLIIIICKHANDLEEER');
            setDisplayMode('ratioed');
          }}
          style={{ borderBottom: displayMode === 'ratioed' && '2px solid white' }}
        >
          ratioed
        </a>

        <a
          onClick={(e) => {
            e.preventDefault();
            console.log('CLIIIICKHANDLEEER');
            setDisplayMode('mostDiscussed');
          }}
          style={{ borderBottom: displayMode === 'mostDiscussed' && '2px solid white' }}
        >
          tweets
        </a>
        <a
          onClick={(e) => {
            e.preventDefault();
            console.log('CLIIIICKHANDLEEER');
            setDisplayMode('trends');
          }}
          style={{ borderBottom: displayMode=== 'trends' && '2px solid white' }}
        >
          trends
        </a>
        <WhatshotIcon onClick={() => setIsDrawerOpen(true)} />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
