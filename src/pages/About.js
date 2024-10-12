import React, { useState } from 'react';
import { Container, Typography, Box, Card, CardContent } from '@mui/material';

// Define color palette
const colors = {
  heading: '#2c3e50',  // Dark Gray for headings
  body: '#34495e',     // Medium Gray for body text
  title: '#2980b9',    // Blue for section titles
  background: '#f5f5f5', // Light Gray for the background
};

const About = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Content for different sections
  const content = [
    {
      title: "Overview",
      description: "MAA PARBATI Construction has been serving Bangalore with top-tier construction services for over 10 years."
    },
    {
      title: "Mission",
      description: "Our mission is to bring your vision to life through high-quality construction, renovation, and design solutions."
    },
    {
      title: "Specializations",
      description: "Located in Bellandur, we specialize in both commercial and residential projects, and our work reflects our commitment to excellence."
    },
  ];

  return (
    <Container maxWidth="md" sx={{ py: 5, backgroundColor: colors.background, borderRadius: '10px', position: 'relative', overflow: 'hidden' }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ color: colors.heading }}>
          About MAA PARBATI Construction
        </Typography>
      </Box>
      {content.map((item, index) => (
        <Card
          key={index}
          onMouseEnter={() => setHoveredCard(index)}
          onMouseLeave={() => setHoveredCard(null)}
          sx={{
            marginBottom: 2,
            boxShadow: hoveredCard === index ? 3 : 1,
            transition: '0.3s',
            borderRadius: '8px',
            backgroundColor: 'rgba(255, 255, 255, 0.8)', // More transparent white for card
            '&:hover': {
              transform: 'scale(1.02)',
              boxShadow: 6,
            },
          }}
        >
          <CardContent>
            <Typography 
              variant="h5" 
              sx={{ color: colors.title }}  // Apply title color
            >
              {item.title}
            </Typography>
            <Typography variant="body2" sx={{ color: colors.body }}>
              {item.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default About;
