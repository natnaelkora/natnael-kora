import React from 'react';

const Home = () => {
    return (
        <section style={styles.home}>
            <div style={styles.container}>
                <h1 style={styles.heading}>Welcome to My Portfolio</h1>
                <p style={styles.introduction}>
                    I'm an IT Engineering graduate with experience in web development, Oracle Cloud administration,
                    network design and implementation, and system design. Currently, I'm looking to further my education
                    and specialize in Cyber Security and Cloud Administration.
                </p>
                <a href="/portfolio" style={styles.ctaButton}>View My Work</a>
            </div>
        </section>        
    );
};

const styles = {
    home: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#C6E3FF',
        fontFamily: 'Verdana',
        textAlign: 'center',
        padding: '0 20px',
    },
    container: {
        maxWidth: '800px', // was 800px
    },
    heading: {
        fontSize: '48px',
        margin: '0 0 20px 0',
    },
    introduction: {
        fontSize: '20px',
        lineHeight: '1.6',
        marginBottom: '40px',
    },
    ctaButton: {
        padding: '10px 20px',
        fontSize: '18px',
        color: '#282c34',
        backgroundColor: 'white',
        textDecoration: 'none',
        borderRadius: '5px',
        transition: 'background-color 0.3s',
    },
};

export default Home;
