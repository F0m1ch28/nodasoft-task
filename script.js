document.getElementById('openPopup').addEventListener('click', function() {
  document.getElementById('popup').classList.add('open')
})

document.querySelector('.popup-close').addEventListener('click', function() {
  document.getElementById('popup').classList.remove('open')
})