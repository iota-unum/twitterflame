import { List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import React from 'react'

const TrendList = ({trends, setOpen}) => {

    console.log('TRENDS from trendlist', trends)
  return (
    <List>
        {trends.map(trend => 
            
            
    <ListItem disablePadding key={trend.name}>
      <ListItemButton
      onClick={()=>setOpen(false)}
      >
     
        <ListItemText primary={trend.name} secondary={trend.trendScore}/>
      </ListItemButton>
    </ListItem>
            
            
            )}
    </List>
  )
}

export default TrendList