import Piece from "./Piece";

export default class Pawn extends Piece{
    constructor(player) {
        super(player, 'p');
        this.firstMove = null;
    }

    setFirstMove(placeMoved){
        this.firstMove = placeMoved;
    }

    isMovePossible(src, dest, squares) {
        let rowDiff = Math.abs( Math.floor(src/8) - Math.floor(dest/8));
        if(rowDiff === 1 || (rowDiff === 2 && ((src-dest) % 8)===0 )){
            if(this.getPlayer() === 1 && (src-dest === -8 || src-dest === -7 || src-dest === -9 )){
                if(src / 8 === 6){
                    this.setFirstMove(1);
                }
            }
            else if(this.getPlayer() === 2 && (src-dest === 8 || src-dest === 7 || src-dest === 9)){
                if(src / 8 === 1){
                    this.setFirstMove(1);
                }
            }
            else if(((src-dest === 16 && this.getPlayer() === 2) || (src-dest === -16 && this.getPlayer() === 1)) 
            && this.firstMove === null){
                this.setFirstMove(2);
                
            }
            else{
                return false;
            }
            return true;
        }
        return false;
    }
}