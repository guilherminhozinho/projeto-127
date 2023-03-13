function setup(){
 canvas= createCanvas(280,280);
 canvas.center();
background("white");
 canvas.mouseReleased(classifyCanvas);
 synth= window.speechSynthesis;
 }

 function preload(){
 classifier = ml5.imageClassifier('DoodleNet');
 }

 function draw(){ strokeWeight(6);
 stroke("red");
 if(mouseIsPressed)
 { line(pmouseX, pmouseY, mouseX, mouseY);
 } 
}

function classifyCanvas() {
 classifier.classify(canvas, gotResult);
 }

 function gotResult(error, results) {
 if (error) 
 { console.error(error);
 } console.log(results);
  drawnSketch = results[0].label;
 document.getElementById('label').innerHTML = 'Seu esboço: ' + drawnSketch.replace("_", " ");
 document.getElementById('confidence').innerHTML = 'Precisão: ' + Math.round(results[0].confidence * 100) + '%';
}
 //utterThis = new SpeechSynthesisUtterance(result.replace('_',' '));
  //synth.speak(utterThis); }