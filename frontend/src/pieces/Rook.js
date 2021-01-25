import Piece from "./Piece";

export default class Rook extends Piece{
    constructor(player) {
        super(player, 'r');
    }

    isMovePossible(src, dest) {
        if((src - dest) % 8 === 0 ||  Math.floor(src/8) ===  Math.floor(dest / 8 )){
            return true;
        }
        return false;
    } 
}