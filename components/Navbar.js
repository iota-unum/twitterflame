import { AppBar, Toolbar } from '@mui/material'
import React from 'react'
import WhatshotIcon from '@mui/icons-material/Whatshot';
import Image from 'next/image';
const Navbar = ({setIsDrawerOpen}) => {
  return (
   <AppBar position='sticky' width='100%' color="secondary">

       <Toolbar sx={{display:'flex', justifyContent:'space-between'}}>
           <p>twitterflame</p>
<WhatshotIcon 
onClick={()=>setIsDrawerOpen(true)}
/>
       </Toolbar>
   </AppBar>
  )
}

export default Navbar