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