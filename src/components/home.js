import React from 'react';
import MyPicture from '../assets/picture.jpg';

const Home = () => {
    return (
        <section style={styles.home}>
            <div style={styles.container}>
                <div style={styles.before_button}>
                    <div style={styles.text_part}>
                        <h1 style={styles.heading}>Hi!</h1>
                        <h1 style={styles.heading}>I am Natnael (Nate)</h1>
                        <p style={styles.introduction}>
                            I'm an IT Engineering graduate with experience in web development, Oracle Cloud administration,
                            network design and implementation, and system design. Currently, I'm looking to further my education
                            and specialize in Cyber Security and Cloud Administration.
                        </p>
                    </div>
                    <div style={styles.mypicture}>
                        <img src={MyPicture} alt='Nate'></img>
                    </div>

                </div>
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
    before_button: {
        textAlign: 'left',
        display: 'flex',
    },
    text_part: {
        padding: 2,
        flex: 1,
    },
    mypicture: {
        fontSize: '20px',
        lineHeight: '1.6',
        marginBottom: '40px',
        textAlign: 'left',
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
