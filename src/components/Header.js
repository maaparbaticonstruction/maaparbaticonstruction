import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Box, Button } from '@mui/material';
import logo from '../assets/MAA_PARBATI-removebg-preview.png';

const Header = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar
        sx={{
          display: 'flex',
          flexDirection: 'row',
          overflowX: 'auto',
          whiteSpace: 'nowrap',
          alignItems: 'center',
        }}
      >
        <Box component="img" src={logo} alt="Logo" sx={{ width: '75px', mr: 2 }} />
        <Box
          sx={{
            display: 'flex',
            flexGrow: 1,
            alignItems: 'center',
            overflowX: 'auto',
          }}
        >
          {['/', '/services', '/about', '/contact', '/infrastructure'].map((path) => (
            <NavLink 
              key={path} 
              to={path} 
              style={{ textDecoration: 'none' }} 
              isActive={(match) => {
                return match ? true : false;
              }}
            >
              {({ isActive }) => (
                <Button 
                  color="inherit" 
                  sx={{ 
                    padding: '10px 15px', // Add some padding for better spacing
                    color: isActive ? '#FFFFFF' : '#FFFFFF', // Text color (white in both active and inactive cases)
                    backgroundColor: isActive ? '#80bfff' : 'transparent', // Light blue background for active tab
                    fontWeight: 'bold', // Make the text bold
                    '&:hover': {
                      color: '#003366', // Change text color to #003366 on hover
                      backgroundColor: isActive ? '#80bfff' : 'rgba(255, 255, 255, 0.1)', // Keep active tab background on hover
                      fontWeight: 'bold', // Make the text bold on hover
                    },
                  }}
                >
                  {path === '/' ? 'Home' : path.charAt(1).toUpperCase() + path.slice(2)}
                </Button>
              )}
            </NavLink>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;