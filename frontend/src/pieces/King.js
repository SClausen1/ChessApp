import Piece from "./Piece";

export default class King extends Piece{
    constructor(player) {
        super(player, 'ki');
    }

    isMovePossible(src, dest) {
        let dist = Math.abs(dest - src)
        if(dist === 1 || ((dest/8 != src/8) && (dist === 7 || dist === 9 || dist === 8))){
            return true;
        }
        return false;
    } 
}