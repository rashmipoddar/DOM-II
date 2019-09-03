let mainBlock = document.querySelector('.blocks');

let redBlock = document.querySelector('.block--red');
redBlock.addEventListener('click', () => {
  console.log('The red block is being clicked');
  mainBlock.prepend(redBlock);
});


let blueBlock = document.querySelector('.block--blue');
blueBlock.addEventListener('click', () => {
  console.log('The blue block is being clicked');
  mainBlock.prepend(blueBlock);
});

let greenBlock = document.querySelector('.block--green');
greenBlock.addEventListener('click', () => {
  console.log('The green block is being clicked');
  mainBlock.prepend(greenBlock);
});

let pinkBlock = document.querySelector('.block--pink');
pinkBlock.addEventListener('click', () => {
  console.log('The pink block is being clicked');
  mainBlock.prepend(pinkBlock);
});

let grayBlock = document.querySelector('.block--gray');
grayBlock.addEventListener('click', () => {
  console.log('The gray block is being clicked');
  mainBlock.prepend(grayBlock);
});