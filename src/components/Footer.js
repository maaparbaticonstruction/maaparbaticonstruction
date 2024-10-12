import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        textAlign: 'center',
        padding: '1rem',
        mt: 'auto',
      }}
    >
      <Typography variant="body2">&copy; 2024 MAA PARBATI Construction - Bellandur, Bangalore. Phone: 8861623342</Typography>
    </Box>
  );
};

export default Footer;
