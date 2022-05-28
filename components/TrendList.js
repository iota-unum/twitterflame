import { List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import React from 'react'

const TrendList = ({trends, setOpen, setSelectedTrend, selectedTrend}) => {

    // console.log('TRENDS from trendlist', trends)
    function handleClick(trend){
        setOpen(false)
        setSelectedTrend(trend)
    }
  return (
    <List  >
        {trends.map(trend => 
            
            
    <ListItem disablePadding key={trend.name}>
      <ListItemButton
      onClick={()=>handleClick(trend.name)}
      >
     
        <ListItemText primary={trend.name} secondary={trend.trendScore} sx={{color: trend.name === selectedTrend && 'blue'}} />
      </ListItemButton>
    </ListItem>
            
            
            )}
    </List>
  )
}

export default TrendList