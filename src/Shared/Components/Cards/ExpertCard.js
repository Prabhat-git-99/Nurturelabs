import React from 'react';
import styled from 'styled-components';
import Price from '../PriceFilter/Price';

import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { BiStopwatch } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiText } from "react-icons/bi";


import PrimaryTitle from '../Title/PrimaryTitle';
import Button from '../Buttons/CardButton';
import Tag from '../Buttons/CardSmallButton';


const ExpertCard = (props) => {
    // console.log(props);
    return (
        <ExpertCardWrapper img={props.data.Image}>
            <div className='card_right'>
                <div className='card_img'></div>
                <div className='price'>
                    <span className='sec_title'>Price: </span><span className='pri'>{props.data.Price}</span>
                </div>
                <div className='star_review'>
                    <span className='star'><FaStar/>{props.data.Rating} </span><span className='reviews'>({props.data.Reviews})</span>
                </div>
            </div>
            <div className='card_separator'></div>
            <div className='card_left'>
                <div className='card_left_top'>
                    <div className='card_left_top_left'>
                        <h2 className='card_primary_title'>{props.data.Name}</h2>
                        <h5 className='card_secondary_title'>{props.data.Subtitle}</h5>
                    </div>
                    <div className='card_left_top_right'>
                        <div className='heart'><FaRegHeart /></div>    
                        <Button text='View Profile' link={props.data.Link} />
                     </div>
                </div>
                <div className='card_left_bottom'>
                    <div className='loc_session sec_title'>
                        <div className='session'>
                            <span className='small_icon'><BiStopwatch /></span>
                            <span className='sec_title'>{props.data.Session}</span>
                        </div>
                        <div className='session'>
                            <span className='small_icon'><HiOutlineLocationMarker /></span>
                            <span className='sec_title'>{props.data.Location}</span>
                        </div>
                        <div className='session'>
                            <span className='small_icon'><BiText /></span>
                            <span className='sec_title'>{props.data.Language}</span>
                        </div>
                    </div>
                    <div className='card_para'>
                        <p>{props.data.Para}</p>
                    </div>
                    <div className='card_tag'>
                        {
                            props.data.Tag.map(p => {
                                return (
                                    <div className='tag'>
                                        <Tag text={p} />
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </ExpertCardWrapper>
    )
}

const ExpertCardWrapper = styled.div`
    display: flex;
    background: white;
    z-index: -2;
    border: 1px solid rgba(0,0,0,0.2);
    flex-direction: row;
    align-items: flex-start;
    position: relative;
    .card_left {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 10px;
    }
    
    .card_right {
        padding: 10px;
    }
    .loc_session {
        display: flex;
        align-items: center;
    }
    .session {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 8px;
        padding-right: 8px;
    }
    .card_img {
        background: url(${props => props.img}) center/cover no-repeat;
        width: 100px;
        height: 100px;
    }
    .card_left_top {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
    }
    .card_tag {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .sec_title {
        font-size: 10px;
        font-weight: bolder;
        color: rgba(0,0,0,0.4);
        letter-spacing: 1px;
    }
    .card_secondary_title {
        color: rgba(0,0,0,0.7);
        margin-top: 1px;
        padding-top: 1px;
        font-size: 13px;
    }
    .card_primary_title {
        font-size: 20px;
        margin: 0;
        padding-bottom: 2px;
        color: rgba(0,0,0,0.8);
    }
    .card_separator {
        position: absolute;
        background: rgba(0,0,0,0.2);
        width: 100%;
        height: 0.5px;
        top: 75px;
        z-index: -1;
    }
    .card_left_top_right {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .heart {
        color: rgb(255, 92, 51);
        padding:10px;
    }
    p {
        font-size: 16px;
        word-wrap: wrap;
        width: 100%;
    }
    .tag {
        padding-left: 10px;
        padding-right: 10px;
    }
    .price {
        padding: 10px;
    }
    .pri {
        color: rgb(0, 230, 138);
        text-transform: uppercase;
        font-size: 14px;
        font-weight: bold;
    }
    .star_review {
        padding: 10px;
        display: flex;
    }
    .star {
        /* color: rgb(255, 204, 51); */
        color: rgb(255,92,51);
        display: flex;
        align-items: center;
        justify-content: center;
        /* padding-left: 5px; */
        margin-right: 5px;
    }
`;

export default ExpertCard
