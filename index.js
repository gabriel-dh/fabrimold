let buttonMenu = document.querySelector('.menu-bar')
let closeMenu = document.querySelector('.close-bar')
let menuSide = document.querySelector('.menu-side')

buttonMenu.addEventListener('click', menuClick)
closeMenu.addEventListener('click', closeMenu2)


 function menuClick(){
 menuSide.classList.add('active')
 buttonMenu.classList.remove('active')
 closeMenu.classList.remove('off')    
 }

 function closeMenu2(){
  menuSide.classList.remove('active')
  buttonMenu.classList.add('active') 
  closeMenu.classList.add('off')  
  }

// function menuClick2(){
//   menuSide.classList.remove('desactive')  
// }