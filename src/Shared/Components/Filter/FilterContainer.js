import React from 'react';
import styled from 'styled-components';

import PrimaryTitle from '../Title/PrimaryTitle';
import SearchBox from '../SearchBox/SearchBox';
import Rating from '../Rating/Rating';
import Price from '../PriceFilter/Price';
import Service from '../Service/Service';

const FilterContainer = () => {
    return (
        <FilterContainerWrapper>
            <div className='title'>
                <PrimaryTitle title='Filters' />
            </div>
            <div className='filters'>
                <div className='search_container'>
                <div className='search_filter'>
                    <SearchBox title='Expertise' />
                </div>
                <div className='search_filter'>
                    <SearchBox title='Focus Area' />
                </div>
                </div>
                <div className='rating_container'>
                    <Rating />
                </div>
                <div className='price_container'>
                    <Price />
                </div>
                <div className='service_container'>
                    <Service />
                </div>
            </div>
        </FilterContainerWrapper>
    )
};

const FilterContainerWrapper = styled.div`
    padding: 10px;
    .filters {
        background: white;
        padding: 10px;
        border: 1px solid rgba(0,0,0,0.2);
    }
    .search_container, .rating_container, .price_container, .service_container {
        margin: 30px auto;
    }
`;

export default FilterContainer;
