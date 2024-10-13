import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Box, Button, useMediaQuery, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assets/MAA_PARBATI-removebg-preview.png';

const Header = ({ onMenuClick }) => {
  const isMobile = useMediaQuery('(max-width:600px)'); // Check if screen size is mobile

  return (
    <AppBar position="static" color="primary">
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: isMobile ? 'space-between' : 'flex-start', // Align items based on screen size
          alignItems: 'center',
          padding: '0 16px', // Add padding on both sides
        }}
      >
        {/* Logo Section */}
        <NavLink to="/" style={{ textDecoration: 'none' }}>
          <Box component="img" src={logo} alt="Logo" sx={{ width: '75px', mr: 2 }} />
        </NavLink>

        {/* Desktop Navigation Links */}
        {!isMobile && (
          <Box sx={{ display: 'flex', gap: '10px', ml: 2 }}> {/* Ensure links start next to the logo */}
            {['/', '/services', '/about', '/contact', '/infrastructure'].map((path) => (
              <NavLink 
                key={path} 
                to={path} 
                style={{ textDecoration: 'none' }}
              >
                {({ isActive }) => (
                  <Button
                    color="inherit"
                    sx={{
                      padding: '10px 15px',
                      color: isActive ? '#FFFFFF' : '#FFFFFF',
                      backgroundColor: isActive ? '#80bfff' : 'transparent',
                      fontWeight: 'bold',
                      fontFamily: 'Inter, sans-serif',
                      '&:hover': {
                        color: '#003366',
                        backgroundColor: isActive ? '#80bfff' : 'rgba(255, 255, 255, 0.1)',
                      },
                    }}
                  >
                    {path === '/' ? 'Home' : path.charAt(1).toUpperCase() + path.slice(2)}
                  </Button>
                )}
              </NavLink>
            ))}
          </Box>
        )}

        {/* Mobile Menu Icon */}
        {isMobile && (
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={onMenuClick} // Handle menu button click
          >
            <MenuIcon sx={{ fontSize: '2rem' }} /> {/* Adjust fontSize as needed */}
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
