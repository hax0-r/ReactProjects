import React from 'react'
import styled from 'styled-components'

export default function StartGame({ toggleGameplay }) {
    return (
        <>

            <Container>
                <img src="/assets/Dices.png" alt="" />
                <div>
                    <h1>DICE GAME</h1>
                    <Button onClick={toggleGameplay}>Play Now</Button>
                </div>
            </Container>
        </>
    )
}

const Container = styled.div`
    max-width: 1180px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: hidden;
    img{
        max-width: 33rem;
        width: 100%;
    }
    div{
        text-align:end;
        h1{
            font-size: 5rem;
            font-weight: bold;
            white-space: nowrap;
        }
    }
    @media (max-width: 768px) {
        flex-wrap: wrap;
        img{
            max-width: 20rem;
    }
        div{
            margin-top: -12rem;
        text-align:center;
        h1{
            font-size: 3rem;
            font-weight: bold;
            white-space: nowrap;
        }
    }
    }
    

`

const Button = styled.button`
    background-color: #000;
    border: 2px solid black;
    border-radius: 5px;
    color: white;
    padding: .7rem 2rem;
    text-align: center;
    font-size: 1.2rem;
    font-weight: 500;
    cursor: pointer;
    transition: 200ms all;
    &:hover {
        background-color: #ffffff;
        color: #000;
        }
`
