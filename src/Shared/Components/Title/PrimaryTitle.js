import React from 'react';
import styled from 'styled-components';

const PrimaryTitle = (props) => {
    return (
        <PrimaryTitleWrapper>
            <h3>{props.title}</h3>
        </PrimaryTitleWrapper>
    )
}

const PrimaryTitleWrapper = styled.div`
    h3 {
        font-size: 20px;
        color: rgba(0,0,0,0.8);
    }
`;

export default PrimaryTitle;
