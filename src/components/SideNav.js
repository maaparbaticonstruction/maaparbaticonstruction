import React from 'react';
import { Drawer, List, ListItem, Box } from '@mui/material';
import { NavLink } from 'react-router-dom'; // Import NavLink for routing
import logo from '../assets/MAA_PARBATI-removebg-preview.png'; // Import the logo

const SideNav = ({ open, onClose }) => { // Accept open and onClose props

  return (
    <div>
      {/* Side Navigation Drawer */}
      <Drawer
        anchor="left" // Opens from the left side
        open={open}
        onClose={onClose} // Use onClose prop
        PaperProps={{
          sx: {
            width: '250px', // Set width as needed
            height: '100vh', // Full height of the viewport
            backgroundColor: '#003366', // Background color
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start', // Align items from the top
            padding: '16px',
          },
        }}
      >
        {/* Logo Background */}
        <Box
          sx={{
            backgroundColor: 'white', // Background behind the logo
            borderRadius: '8px', // Rounded corners for a softer look
            padding: '8px', // Padding around the logo
            width: '100%', // Full width of the drawer
            marginBottom: '16px', // Spacing below the logo
          }}
        >
          <Box
            component="img"
            src={logo}
            alt="Logo"
            sx={{
              width: '60%', // Adjust the width as needed
              maxWidth: '150px', // Max width to keep it from being too large
              display: 'block', // Ensures the image takes its own line
              margin: '0 auto', // Center the logo
            }}
          />
        </Box>

        {/* Content inside the drawer */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            width: '100%',
          }}
        >
          <List>
            {['/', '/services', '/about', '/contact', '/infrastructure'].map((path) => (
              <NavLink 
                key={path} 
                to={path} 
                style={{ textDecoration: 'none', width: '100%' }} // Full width for each link
                activeClassName="active" // Highlight active link using class
              >
                {({ isActive }) => (
                  <ListItem 
                    button 
                    onClick={onClose} // Close drawer on item click
                    sx={{
                      backgroundColor: isActive ? '#80bfff' : 'transparent', // Highlight active item
                      width: '100%', // Full width for ListItem
                      color: isActive ? '#003366' : 'white', // Change text color for active
                    }}
                  >
                    {path === '/' ? 'Home' : path.charAt(1).toUpperCase() + path.slice(2)}
                  </ListItem>
                )}
              </NavLink>
            ))}
          </List>
        </Box>
      </Drawer>
    </div>
  );
};

export default SideNav;
