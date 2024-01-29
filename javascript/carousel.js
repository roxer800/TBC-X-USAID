const slider = document.querySelector('.slider')
const firstSlide = document.querySelector('.first--slide')
const secondSlide = document.querySelector('.second--slide')
const thirdSlide = document.querySelector('.third--slide')
const firstDot = document.querySelector('.first--dot')
const secondDot = document.querySelector('.second--dot')
const thirdDot = document.querySelector('.third--dot')
const arrowLeft = document.querySelector('.arrow--left')
const arrowRight = document.querySelector('.arrow--right')
const slidesLength = slider.querySelectorAll('div').length



let activeSlideIndexCarousel = 0


arrowRight.addEventListener('click', () => changeSlide('right'))
arrowLeft.addEventListener('click', () => changeSlide('left'))


function changeSlide(direction) {
    if( direction === 'right'){
        activeSlideIndexCarousel++;
        if(activeSlideIndexCarousel > slidesLength - 1){
            activeSlideIndexCarousel = 0
        }
    } else if( direction === 'left'){
        activeSlideIndexCarousel--
        if(activeSlideIndexCarousel < 0 ){
            activeSlideIndexCarousel = slidesLength - 1
        }
    }
    
    if(activeSlideIndexCarousel === 0){
        firstDot.style.backgroundColor = 'white';
        secondDot.style.backgroundColor = '#bbb';
        thirdDot.style.backgroundColor = '#bbb';
    } else if( activeSlideIndexCarousel === 1){
        firstDot.style.backgroundColor = '#bbb';
        secondDot.style.backgroundColor = 'white';
        thirdDot.style.backgroundColor = '#bbb';
    } else if( activeSlideIndexCarousel === 2){
        firstDot.style.backgroundColor = '#bbb';
        secondDot.style.backgroundColor = '#bbb';
        thirdDot.style.backgroundColor = 'white';
    }


    if(activeSlideIndexCarousel === 0){
        firstSlide.style.opacity = 1
        secondSlide.style.opacity = 0
        thirdSlide.style.opacity = 0
    } else if (activeSlideIndexCarousel === 1){
        firstSlide.style.opacity = 0
        secondSlide.style.opacity = 1
        thirdSlide.style.opacity = 0
    } else if(activeSlideIndexCarousel === 2){
        firstSlide.style.opacity = 0
        secondSlide.style.opacity = 0
        thirdSlide.style.opacity = 1
    }
}



function interval(){
    changeSlide('right')
};

setInterval(interval, 7000)