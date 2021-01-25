import Piece from "./Piece";

export default class Queen extends Piece{
    constructor(player) {
        super(player, 'q');
    }

    isMovePossible(src, dest) {
        if((src - dest) % 9 === 0 || (src - dest) % 7 === 0){
            return true;
        }
        else if((src - dest) % 8 === 0 ||  Math.floor(src/8) ===  Math.floor(dest / 8 )){
            return true;
        }
        return false;
    } 
}