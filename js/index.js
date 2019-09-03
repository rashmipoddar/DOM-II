// Your code goes here
const navContainer = document.querySelector('.nav-container');

navContainer.addEventListener('mouseenter', () => {
  navContainer.style.backgroundColor = '#17A2B8';
});

navContainer.addEventListener('mouseleave', () => {
  navContainer.style.backgroundColor = 'white';
});

window.addEventListener('scroll', () => {
  navContainer.style.backgroundColor = '#17A2B8';
});

const mainImg = document.querySelector('.intro img');

mainImg.addEventListener('drag', () => {
  mainImg.style.transform = 'skew(20deg)';
});

mainImg.addEventListener('dragend', () => {
  mainImg.style.transform = 'skew(0deg)';
});

const middleHeading = document.querySelector('.text-content h2');
const middleSectionDiv = document.querySelector('.content-section');

middleHeading.addEventListener('dblclick', () => {
  middleSectionDiv.style.flexDirection = 'row-reverse';
});

window.addEventListener('resize', () => {
  middleSectionDiv.style.flexDirection = 'column';
});

const destinationImg = document.querySelector('.content-destination img');

document.addEventListener('wheel', () => {
  destinationImg.style.transform = 'scale(1.2)';
});

const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    button.style.color = '#147bcc';
    button.style.backgroundColor = 'black';
  }); 
});

const pickDestination = document.querySelector('.content-destination');
document.addEventListener('keypress', () => {
  pickDestination.style.backgroundColor = '#17A2B8';  
})

const pickContent = document.querySelector('.content-pick');
pickContent.addEventListener('click', () => {
  pickContent.style.backgroundColor = 'lightblue';
})



