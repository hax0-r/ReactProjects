import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RollDice from './RollDice'

export default function GamePLay() {
    const [score, setScore] = useState(0);
    const [selectedNumber, setSelectedNumber] = useState();
    const [currentDice, setCurrentDice] = useState(1);

    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    const roleDice = () => {
        if (!selectedNumber) {
            alert("Plz select a number than click on Dice");
            return
        }
        const randomNumber = generateRandomNumber(1, 7);
        setCurrentDice(() => randomNumber);

        if (selectedNumber === randomNumber) {
            setScore((prev) => prev + randomNumber)
        } else {
            setScore((prev) => prev - 2)
        }

        setSelectedNumber(undefined)
    }
    const reset = () => {
        setScore(0)
        setCurrentDice(1)
    }

    return (
        <>
            <Box>
                <MainContainer>
                    <SubContainer>
                        <TotalScore score={score} />
                        <NumberSelector selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />
                    </SubContainer>
                </MainContainer>
                <RollDice currentDice={currentDice} roleDice={roleDice} />
                <Reset>
                    <button onClick={reset}>Reset</button>
                </Reset>
            </Box>
        </>
    )
}

const Box = styled.div``
const Reset = styled.div`
display: flex;
justify-content: center;
margin-top: 1rem;
button{
        
        border: 2px solid #000;
        display: grid;
        place-items: center;
        width: 7rem;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
        height: 2.8rem;
        border-radius: 5px;
        font-size: 1.2rem;
        font-weight: 500;
        cursor: pointer;
        transition: 200ms all;
        background-color:#fff;
        color: #000;
        &:hover {
            background-color: #000;
            color: #fff;
        }
    }
`
const MainContainer = styled.div``
const SubContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3vw;
    @media (max-width:769px) {
        flex-wrap: wrap;
        gap: 2rem;
    }
`