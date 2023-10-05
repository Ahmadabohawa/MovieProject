import React from 'react';
import { Link } from 'react-router-dom';
import user from "../../images/baby.jpg";
import "./Header.css"
const Header = () => {
    return (
        <div className='header'>
            <Link to="/">
                <div className='logo'>Movie App</div>
            </Link>
        </div>
    );
};

export default Header;