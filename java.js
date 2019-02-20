var buttonn = document.getElementById("buttonn");
var audio = document.getElementById("player");

buttonn.addEventListener("click", function(){
  if(audio.paused){
    audio.play();
    buttonn.innerHTML = "Pause";
  } else {
    audio.pause();
    buttonn.innerHTML = "Play";
  }

});

var buttonn2 = document.getElementById("buttonn2");
var audio2 = document.getElementById("player2");

buttonn2.addEventListener("click", function(){
  if(audio2.paused){
    audio2.play();
    buttonn2.innerHTML = "Pause";
  } else {
    audio2.pause();
    buttonn2.innerHTML = "Play";
  }

});





// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}



// Emils code

function shiftLeft() {
  const boxes = document.querySelectorAll(".box");
  const tmpNode = boxes[0];
  boxes[0].className = "box move-out-from-left";

  setTimeout(function() {
      if (boxes.length > 5) {
          tmpNode.classList.add("box--hide");
          boxes[5].className = "box move-to-position5-from-left";
      }
      boxes[1].className = "box move-to-position1-from-left";
      boxes[2].className = "box move-to-position2-from-left";
      boxes[3].className = "box move-to-position3-from-left";
      boxes[4].className = "box move-to-position4-from-left";
      boxes[0].remove();

      document.querySelector(".cards__container").appendChild(tmpNode);

  }, 500);

}

function shiftRight() {
  const boxes = document.querySelectorAll(".box");
  boxes[4].className = "box move-out-from-right";
  setTimeout(function() {
      const noOfCards = boxes.length;
      if (noOfCards > 4) {
          boxes[4].className = "box box--hide";
      }

      const tmpNode = boxes[noOfCards - 1];
      tmpNode.classList.remove("box--hide");
      boxes[noOfCards - 1].remove();
      let parentObj = document.querySelector(".cards__container");
      parentObj.insertBefore(tmpNode, parentObj.firstChild);
      tmpNode.className = "box move-to-position1-from-right";
      boxes[0].className = "box move-to-position2-from-right";
      boxes[1].className = "box move-to-position3-from-right";
      boxes[2].className = "box move-to-position4-from-right";
      boxes[3].className = "box move-to-position5-from-right";
  }, 500);

}


window.onscroll = function() {

  var blooper = document.getElementById("myvideo");

  if(blooper.getBoundingClientRect().bottom < 400
  || blooper.getBoundingClientRect().top > 400)
  blooper.pause();

  else
    blooper.play();
}