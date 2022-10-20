let credits,a,begin,end,d = -162;
window.onload=function(){
  begin = document.getElementById("begin");
  end = document.getElementById("end");
  
  credits = document.getElementById("rolling");
  roll();
}

function roll(){
  a = 0.01;
  credits.object3D.position.y += a;
  d += 0.01;
  end.setAttribute("position",{x:0,y:200,z:d});
  var zs = setTimeout(roll,10);
  if(end.getAttribute("visible") && collisionevent(begin,end)){
    console.log("dwada");
    clearTimeout(zs);
  }
}

function collisionevent(obj1, obj2){
  let x1 = obj1.object3D.position.x;
  let x2 = obj2.object3D.position.x;
  let z1 = obj1.object3D.position.z;
  let z2 = obj2.object3D.position.z;

  let distance = Math.sqrt((x2 - x1)**2 + (z2 - z1)**2);

  return distance <= 1 ;
}