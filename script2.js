let notek = [],notel = [],notea = [],notes = [],camera, j = 1,a = 0, b = -3, g = -20, d = -4, judge,judge2, video, videos, black = 255, white = 0, event,eventb = [],eventw = [],eventbw = [], eventb2,eventw2,score,score2,count;
window.onload=function(){
camera = document.getElementById("rig");
judge = document.getElementById("judgement");
judge2 = document.getElementById("judgement2");
var sceneEl = document.querySelector('a-scene');
videos = document.getElementById("gen");
notes = sceneEl.querySelectorAll('#notes');
notea = sceneEl.querySelectorAll('#notea');
notek = sceneEl.querySelectorAll('#notek');
notel = sceneEl.querySelectorAll('#notel');
event = document.getElementById('events');
eventb2 = document.getElementById('eventb2');
eventw2 = document.getElementById('eventw2');
eventb = sceneEl.querySelectorAll('#eventb');
eventw = sceneEl.querySelectorAll('#eventw');
eventbw = sceneEl.querySelectorAll('#eventbw');
score = document.getElementById("msg");
score2 = document.getElementById("msg2");
count = 0;

for(let i = 0; i<notes.length;i++){
  notes[i].setAttribute("visible",false);
}
for(let i = 0; i<notea.length;i++){
  notea[i].setAttribute("visible",false);
}
for(let i = 0; i<notek.length;i++){
  notek[i].setAttribute("visible",false);
}
for(let i = 0; i<notel.length;i++){
  notel[i].setAttribute("visible",false);
}
/*
  var testing = document.querySelectorAll("a-box");
testing.addEventListener('mouseenter',function(){
  document.onkeyup = (event) => {
  if (event.which == 13) {
    testing.setAttribute("visible",false);
  }
};
document.onkeyup = (event) => {
  if (event.which == 65) {
    el.setAttribute("visible",false);
  }
};
});*/

}
function revis(){
  for(let i = 0; i<notes.length;i++){
  notes[i].setAttribute("visible",true);
}
}
function revis2(){
  for(let i = 0; i<notea.length;i++){
  notea[i].setAttribute("visible",true);
}
}
function revis3(){
  for(let i = 0; i<notek.length;i++){
  notek[i].setAttribute("visible",true);
}
}
function revis4(){
  for(let i = 0; i<notel.length;i++){
  notel[i].setAttribute("visible",true);
}
}

/*AFRAME.registerComponent('notea', {

    init: function () {
      var el = this.el;



  for(let i = 0; i<notes.length;i++){
    console.log("test");
    if(notes[i].getAttribute("visible") &&collision(judge,notes[i])){
    notes[i].setAttribute("visible",false);
    console.log("asas");
  }
  }
    }
  });*/


function toblack(){
  if(black >= 1){
    black-= 3;
    sky.setAttribute("color",`rgb(${black},${black},${black})`);
    
  }else{
  clearTimeout()
  }
  setTimeout(toblack, 1);
}
function towhite(){
  if(white <= 254){
    white += 3;
    sky.setAttribute("color",`rgb(${white},${white},${white})`);
    
  }else{
    clearTimeout(timeoutw);
  }
  var timeoutw = setTimeout(towhite, 1);


}
function towhite2(){
  if(white <= 254){
    white += 3;
    sky.setAttribute("color",`rgb(${white},${white},${white})`);
    
  }else{
    clearTimeout(timeoutw);
  }
  var timeoutw = setTimeout(towhite, 1);


}
function flash(){
  black = 255;
  if(white <= 254){
  setTimeout(toblack, 10000);
  }
}
function combo(){
  count++;
  score2.setAttribute("value",`${count}`);

  }


