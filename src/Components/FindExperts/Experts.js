import React from 'react';
import styled from 'styled-components';

import Data from '../../Shared/Data/ExpertInfo';
import Card from '../../Shared/Components/Cards/ExpertCard';

import PrimaryTitle from '../../Shared/Components/Title/PrimaryTitle';

const Experts = () => {
    return (
        <ExpertsWrapper>
            <div className='title'>
                <PrimaryTitle title='Featured Experts' />
            </div>
            <div>
            {
                Data.map(p => {
                    return (
                        <div className='single_card_container'>
                            <Card data={p} />
                        </div>
                    );
                })
            }
            </div>
        </ExpertsWrapper>
    )
};

const ExpertsWrapper = styled.div`
    padding: 10px;
    .single_card_container {
        margin: 15px auto;
    }
`;

export default Experts;
