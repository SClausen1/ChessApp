import React from 'react';

import '../index.css';
import Board from './Board.js';
import boardInit from '../helpers/BoardInit';

export default class Game extends React.Component {
  constructor() {
    var squareT = boardInit();
    super();
    this.state = {
      squares: squareT,
      player: 0,
      history: [],
      whiteTurn : true 
    };
    if(this.state.player === 0){
      this.state.squares = squareT.reverse();
    }
  }

  handleClick(i) {
    // const history = this.state.history.slice(0, this.state.stepNumber + 1);
    // const current = history[history.length - 1];
    // const squares = current.squares.slice();
    // if (calculateWinner(squares) || squares[i]) {
    //   return;
    // }
    // squares[i] = this.state.xIsNext ? "X" : "O";
    // this.setState({
    //   history: history.concat([
    //     {
    //       squares: squares
    //     }
    //   ]),
    //   stepNumber: history.length,
    //   xIsNext: !this.state.xIsNext
    // });
  }

  render() {

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


function calculateWinner(squares) {
  // const lines = [
  //   [0, 1, 2],
  //   [3, 4, 5],
  //   [6, 7, 8],
  //   [0, 3, 6],
  //   [1, 4, 7],
  //   [2, 5, 8],
  //   [0, 4, 8],
  //   [2, 4, 6]
  // ];
  // for (let i = 0; i < lines.length; i++) {
  //   const [a, b, c] = lines[i];
  //   if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
  //     return squares[a];
  //   }
  // }
  // return null;
}
