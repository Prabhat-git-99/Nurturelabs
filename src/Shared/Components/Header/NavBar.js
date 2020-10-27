import react from 'react';
import styled from 'styled-components';
import NavLin from './NavLin';
import Green from '../../../Images/enter.svg';
import RightNav from './RightNav';
import { Link } from 'react-router-dom';

const NavBar = props => {
    return (
        <NavBarWrapper green={Green}>
            <nav className='nav_container'>
                <div className='logo_container'>
                    <div className='status'>
                    </div>
                    <Link to='/' className='logo_link'>
                        <h3>Logo</h3>
                    </Link>
                </div>
                {/* <div className='nav_second'> */}
                <div className='nav_link_container'>
                    <NavLin />
                </div>
                <div className='right_nav'>
                    <RightNav />
                </div>
                {/* </div> */}
            </nav>
        </NavBarWrapper>
    )
};


const NavBarWrapper = styled.div`
    background: rgba(195, 164, 101, 0.16);
    height: 68px;
    padding-right: 10px;
    padding-left: 10px;
    z-index: 100;
    .nav_container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .status {
        width: 25px;
        height: 25px;
        background: url(${props => props.green}) center no-repeat;
        background-size: 25px;
        padding: 5px;
    }
    .logo_container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-basis: 10%;
    }
    .logo_link {
        text-decoration: none;
        color: rgba(0,0,0,0.8);
    }
    .nav_second {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-grow: 1;
    }
`;

export default NavBar;
