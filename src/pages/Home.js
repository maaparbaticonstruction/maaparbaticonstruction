import React from 'react';
import heroBg from '../assets/hero-bg.jpg'; // Adjust the path as needed
import colors from './theme'; // Import your color palette

const Home = () => {
    return (
        <div>
            {/* Content Section */}
            <section style={{ textAlign: 'center', padding: '2rem' }}>
                <h2 style={{ color: colors.highlight, fontSize: { xs: '1.8rem', md: '2.5rem' } }}>
                    MAA PARBATI Construction
                </h2>
                <p style={{ color: colors.secondaryText, fontSize: { xs: '0.9rem', md: '1.2rem' } }}>
                    Your trusted partner in quality construction.
                </p>
            </section>

            {/* Hero Section */}
            <div
                style={{
                    backgroundImage: `url(${heroBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    color: colors.primaryText,
                    textAlign: 'center',
                    padding: '3rem 1rem',
                    position: 'relative',
                    height: '650px',
                    minHeight: '400px', // Ensure minimum height for mobile devices
                }}
            >
                <h2 style={{ color: colors.highlight, fontSize: { xs: '1.8rem', md: '2.5rem' } }}>
                    Welcome to MAA PARBATI Construction
                </h2>
                <p style={{ color: colors.secondaryText, fontSize: { xs: '0.9rem', md: '1.2rem' } }}>
                    Building your dreams with passion and precision.
                </p>
                <a
                    href="/maaparbaticonstruction/#/services"
                    style={{
                        padding: '0.75rem 1.5rem',
                        backgroundColor: colors.buttonBg,
                        color: colors.buttonText,
                        borderRadius: '5px',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        transition: '0.3s',
                        marginTop: '20px',
                        display: 'inline-block',
                        fontSize: { xs: '0.9rem', md: '1rem' }, // Responsive button text size
                    }}
                    onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = '#80bfff'; // Change to the same hover color as the menu items
                        e.currentTarget.style.color = '#FFFFFF'; // Ensure text color is white
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = colors.buttonBg; // Revert to original background color
                        e.currentTarget.style.color = colors.buttonText; // Revert to original text color
                    }}
                >
                    Explore Our Services
                </a>
            </div>

            {/* Other sections can go here */}
        </div>
    );
};

export default Home;
