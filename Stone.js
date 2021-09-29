class Stone{
constructor(x,y,w,h){

    for(var i =0;i<=8;i++){
        var x = random(width/2-200,width/2+300);
        var y=random(-10,140);
        var stone = new Stone(x,y,80,80);
        stone.push(stone)
        
    }
}
}   