let section1, section2, reanimateinfo, helltakerinfo, tempinfo, guiltyinfo, aotinfo,cryinginfo, oneinfo, gensoinfo;
window.onload=function(){
section1 = document.getElementById("section1");
section2 = document.getElementById("section2");
reanimateinfo = document.getElementById("reanimateinfo");
helltakerinfo = document.getElementById("helltakerinfo");
tempinfo = document.getElementById("tempinfo");
guiltyinfo = document.getElementById("guiltyinfo");
aotinfo = document.getElementById("aotinfo");
cryinginfo = document.getElementById("cryinginfo");
oneinfo = document.getElementById("oneinfo");
gensoinfo = document.getElementById("gensoinfo");
section2.setAttribute('visible',false);
reanimateinfo.setAttribute('visible',false);
helltakerinfo.setAttribute('visible',false);
tempinfo.setAttribute('visible',false);
guiltyinfo.setAttribute('visible',false);
aotinfo.setAttribute('visible',false);
cryinginfo.setAttribute('visible',false);
oneinfo.setAttribute('visible',false);
gensoinfo.setAttribute('visible',false);
}

AFRAME.registerComponent('reanimate', {

    init: function () {
      var el = this.el;

      el.addEventListener('click', function () {
        helltakerinfo.setAttribute('visible', false);
        reanimateinfo.setAttribute('visible', true);
        tempinfo.setAttribute('visible',false);
        guiltyinfo.setAttribute('visible',false);
        aotinfo.setAttribute('visible',false);
cryinginfo.setAttribute('visible',false);
        oneinfo.setAttribute('visible',false);
        gensoinfo.setAttribute('visible',false);
      });
    }
  });
AFRAME.registerComponent('helltaker', {

    init: function () {
      var el = this.el;

      el.addEventListener('click', function () {
        helltakerinfo.setAttribute('visible', true);
        reanimateinfo.setAttribute('visible', false);
        tempinfo.setAttribute('visible',false);
        guiltyinfo.setAttribute('visible',false);
        aotinfo.setAttribute('visible',false);
cryinginfo.setAttribute('visible',false);
        oneinfo.setAttribute('visible',false);
        gensoinfo.setAttribute('visible',false);
      });
    }
  });
AFRAME.registerComponent('tempestissimo', {

    init: function () {
      var el = this.el;

      el.addEventListener('click', function () {
        helltakerinfo.setAttribute('visible', false);
        reanimateinfo.setAttribute('visible', false);
        tempinfo.setAttribute('visible', true);
        guiltyinfo.setAttribute('visible',false);
        aotinfo.setAttribute('visible',false);
cryinginfo.setAttribute('visible',false);
        oneinfo.setAttribute('visible',false);
        gensoinfo.setAttribute('visible',false);
      });
    }
  });
AFRAME.registerComponent('guiltycrown', {

    init: function () {
      var el = this.el;

      el.addEventListener('click', function () {
        helltakerinfo.setAttribute('visible', false);
        reanimateinfo.setAttribute('visible', false);
        tempinfo.setAttribute('visible', false);
        guiltyinfo.setAttribute('visible',true);
        aotinfo.setAttribute('visible',false);
cryinginfo.setAttribute('visible',false);
        oneinfo.setAttribute('visible',false);
        gensoinfo.setAttribute('visible',false);
      });
    }
  });
AFRAME.registerComponent('aot', {

    init: function () {
      var el = this.el;

      el.addEventListener('click', function () {
        helltakerinfo.setAttribute('visible', false);
        reanimateinfo.setAttribute('visible', false);
        tempinfo.setAttribute('visible', false);
        guiltyinfo.setAttribute('visible',false);
        aotinfo.setAttribute('visible',true);
        cryinginfo.setAttribute('visible',false);
        oneinfo.setAttribute('visible',false);
        gensoinfo.setAttribute('visible',false);
      });
    }
  });
AFRAME.registerComponent('crying', {

    init: function () {
      var el = this.el;

      el.addEventListener('click', function () {
        helltakerinfo.setAttribute('visible', false);
        reanimateinfo.setAttribute('visible', false);
        tempinfo.setAttribute('visible', false);
        guiltyinfo.setAttribute('visible',false);
        aotinfo.setAttribute('visible',false);
        cryinginfo.setAttribute('visible',true);
        aotinfo.setAttribute('visible',false);
        oneinfo.setAttribute('visible',false);
        gensoinfo.setAttribute('visible',false);
      });
    }
  });
