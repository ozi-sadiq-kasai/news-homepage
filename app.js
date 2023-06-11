const nav = document.querySelector('#nav-links')
const bar = document.querySelector('#menu')

bar.addEventListener('click',() => {
  const visibility = nav.getAttribute('data-visible')

  if(visibility === 'false'){
    nav.setAttribute('data-visible',true)
  }
  else{
    nav.setAttribute('data-visible',false)
  }
})