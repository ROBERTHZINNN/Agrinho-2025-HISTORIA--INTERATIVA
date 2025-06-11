 let etapa = 0;
 let historias = [
   
   

  "João planta milho em sua fazenda.",
  "A colheita foi feita com a ajuda de tratores modernos.",
  "O milho é transportado para a cidade.",
  "Chegando à feira, é vendido para os consumidores urbanos.",
  "A cidade é um polo para o campo, oferecendo acesso a mercados",           "Consumidores, onde os produtos agrícolas podem ser vendidos e distribuídos em larga escala",
   "Da terra brota a vida, e da cidade vêm as ferramentas para cultivá-la.",
   "Campo e cidade: uma parceria essencial.",
"Enquanto o campo provê o alimento que chega à mesa, a cidade oferece", "o acesso à saúde, educação e tecnologia que o campo necessita.",
"A riqueza da cidade nasce no suor do campo, que, por sua vez, se moderniza com o progresso urbano.",
   
   
  ]
 
 function setup() {
  createCanvas(600, 300);
  textAlign(CENTER, CENTER);
  textSize(20);
 }
 function draw() {
  background(245);
  text(historias[etapa], width / 2, height / 2);
  fill(200);
   
  rect(100, 250, 100, 30);
  rect(400, 250, 100, 30);
  fill(0);
  textSize(14);
  text("Voltar", 150, 265);
  text("Avançar", 450, 265);
 }
 function mousePressed() {
  if (mouseX > 100 && mouseX < 200 && mouseY > 250 && mouseY < 280 && etapa > 0) {
    etapa--;
  }
  if (mouseX > 400 && mouseX < 500 && mouseY > 250 && mouseY < 280 && etapa <
 historias.length - 1) {
    etapa++;
  }
 }
