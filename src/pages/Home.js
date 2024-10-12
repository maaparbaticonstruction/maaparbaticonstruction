import React from 'react';
import heroBg from '../assets/hero-bg.jpg'; // Adjust the path as needed
import colors from './theme'; // Import your color palette

const Home = () => {
    return (
        <div>
            {/* Content Section */}
            <section style={{ textAlign: 'center', padding: '2rem' }}>
                <h2 style={{ color: colors.highlight }}>MAA PARBATI Construction</h2>
                <p style={{ color: colors.secondaryText }}>Your trusted partner in quality construction.</p>
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
                }}
            >
                <h2 style={{ color: colors.highlight }}>Welcome to MAA PARBATI Construction</h2>
                <p style={{ color: colors.secondaryText }}>Building your dreams with passion and precision.</p>
                <a
                    href="/services"
                    style={{
                        padding: '0.75rem 1.5rem',
                        backgroundColor: colors.buttonBg,
                        color: colors.buttonText,
                        borderRadius: '5px',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        transition: '0.3s',
                        marginTop: '20px', // Added margin to move the button down
                        display: 'inline-block', // Ensure the margin affects the button
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = colors.highlight)}
                    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = colors.buttonBg)}
                >
                    Explore Our Services
                </a>
            </div>

            {/* Other sections can go here */}
        </div>
    );
};

export default Home;
