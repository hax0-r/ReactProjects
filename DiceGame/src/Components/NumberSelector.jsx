import React, { useState } from 'react';
import styled from 'styled-components';

export default function NumberSelector({ selectedNumber, setSelectedNumber }) {
    const boxArray = [1, 2, 3, 4, 5, 6];
    console.log(selectedNumber);

    return (
        <>
            <MainContainer>
                <SubContainer>

                    {boxArray.map((num, idx) => (
                        <Box
                            $selectednumbercolorchange={num === selectedNumber}
                            // i got warning if not use $ in start bcz i use  variable inside css so it will take as a prop
                            // selectednumbercolorchange={num === selectedNumber ? "true" : undefined}
                            key={idx}
                            onClick={() => setSelectedNumber(num)}
                        >
                            {num}
                        </Box>
                    ))}
                </SubContainer>
                <p>Select Number</p>
            </MainContainer>
        </>
    );
}

const MainContainer = styled.div`
@media (max-width:769px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
}
`
const SubContainer = styled.div`
display: flex;
gap: .5rem;
margin-bottom: .5rem;
`
const Box = styled.div`
    border: 2px solid #000;
    display: grid;
    place-items: center;
    width: 2.8rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    height: 2.8rem;
    border-radius: 5px;
    font-size: 1.2rem;
    font-weight: 500;
    cursor: pointer;
    transition: 200ms all;
    background-color: ${(props) => (props.$selectednumbercolorchange ? "#000" : "#fff")};
    color: ${(props) => (!props.$selectednumbercolorchange ? "#000" : "#fff")};
    &:hover {
        background-color: #000;
        color: #fff;
    }
`;
