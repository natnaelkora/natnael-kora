import React from 'react';
import MyLogo from '../assets/logo-cropped.png';

const Header = () => {
    return (
        <header style={styles.header}>
            <nav style={styles.nav}>
                <a href="/" style={styles.logoLink}>
                    <img src={MyLogo} alt='' style={styles.logo} />
                </a>
                <ul style={styles.navList}>
                    <li style={styles.navItem}><a href="/home" style={styles.navLink}>Home</a></li>
                    <li style={styles.navItem}><a href="/about" style={styles.navLink}>About</a></li>
                    <li style={styles.navItem}><a href="/portfolio" style={styles.navLink}>Portfolio</a></li>
                    <li style={styles.navItem}><a href="/resume" style={styles.navLink}>Resume</a></li>
                    <li style={styles.navItem}><a href="/contact" style={styles.navLink}>Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

const styles = {
    header: {
        backgroundColor: '#D8ECFF',
        padding: '20px 0',
    },
    nav: {
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    logoLink: {
        display: 'inline-block',
    },
    logo: {
        maxHeight: '64px',
        marginLeft: 20,
        padding: 2,
    },
    navList: {
        display: 'flex',
        justifyContent: 'flex-end',
        listStyleType: 'none',
        marginRight: 20,
        padding: 2,
    },
    navItem: {
        marginLeft: '20px',
    },
    navLink: {
        color: 'black',
        textDecoration: 'none',
        fontSize: '16px',
    },
};

export default Header;
