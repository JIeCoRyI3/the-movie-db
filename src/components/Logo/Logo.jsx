import React from 'react';
import { footerLogo } from './Logo.module.css';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

export default function Logo() {
    return (
        <Link to="/" className={'btn btn-primary'}>
            <Logo />
        </Link>
    );
}
