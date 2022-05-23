import { AppBar, Toolbar } from '@mui/material'
import React from 'react'
import WhatshotIcon from '@mui/icons-material/Whatshot';
import Image from 'next/image';
const Navbar = ({setIsDrawerOpen}) => {
  return (
   <AppBar position='sticky'>

       <Toolbar>
<WhatshotIcon 
onClick={()=>setIsDrawerOpen(true)}
/>
<Image src="/fire-logo.svg" height={30} width={30} />
       </Toolbar>
   </AppBar>
  )
}

export default Navbar