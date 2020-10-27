import React from 'react';
import styled from 'styled-components';

const Price = () => {
    return (
        <PriceWrapper>
            <div className='price_title'>
                <p>Price</p>
            </div>
            <div className='price_container'>
                <label class="container" >
                    <input type="checkbox" checked='checked' />
                    <span>Free</span>
                </label>
                <label class="container">
                    <input type="checkbox" />
                    <span>Less than $25</span>
                </label>
                <label class="container">
                    <input type="checkbox" />
                    <span>$25-$50</span>
                </label>
                <label class="container">
                    <input type="checkbox" />
                    <span>$50-$100</span>
                </label>
                <label class="container">
                    <input type="checkbox" />
                    <span>More than $100</span>
                </label>
            </div>
        </PriceWrapper>
    )
}

const PriceWrapper = styled.div`
    p {
        font-size: 10px;
        letter-spacing: 1px;
        text-transform: uppercase;
        font-weight: bolder;
        color: rgba(0,0,0,0.4);
    }
    .price_container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        font-size: 12px;
        font-weight: bold;
        color: rgba(0,0,0,0.8);
    }
    span {
        padding-left: 5px;
        letter-spacing: 1px;
    } 
`;

export default Price;
