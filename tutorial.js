let notek = [],notel = [],notea = [],notes = [],camera, j = 1,a = 0, b = -3, g = -20, d = -4,e = -30, judge,judge2,score,score2,count,start, video,videos,combos,entrys,notetutA,notetutS,notetutK,notetutL,notetest,scene,judgementtut,judgementtut2,combotut,begin,end,skip,final;
window.onload=function(){
  begin = document.getElementById("begin");
end = document.getElementById("end");
scene = document.querySelector("a-scene");
camera = document.getElementById("rig");
start = document.getElementById("startButton");
judge = document.getElementById("judgement");
judge2 = document.getElementById("judgement2");
videos = document.getElementById("one");
var sceneEl = document.querySelector('a-scene');
notes = sceneEl.querySelectorAll('#notes');
notea = sceneEl.querySelectorAll('#notea');
notek = sceneEl.querySelectorAll('#notek');
notel = sceneEl.querySelectorAll('#notel');
score = document.getElementById("msg");
score2 = document.getElementById("msg2");
combos = document.getElementById("combo");
entrys = document.getElementById("entry");
notetutA = document.getElementById("notetutA");
  notetutS = document.getElementById("notetutS");
  notetutK = document.getElementById("notetutK");
  notetutL = document.getElementById("notetutL");
  notetest = document.getElementById("notetest");
  judgementtut = document.getElementById("judgementtut");
  judgementtut2 = document.getElementById("judgementtut2");
  combotut = document.getElementById("combotut");
  final = document.getElementById("final");
  skip = document.getElementById("skip");
combos.setAttribute("visible",false);
entrys.setAttribute("visible",false);
notetutA.setAttribute("visible",false);
  notetutK.setAttribute("visible",false);
  notetutS.setAttribute("visible",false);
  notetutL.setAttribute("visible",false);
  notetest.setAttribute("visible",false);
  judgementtut.setAttribute("visible",false);
  judgementtut2.setAttribute("visible",false);
  combotut.setAttribute("visible",false);
  final.setAttribute("visible",false);
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

function combo(){
  count++;
  score2.setAttribute("value",`${count}/20`);

  }


function miss1(){
  for(let i = 0; i<notes.length;i++){
      if(notes[i].getAttribute("visible") && collisionsm(judge,notes[i])){
        notes[i].setAttribute("visible",false);
        count = 0;
        score2.setAttribute("value",`${count}/20`);
      }
  }

}
function miss2(){
  for(let i = 0; i<notea.length;i++){
      if(notea[i].getAttribute("visible") && collisionam(judge,notea[i])){
        notea[i].setAttribute("visible",false);
        count = 0;
        score2.setAttribute("value",`${count}/20`);
      }
  }

}
function miss3(){
  for(let i = 0; i<notek.length;i++){
      if(notek[i].getAttribute("visible") && collisionam(judge,notek[i])){
        notek[i].setAttribute("visible",false);
        count = 0;
        score2.setAttribute("value",`${count}/20`);
      }
  }

}
function miss4(){
  for(let i = 0; i<notel.length;i++){
      if(notel[i].getAttribute("visible") && collisionam(judge,notel[i])){
        notel[i].setAttribute("visible",false);
        count = 0;
        score2.setAttribute("value",`${count}/20`);
      }
  }

}
function miss5(){
  for(let i = 0; i<notes.length;i++){
      if(notes[i].getAttribute("visible") && collisions(judge2,notes[i])){
      notes[i].setAttribute("visible",false);
      count = 0;
      score2.setAttribute("value",`${count}/20`);
        
      }
  }
  for(let i = 0; i<notea.length;i++){
      if(notea[i].getAttribute("visible") && collisiona(judge2,notea[i])){
      notea[i].setAttribute("visible",false);
      count = 0;
        score2.setAttribute("value",`${count}/20`);
      }
  }
  for(let i = 0; i<notek.length;i++){
      if(notek[i].getAttribute("visible") && collisionk(judge2,notek[i])){
        notek[i].setAttribute("visible",false);
        count = 0;
        score2.setAttribute("value",`${count}/20`);
      }
  }
  for(let i = 0; i<notel.length;i++){
      if(notel[i].getAttribute("visible") && collisionl(judge2,notel[i])){
        notel[i].setAttribute("visible",false);
        count = 0;
        score2.setAttribute("value",`${count}/20`);
      }
  }

}


AFRAME.registerComponent('animate', {
  init: function(){
    var el = this.el;
      document.onkeydown = (event) => {
  if (event.which == 13) {
        start.setAttribute('sound', start.components.sound.playSound());
        el.setAttribute("visible",false);
        revis();
        revis2();
        revis3();
        revis4();
        entry();
        //combos.setAttribute("visible",true);
        //loop();
        loopnotes();
      
  } else if (event.which == 84) {
    location.href="menu.html";
  }
      }
  }
});
function entry(){
  entrys.setAttribute("visible",true);
    document.onkeydown = (event) => {
  if (event.which == 13) {
    clearTimeout(x);
    notestutorialA();
  }
      else if (event.which == 84) {
    location.href="menu.html";
  }
  }
  var x = setTimeout(entry,0.1);
}
function notestutorialA(){
  entrys.setAttribute("visible",false);
  notetutA.setAttribute("visible",true);
    document.onkeydown = (event) => {
  if (event.which == 65) {
    clearTimeout(x);
    notestutorialS();
  }
      else if (event.which == 84) {
    location.href="menu.html";
  }
  }
  var x = setTimeout(notestutorialA,1);
}
function notestutorialS(){
  entrys.setAttribute("visible",false);
  notetutA.setAttribute("visible",false);
  notetutS.setAttribute("visible",true);
    document.onkeydown = (event) => {
  if (event.which == 83) {
    clearTimeout(x);
    notestutorialK();
  }
      else if (event.which == 84) {
    location.href="menu.html";
  }
  }
  var x = setTimeout(notestutorialS,1);
}
function notestutorialK(){
  entrys.setAttribute("visible",false);
  notetutA.setAttribute("visible",false);
  notetutS.setAttribute("visible",false);
  notetutK.setAttribute("visible",true);
    document.onkeydown = (event) => {
  if (event.which == 75) {
    clearTimeout(x);
    notestutorialL();
  }
      else if (event.which == 84) {
    location.href="menu.html";
  }
  }
  var x = setTimeout(notestutorialK,1);
}
function notestutorialL(){
  entrys.setAttribute("visible",false);
  notetutA.setAttribute("visible",false);
  notetutS.setAttribute("visible",false);
  notetutK.setAttribute("visible",false);
  notetutL.setAttribute("visible",true);
    document.onkeydown = (event) => {
  if (event.which == 76) {
    clearTimeout(x);
    judgementtutorial();
  }
      else if (event.which == 84) {
    location.href="menu.html";
  }
  }
  var x = setTimeout(notestutorialL,1);
}

function judgementtutorial(){
  entrys.setAttribute("visible",false);
  notetutA.setAttribute("visible",false);
  notetutS.setAttribute("visible",false);
  notetutK.setAttribute("visible",false);
  notetutL.setAttribute("visible",false);
  judgementtut.setAttribute("visible",true);
    document.onkeydown = (event) => {
  if (event.which == 13) {
    clearTimeout(x);
    judgementtutorial2();
  }
  }
  var x = setTimeout(judgementtutorial,1);
}

function judgementtutorial2(){
  entrys.setAttribute("visible",false);
  notetutA.setAttribute("visible",false);
  notetutS.setAttribute("visible",false);
  notetutK.setAttribute("visible",false);
  notetutL.setAttribute("visible",false);
  judgementtut.setAttribute("visible",false);
  judgementtut2.setAttribute("visible",true);
    document.onkeydown = (event) => {
  if (event.which == 13) {
    clearTimeout(x);
    combotutorial();
  }
      else if (event.which == 84) {
    location.href="menu.html";
  }
  }
  var x = setTimeout(judgementtutorial2,1);
}

function combotutorial(){
  entrys.setAttribute("visible",false);
  notetutA.setAttribute("visible",false);
  notetutS.setAttribute("visible",false);
  notetutK.setAttribute("visible",false);
  notetutL.setAttribute("visible",false);
  judgementtut.setAttribute("visible",false);
  judgementtut2.setAttribute("visible",false);
  combotut.setAttribute("visible",true);
    document.onkeydown = (event) => {
  if (event.which == 13) {
    clearTimeout(x);
    notetesting();
  }
      else if (event.which == 84) {
    location.href="menu.html";
  }
  }
  var x = setTimeout(combotutorial,1);
}
function notetesting(){
  entrys.setAttribute("visible",false);
  notetutA.setAttribute("visible",false);
  notetutS.setAttribute("visible",false);
  notetutK.setAttribute("visible",false);
  notetutL.setAttribute("visible",false);
  judgementtut.setAttribute("visible",false);
  judgementtut2.setAttribute("visible",false);
  combotut.setAttribute("visible",false);
  notetest.setAttribute("visible",true);
    document.onkeydown = (event) => {
  if (event.which == 13) {
    clearTimeout(x);
    combos.setAttribute("visible",true);
    notetest.setAttribute("visible",false);
    skip.setAttribute("visible",false);
    
    loop();
  }
      else if (event.which == 84) {
    location.href="menu.html";
  }
  }
  var x = setTimeout(notetesting,1);
}


function finals(){
  entrys.setAttribute("visible",false);
  notetutA.setAttribute("visible",false);
  notetutS.setAttribute("visible",false);
  notetutK.setAttribute("visible",false);
  notetutL.setAttribute("visible",false);
  judgementtut.setAttribute("visible",false);
  judgementtut2.setAttribute("visible",false);
  combotut.setAttribute("visible",false);
  notetest.setAttribute("visible",false);
  final.setAttribute("visible",true);
    document.onkeydown = (event) => {
  if (event.which == 13) {
    clearTimeout(x);
    location.href="menu.html";
  }
  }
  var x = setTimeout(finals,1);
}

function loop(){
  a -= 0.25;
  b -= 0.25;
  g -= 0.25;
  d -= 0.25;
  j -= 0.25;


  camera.setAttribute("position",{x:0,y:0,z:a});
  score.setAttribute("position",{x:2,y:2,z:d});
  score2.setAttribute("position",{x:2.2,y:1.7,z:d});
  begin.setAttribute("position",{x:0,y:-5,z:d});
  judge.object3D.position.z = b;
  judge2.object3D.position.z = j;
  miss5();


  var zs = setTimeout(loop, 10);
  if(end.getAttribute("visible") && collisionevent(begin,end) && count != 20){
    clearTimeout(zs);
    camera.setAttribute("position",{x:0,y:0,z:-6})
    revis();
    revis2();
    revis3();
    revis4();
    judge.setAttribute("position",{x:0,y:0.18,z:-9});
    judge2.setAttribute("position",{x:0,y:0.18,z:2});
    j = 1;
    a = 0;
    b = -3;
    g = -20;
    d = -4;
    count = 0;
    score2.setAttribute("value",`${count}/20`);
    loop();
  }else if(end.getAttribute("visible") && collisionevent(begin,end) && count == 20){
    clearTimeout(zs);
    camera.setAttribute("position",{x:0,y:0,z:0});
    finals();
  }
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

  return distance <= 1.55 ;
}
function collisionsm(obj1, obj2){
  let x1 = obj1.object3D.position.x;
  let x2 = obj2.object3D.position.x;
  let z1 = obj1.object3D.position.z;
  let z2 = obj2.object3D.position.z;

  let distance = Math.sqrt((x2 - x1)**2 + (z2 - z1)**2);

  return distance > 1.75 && distance < 4 ;
}

  function collisiona(obj1, obj2){
  let x1 = obj1.object3D.position.x;
  let x2 = obj2.object3D.position.x;
  let z1 = obj1.object3D.position.z;
  let z2 = obj2.object3D.position.z;

  let distance = Math.sqrt((x2 - x1)**2 + (z2 - z1)**2);

  return distance <= 1.8 ;
}

function collisionam(obj1, obj2){
  let x1 = obj1.object3D.position.x;
  let x2 = obj2.object3D.position.x;
  let z1 = obj1.object3D.position.z;
  let z2 = obj2.object3D.position.z;

  let distance = Math.sqrt((x2 - x1)**2 + (z2 - z1)**2);

  return distance > 1.8 && distance < 4 ;
}

  function collisionk(obj1, obj2){
  let x1 = obj1.object3D.position.x;
  let x2 = obj2.object3D.position.x;
  let z1 = obj1.object3D.position.z;
  let z2 = obj2.object3D.position.z;

  let distance = Math.sqrt((x2 - x1)**2 + (z2 - z1)**2);

  return distance <= 1.8 ;
}

  function collisionl(obj1, obj2){
  let x1 = obj1.object3D.position.x;
  let x2 = obj2.object3D.position.x;
  let z1 = obj1.object3D.position.z;
  let z2 = obj2.object3D.position.z;

  let distance = Math.sqrt((x2 - x1)**2 + (z2 - z1)**2);

  return distance <= 1.8 ;
}

function collisionevent(obj1, obj2){
  let x1 = obj1.object3D.position.x;
  let x2 = obj2.object3D.position.x;
  let z1 = obj1.object3D.position.z;
  let z2 = obj2.object3D.position.z;

  let distance = Math.sqrt((x2 - x1)**2 + (z2 - z1)**2);

  return distance <= 1 ;
}
  
  