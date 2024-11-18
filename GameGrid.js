import React from 'react';
import Square from './Square';

function GameGrid({ moves, click }) {
    return (
        <div className="game-grid">
            {moves.map((player, index) => (
                <Square key={index} player={player} click={() => click(index)} />
            ))}
        </div>
    );
}

export default GameGrid;
