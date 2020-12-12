import React from 'react';
import { footer, footer_logo } from  './Footer.module.css';
import logo from '../../assets/images/logo.png';

export default function Footer () {
    return (
        <footer className={ footer }>
            <img className={footer_logo} src={logo} alt="logo"></img>
        </footer>
    );
};