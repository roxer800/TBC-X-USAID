const questionHeaderOne = document.querySelector('.first--question--header');
const questionHeaderTwo = document.querySelector('.second--question--header');
const questionHeaderThree = document.querySelector('.third--question--header');
const firstQuestion = document.querySelector('.first--question');
const secondQuestion = document.querySelector('.second--question');
const thirdQuestion = document.querySelector('.third--question');
const firstArrow = document.getElementById('first--question');
const secondArrow = document.getElementById('second--question');
const thirdArrow = document.getElementById('third--question');



let activeSlideIndexCollapsible = 0

questionHeaderOne.onclick= function(){
    if(activeSlideIndexCollapsible != 1){
        activeSlideIndexCollapsible = 1
    } else if ( activeSlideIndexCollapsible === 1){
        activeSlideIndexCollapsible = 0
    }
}
questionHeaderTwo.onclick= function(){
    if(activeSlideIndexCollapsible != 2){
        activeSlideIndexCollapsible = 2
    } else if ( activeSlideIndexCollapsible === 2){
        activeSlideIndexCollapsible = 0
    }
}
questionHeaderThree.onclick= function(){
    if(activeSlideIndexCollapsible != 3){
        activeSlideIndexCollapsible = 3
    } else if ( activeSlideIndexCollapsible === 3){
        activeSlideIndexCollapsible = 0
    }
}


function arrowChange(){
  if( activeSlideIndexCollapsible === 1 ){
    firstArrow.classList.replace('fa-arrow-down', 'fa-arrow-up')
  } else {
    firstArrow.classList.replace('fa-arrow-up','fa-arrow-down')
  }
  if( activeSlideIndexCollapsible === 2 ){
    secondArrow.classList.replace('fa-arrow-down', 'fa-arrow-up')
  } else {
    secondArrow.classList.replace('fa-arrow-up','fa-arrow-down')
  }
  if( activeSlideIndexCollapsible === 3 ){
    thirdArrow.classList.replace('fa-arrow-down', 'fa-arrow-up')
  } else {
    thirdArrow.classList.replace('fa-arrow-up','fa-arrow-down')
  }
}


function fadeIn(element) {
  let opacity = 0;
  element.style.display = 'block';
  const fadeInInterval = setInterval(function() {
    if (opacity < 1) {
      opacity += 0.1;
      element.style.opacity = opacity;
    } else {
      clearInterval(fadeInInterval);
    }
  }, 50);
}


  function fadeOut(element) {
    let opacity = 1;
    const fadeOutInterval = setInterval(function() {
      if (opacity > 0) {
        opacity -= 0.1;
        element.style.opacity = opacity;
      } else {
        element.style.display = 'none';
        clearInterval(fadeOutInterval);
      }
    }, 50);
  }



function showQuestions(){
    
    if(activeSlideIndexCollapsible === 0){
        fadeOut(firstQuestion)
        fadeOut(secondQuestion)
        fadeOut(thirdQuestion)
    }
    else if(activeSlideIndexCollapsible === 1){
        fadeIn(firstQuestion)
        fadeOut(secondQuestion)
        fadeOut(thirdQuestion)
    } else if(activeSlideIndexCollapsible === 2){
        fadeOut(firstQuestion)
        fadeIn(secondQuestion)
        fadeOut(thirdQuestion)
    } else if(activeSlideIndexCollapsible === 3){
        fadeOut(firstQuestion)
        fadeOut(secondQuestion)
        fadeIn(thirdQuestion)
    };
    arrowChange()
}


questionHeaderOne.addEventListener('click', () => showQuestions());
questionHeaderTwo.addEventListener('click', () => showQuestions());
questionHeaderThree.addEventListener('click', () => showQuestions());

