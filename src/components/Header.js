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
          justifyContent: 'flex-start', // Align items to the left
          alignItems: 'center',
          padding: '0 16px', // Add some padding
        }}
      >
        {/* Make the logo clickable */}
        <NavLink to="/" style={{ textDecoration: 'none' }}>
          <Box component="img" src={logo} alt="Logo" sx={{ width: '75px', mr: 2 }} />
        </NavLink>

        {isMobile && ( // Show menu icon only on mobile
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={onMenuClick} // Handle menu button click
          >
            <MenuIcon />
          </IconButton>
        )}

        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '10px', ml: 2 }}> {/* Add margin to the left */}
          {['/', '/services', '/about', '/contact', '/infrastructure'].map((path) => (
            <NavLink 
              key={path} 
              to={path} 
              style={{ textDecoration: 'none' }} 
              isActive={(match) => match ? true : false}
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
      </Toolbar>
    </AppBar>
  );
};

export default Header;
