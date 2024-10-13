import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        textAlign: 'center',
        padding: {
          xs: '1rem 0.5rem', // Smaller padding on mobile
          sm: '1.5rem',      // Larger padding on desktop
        },
        mt: 'auto',
      }}
    >
      <Typography
        variant="body2"
        sx={{
          fontSize: {
            xs: '12px', // Smaller font size on mobile
            sm: '14px', // Larger font size on desktop
          },
        }}
      >
        &copy; 2024 MAA PARBATI Construction - Bellandur, Bangalore. Phone: 8861623342
      </Typography>
    </Box>
  );
};

export default Footer;
