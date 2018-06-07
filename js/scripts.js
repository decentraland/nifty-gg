//window.onscroll = function() {navBarControl()};

document.addEventListener('scroll', navBarControl, true);
//document.addEventListener('touchmove', navBarControl, true);
//document.addEventListener('ontouchmove', navBarControl, true);


    
var sticky = false;

function navBarControl() {
    
    var main = document.querySelector(".intro");
    var nav = document.getElementById("main-nav");
    var mainPosition = getPosition(main);

    //alert(mainPosition.y)
    //console.log('scroll');
    
    var mainOffsets = document.querySelector('#intro').getBoundingClientRect();
    //alert(mainOffsets.y);
    var offsetTop = parseInt(mainPosition.y) - 130;
    
    if (window.pageYOffset >= offsetTop) {
      //  console.log('did');
        nav.classList.add("sticky");
    } else {    
        nav.classList.remove("sticky");
    }

}

function getPosition(element) {
    var xPosition = 0;
    var yPosition = 0;
    while(element) {
        xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }
    return { x: xPosition, y: yPosition };
}

scrollTo = function scrollTo(element) {
    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: element.offsetTop
    });
    console;
  };

window.onload = function(){
/*
    var checkBox = document.querySelector('.switch input');
  if (checkBox.checked == true){
	console.log('checked');
  }
checkBox.addEventListener( 'change', function() {
	var speakersOn;
    var speakersOff;
    if(this.checked) {
        console.log('change detected');
		speakersOn = document.querySelectorAll('.day-1');
        speakersOff = document.querySelectorAll('.day-2');
    } else {
        speakersOn = document.querySelectorAll('.day-2');
    speakersOff = document.querySelectorAll('.day-1');
    }
    
    for (i = 0; i < speakersOn.length; ++i) {
        speakersOn[i].classList.add("hide");
	    speakersOff[i].classList.remove("hide");
    }
});
*/

var hamburguer = document.querySelector('.hamburguer-icon');
hamburguer.addEventListener('click', (evt) => {

var mainNav = document.querySelector('#main-nav');
  
if (mainNav.classList.contains('closed')) {
//console.log('open');
document.querySelector('#main-nav').classList.remove('closed');
document.querySelector('#main-nav').classList.add('opened');
} else {
//console.log('close');
document.querySelector('#main-nav').classList.remove('opened');
document.querySelector('#main-nav').classList.add('closed');
} 

}, true)



};
