import { Box } from '@mui/material'
import React from 'react'

const Sidebar = ({children}) => {
  return (

          <Box sx={{flex:'2', }} >
                    <Box sx={{position:'fixed', backgroundColor:'red' , overflowY:'scroll', height:'100%',
                    display:{xs:'none', sm:'block'},
                
                "&::-webkit-scrollbar": {
                    width: 3,
                  },
                  "&::-webkit-scrollbar-track": {
                    boxShadow: `inset 0 0 6px rgba(0, 0, 0, 0.3)`,
                  },
                  "&::-webkit-scrollbar-thumb": {
                    backgroundColor: "darkgrey",
                    outline: `1px solid slategrey`,
                  },
                }} >

              {children}
              </Box>
              
              </Box>
  )
}

export default Sidebar

