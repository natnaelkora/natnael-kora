import React from 'react';
import GithubIcon from '../assets/icon-github.png';
import LinkedinIcon from '../assets/icon-linkedin.png';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <div style={styles.container}>
                <p style={styles.name}>Natnael G. Kora </p>
                <nav>
                    <ul style={styles.navList}>
                        <li style={styles.navItem}><a href="/natnael-kora/home" >Home</a></li>
                        <li style={styles.navItem}><a href="/natnael-kora/about" >About</a></li>
                        <li style={styles.navItem}><a href="/natnael-kora/portfolio" >Portfolio</a></li>
                        <li style={styles.navItem}><a href="/natnael-kora/resume" >Resume</a></li>
                        <li style={styles.navItem}><a href="/natnael-kora/contact" >Contact</a></li>
                        <li style={styles.navItem}><a href="https://youtu.be/dQw4w9WgXcQ" >T&C</a></li>
                    </ul>
                </nav>
                <div style={styles.socialLinks}>
                    <a href="https://www.linkedin.com/in/natnael-gebremeskel-kora-42a70a195/" target="_blank" rel="noopener noreferrer" style={styles.link}> <img src={LinkedinIcon} alt='natnaelkora' style={styles.icons} /> </a>
                    <a href="https://www.github.com/natnaelkora" target="_blank" rel="noopener noreferrer" style={styles.link}> <img src={GithubIcon} alt='natnaelkora' style={styles.icons} /> </a>
                </div>
            </div>
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: '#002657',
        color: 'white',
        padding: '20px 0',
        textAlign: 'left',
    },
    container: {
        margin: '0 auto',
    },
    socialLinks: {
        display: 'flex',
        justifyContent: 'left',
        gap: '20px',
        marginTop: '10px',
        marginLeft: 20,
    },
    navList: {
        display: 'flex',
        justifyContent: 'flex-start',
        listStyleType: 'none',
        marginLeft: 20,
        padding: 2,
    },
    navItem: {
        marginRight: '20px',
        textDecoration: 'none', //not working
    },
    link: {
        
    },
    name:{
        marginLeft: 20,
        fontSize: '25px',
        color:'white',
    },
    icons:{
        maxWidth: '20px',
        marginRight: '-15px',
    },
};

export default Footer;
