import Piece from "./Piece";

export default class Knight extends Piece{
    constructor(player) {
        super(player, 'kn');
    }

    isMovePossible(src, dest) {
        let dist = Math.abs(src-dest);
        let rows = Math.abs( Math.floor(src/8) - Math.floor(dest/8));
        if( ((dist === 15 ||dist === 17 ) && rows ===2 ) || (( dist ===6 || dist===10) && rows ===1) ){
            return true;
        }
        return false;
    } 

}