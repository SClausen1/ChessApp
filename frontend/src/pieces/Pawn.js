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
        if(this.getPlayer() === 1 && (src-dest === 8 || src-dest ===7 || src-dest ===9 )){
            if(src / 8 === 6){
                this.firstMove = 1;
            }
            return true;
        }
        else if(this.getPlayer() === 2 && (src-dest === -8 || src-dest === -7 || src-dest === -9)){
            if(src / 8 === 1){
                this.firstMove = 1;
            }
            return true;
        }
        else if((src-dest === 16 && !this.firstMove)){
            this.setFirstMove(2);
        }
        else{
            return false;
        }
    }
}