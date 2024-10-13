import React from 'react';
import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  Card,
  CardContent,
} from '@mui/material';
import { styled } from '@mui/system';
import colors from './theme'; 

const StyledCard = styled(Card)(({ theme }) => ({
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

const Infrastructure = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <StyledCard>
        <CardContent>
          <Typography variant="h4" gutterBottom sx={{ color: colors.heading.h4 }}>
            Our Infrastructure
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: colors.body.main }}>
            At <strong>MAA PARBATI CONSTRUCTION</strong>, we pride ourselves on our state-of-the-art infrastructure...
          </Typography>
        </CardContent>
      </StyledCard>

      {/* Machinery and Equipment Card */}
      <StyledCard>
        <CardContent>
          <Typography variant="h5" gutterBottom sx={{ color: colors.heading.h5 }}>
            Machinery and Equipment
          </Typography>
          <List>
            <ListItem sx={{ color: colors.body.main }}>Drilling machines</ListItem>
            <ListItem sx={{ color: colors.body.main }}>
              Shuttering material (available: <strong>20,000 sqft</strong>)
            </ListItem>
          </List>
          <Box sx={{ backgroundColor: 'lightgray', padding: 2, mt: 2 }}>
            <Typography variant="body1" sx={{ color: colors.body.main }}>
              We use top-quality shuttering material such as plywood, steel plates...
            </Typography>
          </Box>
        </CardContent>
      </StyledCard>

      {/* Human Resources Card */}
      <StyledCard>
        <CardContent>
          <Typography variant="h5" gutterBottom sx={{ color: colors.heading.h5 }}>
            Human Resources
          </Typography>
          <List>
            <ListItem sx={{ color: colors.body.main }}>Skilled laborers</ListItem>
            <ListItem sx={{ color: colors.body.main }}>Engineers</ListItem>
            <ListItem sx={{ color: colors.body.main }}>RCC workers</ListItem>
            <ListItem sx={{ color: colors.body.main }}>Interior workers</ListItem>
            <ListItem sx={{ color: colors.body.main }}>Plumbers</ListItem>
            <ListItem sx={{ color: colors.body.main }}>Supervisors and Project Managers</ListItem>
            <ListItem sx={{ color: colors.body.main }}>Dedicated staff for on-site and office coordination</ListItem>
          </List>
        </CardContent>
      </StyledCard>

      {/* Facilities Card */}
      <StyledCard>
        <CardContent>
          <Typography variant="h5" gutterBottom sx={{ color: colors.heading.h5 }}>
            Facilities
          </Typography>
          <List>
            <ListItem sx={{ color: colors.body.main }}>Material storage yards</ListItem>
            <ListItem sx={{ color: colors.body.main }}>Dedicated worker housing and welfare facilities</ListItem>
          </List>
        </CardContent>
      </StyledCard>
    </Container>
  );
};

export default Infrastructure;
