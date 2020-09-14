document.querySelector(".C").addEventListener("click", function() {
  var tomc = new Audio("notes/c (mp3cut.net).mp3");
  tomc.play();

});
document.querySelector(".Cs").addEventListener("click", function() {
  var tomc = new Audio("notes/c (mp3cut.net).mp3");
  tomc.pause();
  tomc.currentTime = 0;

  var tomcs = new Audio("notes/cs (mp3cut.net).mp3");
  tomcs.play();



});
document.querySelector(".D").addEventListener("click", function() {
  var tom1 = new Audio("notes/d (mp3cut.net).mp3");
  tom1.play();

});
document.querySelector(".Ds").addEventListener("click", function() {
  var tom1 = new Audio("notes/ds (mp3cut.net).mp3");
  tom1.play();

});
document.querySelector(".E").addEventListener("click", function() {
  var tom1 = new Audio("notes/e (mp3cut.net).mp3");
  tom1.play();

});
document.querySelector(".F").addEventListener("click", function() {
  var tom1 = new Audio("notes/f (mp3cut.net).mp3");
  tom1.play();

});
document.querySelector(".Fs").addEventListener("click", function() {
  var tom1 = new Audio("notes/fs (mp3cut.net).mp3");
  tom1.play();

});
document.querySelector(".G").addEventListener("click", function() {
  var tom1 = new Audio("notes/g (mp3cut.net).mp3");
  tom1.play();

});
document.querySelector(".Gs").addEventListener("click", function() {
  var tom1 = new Audio("notes/gs (mp3cut.net).mp3");
  tom1.play();

});
document.querySelector(".A").addEventListener("click", function() {
  var tom1 = new Audio("notes/a (mp3cut.net).mp3");
  tom1.play();

});
document.querySelector(".As").addEventListener("click", function() {
  var tom1 = new Audio("notes/as (mp3cut.net).mp3");
  tom1.play();

});
document.querySelector(".B").addEventListener("click", function() {
  var tom1 = new Audio("notes/b (mp3cut.net).mp3");
  tom1.play();

});




document.addEventListener("keypress", function(event) {

  switch (event.key) {
    case "r":
      var tomc = new Audio("notes/c (mp3cut.net).mp3");
      tomc.play();
      break;


  }
  switch (event.key) {
    case "t":
      var tomd = new Audio("notes/d (mp3cut.net).mp3");
      tomd.play();
      break;


  }
  switch (event.key) {
    case "y":
      var tome = new Audio("notes/e (mp3cut.net).mp3");
      tome.play();
      break;


  }
  switch (event.key) {
    case "u":
      var tomf = new Audio("notes/f (mp3cut.net).mp3");
      tomf.play();
      break;


  }
  switch (event.key) {
    case "i":
      var tomg = new Audio("notes/g (mp3cut.net).mp3");
      tomg.play();
      break;


  }
  switch (event.key) {
    case "o":
      var toma = new Audio("notes/a (mp3cut.net).mp3");
      toma.play();
      break;


  }
  switch (event.key) {
    case "p":
      var tomb = new Audio("notes/b (mp3cut.net).mp3");
      tomb.play();
      break;


  }
  switch (event.key) {
    case "5":
      var tomcs = new Audio("notes/cs (mp3cut.net).mp3");
      tomcs.play();
      break;


  }
  switch (event.key) {
    case "6":
      var tomds = new Audio("notes/ds (mp3cut.net).mp3");
      tomds.play();
      break;


  }
  switch (event.key) {
    case "8":
      var tomfs = new Audio("notes/fs (mp3cut.net).mp3");
      tomfs.play();
      break;

  }
  switch (event.key) {
    case "9":
      var tomgs = new Audio("notes/gs (mp3cut.net).mp3");
      tomgs.play();
      break;


  }
  switch (event.key) {
    case "0":
      var tomas = new Audio("notes/as (mp3cut.net).mp3");
      tomas.play();
      break;

    default:

  }






});
