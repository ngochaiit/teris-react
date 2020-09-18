import React, {useState} from 'react';
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';
import { StyledTerisWrapper, StyledTetris} from './styles/StyledTetris'

import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';

const Tetris = ({ type }) => {
    const [dropTime, setDroptime] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    const [player] = usePlayer();
    const [stage, setStage] = useStage(player);

    console.log('re-render');
    return (
        <StyledTerisWrapper>
            <StyledTetris>
            <Stage stage={stage}></Stage>
            <aside>
                {gameOver ? (<Display gameOver={gameOver} text = "Game Over"></Display>) : (<div>
                <Display text = "Score"/>
                <Display text = "Rows"/>
                <Display text="Level"/>
                </div>)}
                
             <StartButton />
            </aside>
            </StyledTetris>
        </StyledTerisWrapper>
    )
}
export default Tetris;