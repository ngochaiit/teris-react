import React from 'react';
import Cell from './Cell';
import { StyledStage } from './styles/StyleStage';

const Stage = ({ stage }) => (
    <StyledStage width={stage[0].length} height={stage.length}>
        {console.log(stage)}
        {stage.map(row => row.map((cell, x) => <Cell  key={x} type={cell[0]}/>))}
    </StyledStage>
)

export default Stage;