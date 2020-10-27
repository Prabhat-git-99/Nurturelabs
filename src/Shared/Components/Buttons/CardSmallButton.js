import React from 'react';
import styled from 'styled-components';

const CardSmallButton = (props) => {
    return (
        <CardSmallButtonWrapper>
            <div className='tag_wrapper'>
                <h6>{props.text}</h6>
            </div>
        </CardSmallButtonWrapper>
    )
}

const CardSmallButtonWrapper = styled.div`

    .tag_wrapper {
        background: rgba(0,0,0,0.1);
        border-radius: 50px;
    }
    h6 {
        padding: 3px;
        color: rgba(0,0,0,0.5);
    }
`;

export default CardSmallButton;
