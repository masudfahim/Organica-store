import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center footer p-4 text-white'>
            <p><small>copyright © {year} </small></p>
        </footer>
    );
};

export default Footer;