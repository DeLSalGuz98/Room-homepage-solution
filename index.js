//navigation
// get dom elements
const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const navMovile = document.getElementById('navMovile')

//events
openMenu.addEventListener('click', (e)=>{
  e.preventDefault();
  navMovile.classList.remove('movile--displayOff')
  navMovile.classList.add('movile--displayOn')
})
closeMenu.addEventListener('click', (e)=>{
  e.preventDefault();
  navMovile.classList.remove('movile--displayOn')
  navMovile.classList.add('movile--displayOff')
})

//carousel
//get dom elements
const carouselImage = document.getElementById('carouselImage');
const image = document.getElementById('image');
const carouselTitle = document.getElementById('carouselTitle');
const carouselDescription = document.getElementById('carouselDescription');
const carouselLeft = document.getElementById('carouselLeft');
const carouselRigth = document.getElementById('carouselRigth');

carouselRigth.addEventListener('click',()=>chamgeElementCarousel('rigth'));
carouselLeft.addEventListener('click',()=>chamgeElementCarousel('left'));
setInterval(()=>chamgeElementCarousel('rigth'), 10000)

let counter = 0
function chamgeElementCarousel(direction) {
  if(counter < 2 && direction == 'rigth'){
    counter += 1;
    setCarouselElements(counter);
  }else if(counter > 0 && direction == 'left'){
    counter -= 1;
    setCarouselElements(counter);
  }else if(counter >= 2 && direction == 'rigth'){
    counter = 0;
    setCarouselElements(counter);
  }else{
    counter = 2;
    setCarouselElements(counter);
  }
}

function setCarouselElements(index) {
  carouselImage.innerHTML = `<img id="image" class="carousel--image" src="./images/${carouselElements[index].img}.jpg" alt="${carouselElements[index].title}">`
  carouselTitle.innerHTML = carouselElements[index].title;
  carouselDescription.innerHTML = carouselElements[index].description
}

const carouselElements = [
  {
    img : 'desktop-image-hero-1',
    title: 'Discover innovative ways to decorate',
    description: `We provide unmatched quality, comfort, and style for property owners across the country. 
    Our experts combine form and function in bringing your vision to life. Create a room in your 
    own style with our collection and make your property a reflection of you and what you love.`
  },
  {
    img : 'desktop-image-hero-2',
    title: 'We are available all across the globe',
    description: `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
    Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
    store locator. Any questions? Don't hesitate to contact us today.`
  },
  {
    img : 'desktop-image-hero-3',
    title: 'Manufactured with the best materials',
    description: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
    to ensure that every product is made as perfect and as consistent as possible. With three decades of 
    experience in this industry, we understand what customers want for their home and office.`
  }
]