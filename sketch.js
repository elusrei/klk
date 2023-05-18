function setup() {
    createCanvas(400, 400);
    background(30, 20, 100);
    frameRate(0.75);
  }
  //gola
  //que onda?
  //nada, aca
  //vos sos del vscode o del navegador?
  //del navegador, vos?
  function draw() {
    var rrr = random(150, 175); //Random Red Rect
    var rgr = random(150, 175); //RAndom Green Rect
    var rbr = random(150, 170); //Random Blue Rect
    var ror = random(50, 200); //Random Opacity Rect
  
    var rtr = random(5, 75); //Random Tamaño Rect
  
    fill(rrr, rgr, rbr, ror);
    rect(random(1, 400), random(1, 400), rtr);
  }
  
