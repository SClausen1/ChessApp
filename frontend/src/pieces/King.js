import Piece from "./Piece";

export default class King extends Piece{
    constructor(player) {
        super(player, 'ki');
    }

    isMovePossible(src, dest) {
        if(Math.abs(dest - src) === 1 || Math.abs(dest - src) === 1 ){
            return true;
        }
        return false;
    } 
}