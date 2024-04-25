// rsc

import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {

    const activeStyle = 'underline';

    return (
        <nav className="flex justify-between items-center z-10 w-full py-5 px-8 text-sm font-light">
            <ul className="flex items-center gap-3">

                <li className="font-semibold text-lg">
                    <NavLink
                        to='/'
                        className={({isActive}) => isActive ? activeStyle : undefined}
                    >
                        Shopi
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to='/all'
                        className={({isActive}) => isActive ? activeStyle : undefined}
                    >
                        All
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to='/clothes'
                        className={({isActive}) => isActive ? activeStyle : undefined}

                    >
                        Clothes
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to='/electronics'
                        className={({isActive}) => isActive ? activeStyle : undefined}
                    >
                        Electronics
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to='/fornitures'
                        className={({isActive}) => isActive ? activeStyle : undefined}
                    >
                        Fornitures
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to='/toys'
                        className={({isActive}) => isActive ? activeStyle : undefined}>
                        Toys
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to='/others'
                        className={({isActive}) => isActive ? activeStyle : undefined}
                    >
                        Others
                    </NavLink>
                </li>
            </ul>

            <ul className="flex items-center gap-3">
                <li>
                    jayrGil@gmail.com
                </li>

                <li>
                    <NavLink
                        to='/my-orders'
                        className={({isActive}) => isActive ? activeStyle : undefined}
                    >
                        My orders
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to='/my-account'
                        className={({isActive}) => isActive ? activeStyle : undefined}
                    >
                        My account
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to='/sign-out'
                        className={({isActive}) => isActive ? activeStyle : undefined}
                    >
                        Sign out
                    </NavLink>
                </li>

                <li>
                    🛒 0
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;