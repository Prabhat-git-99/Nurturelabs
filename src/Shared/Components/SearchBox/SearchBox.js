import React from 'react';
import styled from 'styled-components';

import { AiOutlineSearch } from "react-icons/ai";


const SearchBox = (props) => {
    return (
        <SearchBoxWrapper>
            <p>{props.title}</p>
            <div className='search_bar'>
                <input type='text' placeholder='Type here..' /><div className='search_img'><AiOutlineSearch /></div>
            </div>
        </SearchBoxWrapper>
    )
}

const SearchBoxWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    p {
        font-size: 10px;
        letter-spacing: 1px;
        text-transform: uppercase;
        font-weight: bolder;
        color: rgba(0,0,0,0.4);
    }
    .search_title {
        margin: 0;
    }
    input {
        padding: 7px;
        border: 2px solid rgba(0,0,0,0.1);
        background: rgb(230, 242, 255);
        width: 100%;
    }
    .search_box {
        margin: 0;
        width: 100%;
    }
    .search_img {
        color: rgb(0, 230, 184);
        font-size: 20px;
        position: absolute;
        right: 10px;
        /* padding: 2px; */
    }
    .search_bar {
        display: flex;
        position: relative;
        align-items: center;
        width: 100%;
    }
`;

export default SearchBox;
