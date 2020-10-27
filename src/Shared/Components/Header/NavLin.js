import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavLin = () => {
    return (
        <NavLinWrapper>
            <ul className='nav_links'>
                <li>
                    <NavLink to='/dashboard' exact>
                        Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/' exact>
                        Find Experts
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/discuss' exact>
                        Discuss
                    </NavLink>
                </li>
            </ul>
        </NavLinWrapper>
    )
}

const NavLinWrapper = styled.div`
    .nav_links {
        list-style: none;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .nav_links a {
        text-decoration: none;
        color: rgba(0,0,0,0.7);
        padding: 0.3rem;
        font-weight: bolder;
        border: 1px solid transparent;
        padding-bottom: 1.2rem;
        
    }
    .nav_links a:hover,
    .nav_links a:active,
    .nav_links a.active {
        border-bottom: 3px solid orange;
        border-width: 3px;
        color: orange;
    }
    li {
        padding: 10px;
        padding-right: 20px;
        padding-left: 20px;
    }
    
`;

export default NavLin;
