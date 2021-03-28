import React from 'react';
import Board from './Board.js';
import boardInit from '../helpers/BoardInit';

export default class Game extends React.Component {
  constructor(props) {
    super();
    
    this.state = {
      squares: boardInit(props.player),
      player: props.player,
      history: ['NewGame'],
      souceClick: -1,
      playerTurn : 1,
      gameStatus : 'nominal'
    };

  }

  handleClick(i) {
    
    const squares = [...this.state.squares]
    var src = this.state.souceClick;
    const dest = i;
    const player = this.state.player;
    const opponent =( player === 1 ? 2 : 1);
    const srcPiece = squares[src];
    if(src === -1 && squares[i] == null){
      return;
    }
    else if(src === -1){
      if(player === squares[i].player){
        squares[i].style = ({...squares[i].style, backgroundColor: "RGB(111,143,114)" }); // Emerald from http://omgchess.blogspot.com/2015/09/chess-board-color-schemes.html
        this.setState({souceClick : i});
      }
      return;
      
    }
    else{
      
      squares[src].style = { ...squares[src].style, backgroundColor: "" };
     
      if(srcPiece.isMovePossible(src, i) && pathIsClear(squares, src, dest)){
        squares[src] = srcPiece;
        //check if castle is possible
        if(srcPiece.type === 'ki'&& Math.abs(src - dest) > 1 &&srcPiece){
          //check if castle is possible, king is not in check ,intermediate squares are safe and unocupied, niether piece has moved
        }

        //checks for en passant
        else if(srcPiece.type === 'p' &&( (dest % 7=== 0 || dest % 9 === 0) && !squares[dest]) ){
          
          if(this.state.player === 1 && squares[dest + 8].type === 'p' && dest/8 === 6){
            if(squares[dest + 8].firstMove === 2){
              squares[dest + 8] = null;
              squares[dest] = squares[i];
              squares[i] = null;
            }
          }
          else if(this.state.player === 2 && squares[dest - 8].type === 'p' && dest/8 === 1){
            if(squares[dest-8].firstMove === 2){
              squares[dest - 8] = null;
              squares[dest] = squares[i];
              squares[i] = null;
            }
          }
          else{
            this.setState({souceClick : -1});
            return;
          }
          
        }

        //takes a peice
        else if(squares[i] && squares[i].player === this.state.player){
          // add i square piece to fallen soldiers
          squares[i] = srcPiece;
          squares[this.state.souceClick] = null;
        }

      
        //just move
        else{
          squares[i] = srcPiece;
          squares[src] = null;
        }
        var moveName = srcPiece.type.concat(algebreicNotation(i));
        if(isCheck(squares, player)){
          if(isMate(squares, player)){
            this.setState({gameStatus : 'Player ' + player + 'wins'});
          }
        }

      }

      
      this.setState(oldState => ({
        squares: squares,
        player: opponent,
        history : [...oldState.history , moveName],
        souceClick : -1,
        playerTurn : opponent,
        gameStatus : 'nominal'
      }));
    }
  }

  render() {
    // rotates board 180


    return (
      <div>
        <div className="game">
          <div className="game-board">
            <Board
              squares={this.state.squares}
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
}

// ========================================
function getKingPosition(squares, player){
  return squares.reduce( (acc, curr, i) => acc || (curr && curr.player === player && curr.type === 'ki' && i), null);  
}
function pathIsClear(squares, src, dest){
  if(squares[src].type === 'kn'){
    return true;
  }
  var distance = Math.abs(src-dest);
  var start = Math.min(src,dest);
  var end = Math.max(src,dest);
  // checks diag moves
  if((src - dest) % 9 === 0){
    for(let i = 1;( i * 9 + start) <= end; i++){
      if(squares[start+i * 9]){
        return false;
      }
    }
    return true;
  }
  else if((src - dest) % 7 === 0){
    for(let i = 1;( i * 7 + start) <= end; i++){
      if(squares[start+i * 7]){
        return false;
      }
    }
    return true;
  }
  // checks vertical moves
  else if((src - dest) % 8 === 0){
    for(let i = 1;( i * 8 + start) <= end ; i++){
      if(squares[start+i * 8] != null){
        return false;
      }
    }
    return true;
  }
  //checks horizontal moves
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

function isCheck(squares, attackingPlayer){
  var opponent = attackingPlayer === 1 ? 2 : 1; 
  var enemyKing = getKingPosition(squares, opponent);
  return squares.reduce( (acc, curr, i) => acc || 
  ( (curr && curr.player === attackingPlayer && curr.isMovePossible(i, enemyKing) && pathIsClear(squares,i,enemyKing) ) , false) );
}
function isMate(squares, attackingPlayer){
  var opponent = attackingPlayer === 1 ? 2 : 1; 
  var enemyKing = getKingPosition(squares, opponent);
  for(let i = -1; i < 2; i++){
    for(let j = -1; j < 2; j++){
    squares[enemyKing + (i*8 + j)] = squares[enemyKing];
    squares[enemyKing] = null;
      if(!isCheck(squares,attackingPlayer)){
        return false;
      }
    }
  }
  return true;
}

function algebreicNotation(i){
  var columnLetters = {0 : 'a', 1 : 'b', 2 : 'c', 3 : 'd', 4: 'e', 5: 'f', 6: 'g', 7: 'h'};
  var col = columnLetters[i % 8];
  var row = 1+ Math.floor(i / 8);
  return String(col).concat(String(row));
}

export {
  getKingPosition,
  isCheck,
  isMate,
  pathIsClear,
  algebreicNotation
}
