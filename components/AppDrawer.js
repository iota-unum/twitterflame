import React, { useState } from 'react';
import { Drawer, Box, Typography, Stack } from '@mui/material';
const AppDrawer = ({ open, setOpen, children }) => {
  return (
    <Drawer anchor='left' open={open} onClose={() => setOpen(false)} sx={{}}>
      <Box sx={{ width: '50vw' }}>
        <Stack
          justifyContent='end'
          p={4}
          sx={{ marginLeft: 'auto' }}
          onClick={() => setOpen(false)}
        >
          X
        </Stack>
        {children}
      </Box>
    </Drawer>
  );
};

export default AppDrawer;
