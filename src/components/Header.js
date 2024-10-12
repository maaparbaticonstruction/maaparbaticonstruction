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
        <Box component="img" src={logo} alt="Logo" sx={{ width: '50px', mr: 2 }} />
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
                    color: isActive ? 'red' : 'white', // Active text color
                    backgroundColor: 'transparent', // Remove background color for both active and inactive
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)', // Change on hover
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
