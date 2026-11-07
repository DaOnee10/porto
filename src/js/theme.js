const root = document.documentElement
const btn = document.querySelector('#theme-toggle')

const syncLabel = () => {
    const isDark = root.classList.contains('dark')
    btn.setAttribute(
        'aria-label',
        isDark ? 'Aktifkan mode terang' : 'Aktifkan mode gelap'
    )
}

btn.addEventListener('click', () => {
    const isDark = root.classList.toggle('dark')
    try {
        localStorage.setItem('theme', isDark ? 'dark' : 'light')
    } catch { }
    syncLabel()
})

syncLabel()