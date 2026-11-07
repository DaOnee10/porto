const btn = document.querySelector('#menu-btn')
const menu = document.querySelector('#mobile-menu')

btn.addEventListener('click', () => {
  const isHidden = menu.classList.toggle('hidden')
  btn.setAttribute('aria-expanded', String(!isHidden))
})

// Tutup menu setelah salah satu tautan diklik
menu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.add('hidden')
    btn.setAttribute('aria-expanded', 'false')
  })
})