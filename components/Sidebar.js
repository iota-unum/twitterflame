import { Box } from '@mui/material'
import React from 'react'

const Sidebar = ({children}) => {
  return (

          <Box sx={{flex:'2', }} >
                    <Box sx={{position:'fixed'}} >

              {children}
              </Box>
              
              </Box>
  )
}

export default Sidebar