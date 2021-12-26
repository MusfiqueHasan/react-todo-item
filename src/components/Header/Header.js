import React from 'react';
import { NavLink } from 'react-router-dom';
import { clearTheCart } from '../../localStorage/localDb';

const Header = () => {

    const handleLogout =()=>{
        clearTheCart()
    }
    return (
        <div className="flex justify-center">
            <nav className=" w-96 flex justify-evenly">
                <NavLink to="/home" className="no-underline text-green-500 font-bold">Home</NavLink>
                <NavLink to="/addContact" className="no-underline text-green-500 font-bold">Add Contact</NavLink>
                <NavLink to="/login" className="no-underline text-green-500 font-bold">Login</NavLink>
                <NavLink to="/registration" className="no-underline text-green-500 font-bold">Registration</NavLink>
                <button
                    onClick={handleLogout}
                    className="no-underline text-green-500 font-bold">logout</button>
            </nav>
        </div>
    );
};

export default Header;