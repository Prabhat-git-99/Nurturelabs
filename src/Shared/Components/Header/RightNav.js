import React from 'react';
import styled from 'styled-components';
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiMessage2Line } from "react-icons/ri";
import { BiDownArrow } from "react-icons/bi";
import Profile from '../../../Images/profile.svg';

const RightNav = () => {
    return (
        <RightNavWrapper profile={Profile}>
            <div className='right_nav_container'>
                <ul className='right_links'>
                <li className='right_link'> 
                    <IoMdNotificationsOutline />
                </li>
                <li className='right_link'> 
                    <RiMessage2Line />
                </li>
                <li className='right_link pro'> 
                    <div className='profile'>
                    </div>
                    <span>
                        <BiDownArrow />
                    </span>
                </li>
                </ul>
            </div>
        </RightNavWrapper>
    )
}

const RightNavWrapper = styled.div`
    padding-right: 10rem;
    .right_links {
        list-style: none;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .right_link {
        text-decoration: none;
        padding-left: 9px;
        padding-right: 9px;
        font-size: 20px;
        color: orange;
        font-weight: bolder;
    }
    .profile {
        background: url(${props => props.profile}) center no-repeat;
        width: 30px;
        height: 30px;
        background-size: 30px;
    }
    .pro {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    span {
        padding-left: 5px;
    }
`;

export default RightNav;
