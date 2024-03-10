import React from 'react'
import styled from 'styled-components'

export default function TotalScore({ score }) {
    return (
        <>
            <ScoreContainer>
                <h1>{score}</h1>
                <p>Total Score</p>
            </ScoreContainer>
        </>
    )
}

const ScoreContainer = styled.div`
max-width: 7rem;
width: 100%;
text-align: center;
h1{    
    font-size: 3.5rem;
    margin-bottom:-1rem ;
}
@media (max-width:769px) {
    max-width: unset;
}
`