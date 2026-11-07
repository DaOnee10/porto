const items = document.querySelectorAll('[data-reveal]')

if ('IntersectionObserver' in window && items.length) {
    const observer = new IntersectionObserver(
        (entries, obs) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return
                entry.target.classList.add('is-visible')
                obs.unobserve(entry.target) // animasi sekali saja
            })
        },
        { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )
    items.forEach((el) => observer.observe(el))
} else {
    // Browser lama: tampilkan langsung
    items.forEach((el) => el.classList.add('is-visible'))
}