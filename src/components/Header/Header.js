import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="flex justify-center">
            <nav className=" w-60 flex justify-evenly">
                <NavLink to="/home" className="no-underline text-green-500 font-bold">Home</NavLink>
                <NavLink to="/addContact" className="no-underline text-green-500 font-bold">Add Contact</NavLink>
                <NavLink to="/login" className="no-underline text-green-500 font-bold">Login</NavLink>
            </nav>
        </div>
    );
};

export default Header;