
export default class Piece{
    constructor(player, type){
        let iconUrls = new Map();
        iconUrls.set('p1', "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg");
        iconUrls.set('p2', "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg");
        iconUrls.set('q1', "https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg");
        iconUrls.set('q2', "https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg");
        iconUrls.set('ki1', "https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg");
        iconUrls.set('ki2', "https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg");
        iconUrls.set('kn1', "https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg");
        iconUrls.set('kn2', "https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg");
        iconUrls.set('b1', "https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg");
        iconUrls.set('b2', "https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg");
        iconUrls.set('r1', "https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg");
        iconUrls.set('r2', "https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg");
        this.player = player;
        this.type = type;
        var url = iconUrls.get(type.concat(player));
        this.style = { backgroundImage: "url('" + url + "')" };
    }
    getPlayer(){
        return this.player;
    }
    

}