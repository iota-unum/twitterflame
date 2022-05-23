import { AppBar, Toolbar } from '@mui/material'
import React from 'react'
import WhatshotIcon from '@mui/icons-material/Whatshot';
const Navbar = ({setIsDrawerOpen}) => {
  return (
   <AppBar position='sticky'>

       <Toolbar>
<WhatshotIcon 

onClick={()=>setIsDrawerOpen(true)}
/>
       </Toolbar>
   </AppBar>
  )
}

export default Navbar