function miss1(){
  for(let i = 0; i<notes.length;i++){
      if(notes[i].getAttribute("visible") && collisionsm(judge,notes[i])){
        notes[i].setAttribute("visible",false);
        count = 0;
        score2.setAttribute("value",`${count}`);
      }
  }

}
function miss2(){
  for(let i = 0; i<notea.length;i++){
      if(notea[i].getAttribute("visible") && collisionam(judge,notea[i])){
        notea[i].setAttribute("visible",false);
        count = 0;
        score2.setAttribute("value",`${count}`);
      }
  }

}
function miss3(){
  for(let i = 0; i<notek.length;i++){
      if(notek[i].getAttribute("visible") && collisionam(judge,notek[i])){
        notek[i].setAttribute("visible",false);
        count = 0;
        score2.setAttribute("value",`${count}`);
      }
  }

}
function miss4(){
  for(let i = 0; i<notel.length;i++){
      if(notel[i].getAttribute("visible") && collisionam(judge,notel[i])){
        notel[i].setAttribute("visible",false);
        count = 0;
        score2.setAttribute("value",`${count}`);
      }
  }

}
function miss5(){
  for(let i = 0; i<notes.length;i++){
      if(notes[i].getAttribute("visible") && collisions(judge2,notes[i])){
      notes[i].setAttribute("visible",false);
      count = 0;        score2.setAttribute("value",`${count}`);
        
      }
  }
  for(let i = 0; i<notea.length;i++){
      if(notea[i].getAttribute("visible") && collisiona(judge2,notea[i])){
      notea[i].setAttribute("visible",false);
      count = 0;
        score2.setAttribute("value",`${count}`);
      }
  }
  for(let i = 0; i<notek.length;i++){
      if(notek[i].getAttribute("visible") && collisionk(judge2,notek[i])){
        notek[i].setAttribute("visible",false);
        count = 0;
        score2.setAttribute("value",`${count}`);
      }
  }
  for(let i = 0; i<notel.length;i++){
      if(notel[i].getAttribute("visible") && collisionl(judge2,notel[i])){
        notel[i].setAttribute("visible",false);
        count = 0;
        score2.setAttribute("value",`${count}`);
      }
  }

}


AFRAME.registerComponent('animate', {


    init: function () {
      var el = this.el;
      video = document.querySelector('#genso');
      document.onkeydown = (event) => {
  if (event.which == 13) {
        el.setAttribute("visible",false);
    if(video.paused){
          video.play();
        }
        revis();
        revis2();
        revis3();
        revis4();
        loop();
        loopnotes();
  }
      }
    }
  });

function loop(){
  a -= 0.15;
  b -= 0.15;
  g -= 0.15;
  d -= 0.15;
  j -= 0.15;
  videos.setAttribute("position",{x:0,y:4,z:g});


  camera.setAttribute("position",{x:0,y:0,z:a});
  event.setAttribute("position",{x:0,y:-5,z:d});
  score.setAttribute("position",{x:2,y:2,z:d});
  score2.setAttribute("position",{x:2.2,y:1.7,z:d});
  judge.object3D.position.z = b;
  judge2.object3D.position.z = j;
  miss5();

  for(let i = 0; i < eventb.length;i++){

  if(eventb[i].getAttribute("visible") && collisionevent(event,eventb[i])){
    eventb[i].setAttribute("visible",false);
    toblack();
  }
  }
  for(let i = 0; i < eventw.length;i++){
  if(eventw[i].getAttribute("visible") && collisionevent(event,eventw[i])){
    eventw[i].setAttribute("visible",false);
    towhite();
  }
  }
  for(let i = 0; i < eventbw.length;i++){
  if(eventbw[i].getAttribute("visible") && collisionevent(event,eventbw[i])){
    eventbw[i].setAttribute("visible",false);
    flash();
  }
  }
  if(eventb2.getAttribute("visible") && collisionevent(event,eventb2)){
    eventb2.setAttribute("visible",false);
    sky.setAttribute("color",`rgb(0,0,0)`);
  }
  if(eventw2.getAttribute("visible") && collisionevent(event,eventw2)){
    eventw2.setAttribute("visible",false);
    white = 0;
    towhite2();
  }
  
  setTimeout(loop, 10);
}

