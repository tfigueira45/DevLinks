let isLight = false;
document.querySelector('.switch button').addEventListener('click', function(){
  document.body.classList.toggle('light',!isLight)
  isLight = !isLight
})