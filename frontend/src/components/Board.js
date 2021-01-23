import React from 'react';

import '../index.css';
import Square from './Square.js';


export default class Board extends React.Component {
    renderSquare(i,shade){
        console.log(this.props.squares[i])
        return <Square  
            key ={i}
            keyVal = {i}
            style={this.props.squares[i] ? this.props.squares[i].style : null}
            shade={shade}
            onClick={() => this.props.onClick(i)}
        />
    }

    render(){
        const board = [];
        for(let i = 0; i < 8;i++){
            const rows = [];
            for(let j = 0; j < 8;j++){
                var thisSquare = i*8 + j; 
                var rowBit = i % 2 === 0 ? 1 : 0;
                const shade = (thisSquare + rowBit) % 2 === 1 ? "light-square" : "dark-square";
                rows.push(this.renderSquare(thisSquare, shade));
            }
            board.push(<div className="board-row" key={i}>{rows}</div>)
        }
        return (
            <div>
              {board}
            </div>
          );
    }
}