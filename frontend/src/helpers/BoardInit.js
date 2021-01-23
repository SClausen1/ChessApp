import Bishop from '../pieces/Bishop';
import King from '../pieces/King';
import Knight from '../pieces/Knight';
import Pawn from '../pieces/Pawn';
import Queen from '../pieces/Queen';
import Rook from '../pieces/Rook';

export default function boardInit(){
    const squares = Array(64).fill(null);
    for(let i = 0; i<8; i++){
        squares[8+i] = new Pawn(1);
        squares[48+i] = new Pawn(2);
    }

    squares[0] = new Rook(1);
    squares[7] = new Rook(1);
    squares[56] = new Rook(2);
    squares[63] = new Rook(2);

    squares[1] = new Bishop(1);
    squares[6] = new Bishop(1);
    squares[57] = new Bishop(2);
    squares[62] = new Bishop(2);

    squares[2] = new Knight(1);
    squares[5] = new Knight(1);
    squares[58] = new Knight(2);
    squares[61] = new Knight(2);

    squares[4] = new King(1);
    squares[3] = new Queen(1);
    squares[60] = new King(2);
    squares[59] = new Queen(2);

    return squares;
} 
