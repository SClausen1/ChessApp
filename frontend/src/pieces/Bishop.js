import Piece from "./Piece";

export default class Bishop extends Piece{
    constructor(player) {
        super(player, 'b');
    }

    isMovePossible(src, dest) {
        if((src - dest) % 9 === 0 || (src - dest) % 7 === 0){
            return true;
        }
        return false;
    }
    
}