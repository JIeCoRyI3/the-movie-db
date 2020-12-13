import React from 'react';
import { footer } from './Footer.module.css';
import Logo from '../Logo';

export default function Footer() {
    return (
        <footer className={footer}>
            <Logo />
        </footer>
    );
}