function loopnotes(){
  document.onkeydown = (event) => {
  if (event.which == 83) {
    miss1();
    for(let i = 0; i<notes.length;i++){
      if(notes[i].getAttribute("visible") && collisions(judge,notes[i])){
      notes[i].setAttribute("visible",false);
      combo();
      }
  }
  }
  else if (event.which == 65) {
    miss2();
    for(let i = 0; i<notea.length;i++){
      if(notea[i].getAttribute("visible") && collisiona(judge,notea[i])){
      notea[i].setAttribute("visible",false);
      combo();
      }
  }
  }
  else if (event.which == 75) {
    miss3();
    for(let i = 0; i<notek.length;i++){
      if(notek[i].getAttribute("visible") && collisionk(judge,notek[i])){
        notek[i].setAttribute("visible",false);
        combo();
      }
  }
  }
  else if (event.which == 76) {
    miss4();
    for(let i = 0; i<notel.length;i++){
      if(notel[i].getAttribute("visible") && collisionl(judge,notel[i])){
        notel[i].setAttribute("visible",false);
        combo();
      }
  }
  }
  }
  setTimeout(loopnotes, 10);
}




  /*AFRAME.registerComponent('song', {

    init: function () {
      var el = this.el;
      var entity = document.querySelector('[sound]');

      el.addEventListener('click', function () {
        el.setAttribute('sound', el.components.sound.playSound());
      });
    }
  });


/*function spressed(){
  document.onkeydown = (event) => {
  if (event.which == 83) {
    console.log("dams");
    flags = true;
  }
}
return flags;
}
*/
  function collisions(obj1, obj2){
  let x1 = obj1.object3D.position.x;
  let x2 = obj2.object3D.position.x;
  let z1 = obj1.object3D.position.z;
  let z2 = obj2.object3D.position.z;

  let distance = Math.sqrt((x2 - x1)**2 + (z2 - z1)**2);

  return distance <= 1.05 ;
}
function collisionsm(obj1, obj2){
  let x1 = obj1.object3D.position.x;
  let x2 = obj2.object3D.position.x;
  let z1 = obj1.object3D.position.z;
  let z2 = obj2.object3D.position.z;

  let distance = Math.sqrt((x2 - x1)**2 + (z2 - z1)**2);

  return distance > 1.05 && distance < 2.3 ;
}

  function collisiona(obj1, obj2){
  let x1 = obj1.object3D.position.x;
  let x2 = obj2.object3D.position.x;
  let z1 = obj1.object3D.position.z;
  let z2 = obj2.object3D.position.z;

  let distance = Math.sqrt((x2 - x1)**2 + (z2 - z1)**2);

  return distance <= 1.3 ;
}

function collisionam(obj1, obj2){
  let x1 = obj1.object3D.position.x;
  let x2 = obj2.object3D.position.x;
  let z1 = obj1.object3D.position.z;
  let z2 = obj2.object3D.position.z;

  let distance = Math.sqrt((x2 - x1)**2 + (z2 - z1)**2);

  return distance > 1.3 && distance < 2.55 ;
}

  function collisionk(obj1, obj2){
  let x1 = obj1.object3D.position.x;
  let x2 = obj2.object3D.position.x;
  let z1 = obj1.object3D.position.z;
  let z2 = obj2.object3D.position.z;

  let distance = Math.sqrt((x2 - x1)**2 + (z2 - z1)**2);

  return distance <= 1.3 ;
}

  function collisionl(obj1, obj2){
  let x1 = obj1.object3D.position.x;
  let x2 = obj2.object3D.position.x;
  let z1 = obj1.object3D.position.z;
  let z2 = obj2.object3D.position.z;

  let distance = Math.sqrt((x2 - x1)**2 + (z2 - z1)**2);

  return distance <= 1.3 ;
}

function collisionevent(obj1, obj2){
  let x1 = obj1.object3D.position.x;
  let x2 = obj2.object3D.position.x;
  let z1 = obj1.object3D.position.z;
  let z2 = obj2.object3D.position.z;

  let distance = Math.sqrt((x2 - x1)**2 + (z2 - z1)**2);

  return distance <= 1 ;
}
  
  