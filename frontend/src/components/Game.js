import React from 'react';

import '../index.css';
import Board from './Board.js';
import boardInit from '../helpers/BoardInit';

export default class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      squares: boardInit(),
      player: 1,
      history: ['NewGame'],
      souceClick: -1,
      whiteTurn : true
    };

  }

  handleClick(i) {
    const squares = this.state.squares
    const squareOccupied = Boolean(squares[i]);
    const src = this.state.sourceClick;
    const dest = i;
    const player = this.state.player;
    const opponent = player === 1 ? 2 : 1;
    const srcPiece = squares[src];

    if(squareOccupied && src === -1){
      if(this.state.player === squares[i].player){
        squares[i].style = { ...squares[i].style, backgroundColor: "RGB(111,143,114)" }; // Emerald from http://omgchess.blogspot.com/2015/09/chess-board-color-schemes.html
        this.setState({souceClick : i});
      }
      return;
    }
    
    
    srcPiece.style = { ...squares[this.state.souceClick].style, backgroundColor: "" };
     
    if(srcPiece.isThisMovePossible(src, i) && pathIsClear(squares, src, dest) && !isMate(squares, opponent)){
      if(srcPiece.type === 'ki'&& Math.abs(src - dest) > 1 &&srcPiece){
        //check if castle is possible, king is not in check ,intermediate squares are safe and unocupied, niether piece has moved
      }
      if(srcPiece.type === 'p' &&( (dest % 7=== 0 || dest % 9 === 0) && !squares[dest]) ){
        var lastMove = this.state.history[this.state.history.length - 1];
        if(lastMove === ){

        }
      }

      if(squareOccupied && squares[i].player !== this.state.player){
        squares[i] = srcPiece;
        squares[this.state.souceClick] = null;
        var moveName = srcPiece.type.concat();
        this.state.history.push(moveName);
      }
      checkWin(squares, player);
    }

    //move capture en passant
    //castle
    //if is check for not player 
    this.setState({souceClick : -1})
  }

  render() {
    // rotates board 180
    if(this.state.player === 1){
     playerSquares =this.state.squares.reverse();
    }
    else{
      playerSquares =this.state.squares;
    }

    return (
      <div>
        <div className="game">
          <div className="game-board">
            <Board
              squares={playerSquares}
              onClick={(i) => this.handleClick(i)}
            />
          </div>
          <div className="game-info">
            {/* <h3>Turn</h3>
            <div id="player-turn-box" style={{ backgroundColor: this.state.turn }}>

            </div>
            <div className="game-status">{this.state.status}</div> */}

            {/* <div className="fallen-soldier-block">

              {<FallenSoldierBlock
                whiteFallenSoldiers={this.state.whiteFallenSoldiers}
                blackFallenSoldiers={this.state.blackFallenSoldiers}
              />
              }
            </div> */}

          </div>
        </div>

        <div className="icons-attribution">
          <div> <small> Chess Icons And Favicon (extracted) By en:User:Cburnett [<a href="http://www.gnu.org/copyleft/fdl.html">GFDL</a>, <a href="http://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA-3.0</a>, <a href="http://opensource.org/licenses/bsd-license.php">BSD</a> or <a href="http://www.gnu.org/licenses/gpl.html">GPL</a>], <a href="https://commons.wikimedia.org/wiki/Category:SVG_chess_pieces">via Wikimedia Commons</a> </small></div>
        </div>
        <ul>
          {/* <li><a href="https://github.com/TalhaAwan/react-chess" target="_blank">Source Code</a> </li>
          <li><a href="https://www.techighness.com/post/develop-two-player-chess-game-with-react-js/">Blog Post</a></li> */}
        </ul>
      </div>


    );
  }
    // const moves = history.map((step, move) => {
    //   const desc = move ?
    //     'Go to move #' + move :
    //     'Go to game start';
    //   return (
    //     <li key={move}>
    //       <button onClick={() => this.jumpTo(move)}>{desc}</button>
    //     </li>
    //   );
    // });

    // let status;
    // if (winner) {
    //   status = "Winner: " + winner;
    // } else {
    //   status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    // }

    // return (
    //   <div className="game">
    //     <div className="game-board">
    //       <Board
    //         squares={current.squares}
    //         onClick={i => this.handleClick(i)}
    //       />
    //     </div>
    //     <div className="game-info">
    //       <div>{status}</div>
    //       <ol>{moves}</ol>
    //     </div>
    //   </div>
    // );
 // }
}

// ========================================
function getKingPosition(squares, player){
  return squares.reduce( (acc, curr, i) => acc || ( (curr && curr.player === player && curr.type === 'ki' && i), null) );
  
}
function pathIsClear(squares, src, dest){
  if(squares.src.type === 'kn'){
    return true;
  }
  var distance = Math.abs(src-dest);
  var start = Math.min(src,dest);
  if((src - dest) % 9 === 0){
    for(let i = 1;( i * 9 + start) < 64; i++){
      if(squares[start+i * 9]){
        return false;
      }
    }
    return true;
  }
  else if((src - dest) % 7 === 0){
    for(let i = 1;( i * 7 + start) < 64; i++){
      if(squares[start+i * 7]){
        return false;
      }
    }
    return true;
  }
  else if((src - dest) % 8 === 0){
    for(let i = 1;( i * 8 + start) < 64; i++){
      if(squares[start+i * 8]){
        return false;
      }
    }
    return true;
  }
  else if(Math.floor(src/8) ===  Math.floor(dest / 8 )){
    for(let i = 1; i < distance; i++){
      if(squares[start+i]){
        return false;
      }
    }
    return true;
  }
  return false;
}

function isMate(squares, attackingPlayer){
  var opponent = attackingPlayer === 1 ? 2 : 1; 
  var enemyKing = getKingPosition(squares, opponent);
  return squares.reduce( (acc, curr, i) => acc || 
  ( (curr && curr.player === attackingPlayer && curr.isMovePossible(i, enemyKing) && pathIsClear(squares,i,enemyKing) ) , false) );
}

