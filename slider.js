const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.image');
const bottom = document.querySelector('.bottom');

let slideNumber = 1;
const length = images.length;

const nextSlide = () => {
    slider.style.transform = `translateX(-${slideNumber * 800}px)`
    slideNumber++;
}

const previousSlide = () => {
    slider.style.transform = `translateX(-${(slideNumber-2) * 800}px)`
    slideNumber--;
}

const getFirstSlide = () => {
    slider.style.transform = `translateX(0px)`;
    slideNumber = 1;
}

const getLastSlide = () => {
    slider.style.transform = `translateX(-${(length - 1) * 800}px)`
    slideNumber = length;
}

const changeColor = () => {
    resetBackGround()
    buttons[slideNumber - 1].style.backgroundColor = 'black'
}

right.addEventListener('click', () => {
    slideNumber < images.length ? nextSlide() : getFirstSlide();
    changeColor()
})

left.addEventListener('click', () => {
    slideNumber > 1 ? previousSlide() : getLastSlide()
    resetBackGround()
    changeColor()
})

for (let i = 0; i < length; i++) {
    const div = document.createElement('div'); 
    div.className = 'button';
    bottom.appendChild(div)
}

const buttons = document.querySelectorAll('.button')
buttons[0].style.backgroundColor = 'black';

const resetBackGround = () => {
    buttons.forEach(button => {
    button.style.backgroundColor = 'transparent'
    })
}

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
    resetBackGround()
        slider.style.transform = `translateX(-${index * 800}px)`
        slideNumber = index + 1
        button.style.backgroundColor = 'black';
    })
})