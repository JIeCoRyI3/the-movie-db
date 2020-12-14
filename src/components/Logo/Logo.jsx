import React from 'react';
import { footerLogo } from './Logo.module.css';
import logo from '../../assets/images/logo.png';

export default function Logo() {
    return (
        <a href="/">
            <img className={footerLogo} src={logo} alt="logo" />
        </a>
    );
}
