import React, { useState } from 'react'
import styled from 'styled-components'

export default function RollDice({ currentDice, roleDice }) {



    return (
        <>
            <DiceContainer>
                <div onClick={roleDice}>
                    <img src={`/assets/dice_${currentDice}.png`} alt="Dices" />
                </div>
                <p>Click on dice to roll</p>
            </DiceContainer>
        </>
    )
}

const DiceContainer = styled.div`
    
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 3rem;
div{
    cursor: pointer;
}
@media (max-width:769px) {
    
    margin-top: 1rem;
}
`
