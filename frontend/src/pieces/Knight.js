import Piece from "./Piece";

export default class Knight extends Piece{
    constructor(player) {
        super(player, 'kn');
    }

    isMovePossible(src, dest) {
        if(Math.abs(src-dest) - 15===0 || Math.abs(src-dest) - 17===0 || Math.abs(src-dest) - 6===0 || Math.abs(src-dest) - 10===0){
            return true;
        }
        return false;
    } 

}