AFRAME.registerComponent('one', {

    init: function () {
      var el = this.el;

      el.addEventListener('click', function () {
        helltakerinfo.setAttribute('visible', false);
        reanimateinfo.setAttribute('visible', false);
        tempinfo.setAttribute('visible', false);
        guiltyinfo.setAttribute('visible',false);
        aotinfo.setAttribute('visible',false);
        cryinginfo.setAttribute('visible',false);
        aotinfo.setAttribute('visible',false);
        oneinfo.setAttribute('visible',true);
        gensoinfo.setAttribute('visible',false);
      });
    }
  });
AFRAME.registerComponent('genso', {

    init: function () {
      var el = this.el;

      el.addEventListener('click', function () {
        helltakerinfo.setAttribute('visible', false);
        reanimateinfo.setAttribute('visible', false);
        tempinfo.setAttribute('visible', false);
        guiltyinfo.setAttribute('visible',false);
        aotinfo.setAttribute('visible',false);
        cryinginfo.setAttribute('visible',false);
        aotinfo.setAttribute('visible',false);
        oneinfo.setAttribute('visible',false);
        gensoinfo.setAttribute('visible',true);
      });
    }
  });
AFRAME.registerComponent('tomenu2', {
  init: function(){
    var el = this.el;
    el.addEventListener('click', function (){
      section2.setAttribute('visible',true);
      section2.setAttribute('position',{x:0,y:0,z:0});
      section1.setAttribute('visible',false);
      section1.setAttribute('position',{x:0,y:0,z:-2});
      
    });
  }
});
AFRAME.registerComponent('tomenu1', {
  init: function(){
    var el = this.el;
    el.addEventListener('click', function (){
      section2.setAttribute('visible',false);
      section2.setAttribute('position',{x:0,y:0,z:-2});
      section1.setAttribute('visible',true);
      section1.setAttribute('position',{x:0,y:0,z:-1});
      
    });
  }
});
AFRAME.registerComponent('selection', {

    init: function () {
      var el = this.el;
      var defaultColor = el.getAttribute('material').color;
      

      el.addEventListener('mouseenter', function () {
        el.setAttribute('color', "red");
        el.object3D.visible = true;
      });

      el.addEventListener('mouseleave', function () {
        el.setAttribute('color', defaultColor);
      });
    }
  });

  AFRAME.registerComponent('song', {

    init: function () {
      var el = this.el;
      var entity = document.querySelector('[sound]');

      el.addEventListener('click', function () {
        el.setAttribute('sound', el.components.sound.playSound());
      });
      el.addEventListener('mouseleave', function () {
        el.setAttribute('sound', el.components.sound.stopSound());
      });
    }
  });


AFRAME.registerComponent('switch', {
  init: function(){
    var el = this.el;
    let test;
    test = document.querySelector("#test");
    let test1;
    test1 = document.querySelector("#test1");
    var defaultposition = test1.getAttribute('position');
    var defaultposition1 = test.getAttribute('position');

    el.addEventListener('click',function(){
      test.setAttribute('position',defaultposition);
      test1.setAttribute('position',defaultposition1);
    });
  }

});

AFRAME.registerComponent('game1', {

    init: function () {
      var el = this.el;
      

      el.addEventListener('click', function () {
        location.href="Genso_Connect.html";
      });

    }
  });

AFRAME.registerComponent('game2', {

    init: function () {
      var el = this.el;
      

      el.addEventListener('click', function () {
        location.href="Reanimate.html";
      });

    }
  });

AFRAME.registerComponent('game3', {

    init: function () {
      var el = this.el;
      

      el.addEventListener('click', function () {
        location.href="Tempestissimo.html";
      });

    }
  });
AFRAME.registerComponent('game4', {

    init: function () {
      var el = this.el;
      

      el.addEventListener('click', function () {
        location.href="mydearest.html";
      });

    }
  });
AFRAME.registerComponent('game5', {

    init: function () {
      var el = this.el;
      

      el.addEventListener('click', function () {
        location.href="oneday.html";
      });

    }
  });





