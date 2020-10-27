import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

const CardButton = props => {
    return (
        <CardButtonWrapper>
            <Link to={props.link}>
                <input type='button' value={props.text} />
            </Link>
        </CardButtonWrapper>
    )
}

const CardButtonWrapper = styled.div`
    padding: 10px;
    
    input {
        background: rgb(255, 92, 51);
        color: white;
        font-size: 10px;
        font-weight: bold;
        letter-spacing: 0.5px;
        border: 1px solid whitesmoke;
        padding: 8px;
        border-radius: 5px;
        cursor: pointer;
    }
    input:hover {
        background: white;
        border: 1px solid rgb(255,92,51);
        color: rgb(255,92,51);
    }

`;

export default CardButton;
