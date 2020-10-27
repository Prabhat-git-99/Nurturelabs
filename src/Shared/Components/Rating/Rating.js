import React from 'react';
import styled from 'styled-components';
import { FaStar } from "react-icons/fa";


const Rating = () => {
    return (
        <RatingWrapper>
            <div className='title'>
                <p>Ratings</p>
            </div>
            <div className='rating_container'>
            <label class="container">
                <input type="checkbox" checked='checked'/>
                <span class="checkmark"></span>
                <span className='star four_star'>
                    <FaStar/><FaStar/><FaStar/><FaStar/>
                </span>
            </label>
            <label class="container">
                <input type="checkbox" />
                <span class="checkmark"></span>
                <span className='star three_star'>
                <FaStar/><FaStar/><FaStar/>
                </span>
            </label>
            <label class="container">
                <input type="checkbox" />
                <span class="checkmark"></span>
                <span className='star two_star'>
                <FaStar/><FaStar/>
                </span>
            </label>
            <label class="container">
                <input type="checkbox" />
                <span class="checkmark"></span>
                <span className='star one_star'>
                <FaStar/>
                </span>
            </label>
            </div>
        </RatingWrapper>
    )
};

const RatingWrapper = styled.div`
    .rating_container {
        display: flex;
    flex-wrap: wrap;
    /* justify-content: space-baseline; */
    align-items: center;
    width: 100%;
    }
    .rating_container>label {
        flex: 0 22%;
        /* box-sizing: border-box; */
    }

    .container {
  /* display: block; */
  position: relative;
  padding-left: 30px;
  margin-bottom: 8px;
  cursor: pointer;
  font-size: 12px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin: 5px 15px;
}

.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #eee;
}

.container:hover input ~ .checkmark {
  background-color: #ccc;
}

.container input:checked ~ .checkmark {
  background-color: #2196F3;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.container input:checked ~ .checkmark:after {
  display: block;
}

.container .checkmark:after {
  left: 6px;
  top: 2px;
  width: 4px;
  height: 9px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
.star {
    color: rgb(255, 204, 51);
}
    p {
        font-size: 10px;
        letter-spacing: 1px;
        text-transform: uppercase;
        font-weight: bolder;
        color: rgba(0,0,0,0.4);
    }

`;

export default Rating;
