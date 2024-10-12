import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Box } from '@mui/material';

// Define color palette
const colors = {
  heading: '#003366', // Dark Blue for headings
  subHeading: '#00509E', // Medium Blue for subheadings
  body: '#333333', // Charcoal Gray for body text
  cardHeading: '#2C3E50', // Greenish Black for card headings
};

const services = [
  { title: 'Building Construction', description: 'High-quality building construction with expert teams.' },
  { title: 'Waterproofing Works', description: 'Effective solutions to protect your property from water damage.' },
  { title: 'RCC Works', description: 'Strong and durable reinforced concrete constructions.' },
  { title: 'Painting Works', description: 'Beautiful and lasting paint jobs for interiors and exteriors.' },
  { title: 'Plumbing Works', description: 'Efficient and reliable plumbing services for all types of buildings.' },
  { title: 'Interior Works', description: 'Elegant and modern interiors to suit your style and needs.' },
  { title: 'MS Fabrication', description: 'High-quality metal fabrication services for your projects.' },
  { title: 'Steel Structures', description: 'Reliable and durable steel structures for large and small projects.' },
  { title: 'Remodeling of Old Buildings', description: 'Expert remodeling services to revamp and renew old structures.' },
];

const Services = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ color: colors.heading }}>
          Our Services
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card 
              sx={{
                height: '100%',
                transition: '0.3s',
                '&:hover': {
                  boxShadow: 6,
                  transform: 'scale(1.02)',
                },
              }}
            >
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom sx={{ color: colors.cardHeading }}>
                  {service.title}
                </Typography>
                <Typography variant="body2" sx={{ color: colors.body }}>
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Services;
