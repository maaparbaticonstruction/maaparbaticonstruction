import React from 'react';
import { Container, Typography, Box, Card, CardContent } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { styled } from '@mui/system';

// Define color palette
const colors = {
  heading: '#003366', // Dark Blue for headings
  body: '#333333', // Charcoal Gray for body text
  icon: '#00796b', // Teal for icons
};

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)',
  borderRadius: '10px',
  transition: '0.3s',
  '&:hover': {
    transform: 'scale(1.02)',
    boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.2)',
  },
}));

const Contact = () => {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ color: colors.heading }}>
          Contact Us
        </Typography>
      </Box>
      <StyledCard variant="outlined">
        <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
          <PhoneIcon sx={{ mr: 2, color: colors.icon }} />
          <Typography variant="body1" sx={{ color: colors.body }}>
            <strong>Phone:</strong> 8861623342
          </Typography>
        </CardContent>
      </StyledCard>
      <StyledCard variant="outlined">
        <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
          <EmailIcon sx={{ mr: 2, color: colors.icon }} />
          <Typography variant="body1" sx={{ color: colors.body }}>
            <strong>Email:</strong>{' '}
            <a href="mailto:maaparbaticonstruction@gmail.com" style={{ textDecoration: 'none', color: 'inherit' }}>
              maaparbaticonstruction@gmail.com
            </a>
          </Typography>
        </CardContent>
      </StyledCard>
      <StyledCard variant="outlined">
        <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
          <LocationOnIcon sx={{ mr: 2, color: colors.icon }} />
          <Typography variant="body1" sx={{ color: colors.body }}>
            <strong>Location:</strong> Bellandur, Bangalore
          </Typography>
        </CardContent>
      </StyledCard>
    </Container>
  );
};

export default Contact;
