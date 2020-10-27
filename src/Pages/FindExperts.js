import React from 'react';
import styled from 'styled-components';

import Filter from '../Shared/Components/Filter/FilterContainer';
import Experts from '../Components/FindExperts/Experts';


const FindExperts = () => {
    return (
        <FindExpertsWrapper className='main_start'>
            <div className='f_e_w_filter'>
                <Filter />
            </div>
            <div className='f_e_w_experts'>
                <Experts />
            </div>
        </FindExpertsWrapper>
    )
}

const FindExpertsWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    width: 90%;
    margin: 0 auto;
    .f_e_w_filter {
        flex-basis: 20%;
    }
    .f_e_w_experts {
        margin-left: 10px;
        flex-basis: 78%;
    }
`;

export default FindExperts
