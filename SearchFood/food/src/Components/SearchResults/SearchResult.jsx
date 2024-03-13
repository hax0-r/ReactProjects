import React from 'react'
import styled from 'styled-components'
import { BASE_URL } from '../../Globle'

export default function SearchResult({ data }) {
    // console.log(food);
    return (
        <>
            <FoodCardCon>
                {
                    data?.map(({ image, name, text, price }, idx) => (
                        <Cards key={idx}>
                            <div><img src={BASE_URL + image} alt="" /></div>
                            <div>
                                <h1>{name}</h1>
                                <p>{text}</p>
                                <button>${price.toFixed(2)}</button>
                            </div>
                        </Cards>
                    ))
                }
            </FoodCardCon>
        </>
    )
}

const FoodCardCon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 3vw;
  padding-top: 0;
`
const Cards = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 1rem;
padding: 1rem;
max-width: 29.5rem;
background: rgba(255, 255, 255, 0.2);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(255, 255, 255, 0.3);
@media (max-width:450px) {
    flex-wrap: wrap;
    text-align: center;
}
img{
    user-select: none;
}
  h1{
    color: #ffffff;
    text-transform: capitalize;
    line-height: 2rem;
    font-size: 2rem;
  }
  p{
    color: #ffffff;
    padding: .9rem 0;
    line-height:1.4rem;
  }
  button{
    padding: .65rem 2rem;
    border: none;
    border-radius: 7px;
    font-weight: 500;
    letter-spacing: .04rem;
    background-color: #ff0000ca;
  color: #ffffff;
  user-select: none;
  cursor: pointer;
  transition: 200ms all;
  &:hover{
    background-color: #ff0000;
  }
  }
`