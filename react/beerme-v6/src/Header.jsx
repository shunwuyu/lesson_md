import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({siteName}) => {
    return (
        <h1>
            <Link to="/">{siteName}</Link>
        </h1>
    )
}

export default Header