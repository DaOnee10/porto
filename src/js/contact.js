const copyBtn = document.querySelector('#copy-email')
const statusEl = document.querySelector('#copy-status')

copyBtn.addEventListener('click', async () => {
    try {
        await navigator.clipboard.writeText(copyBtn.dataset.email)
        statusEl.textContent = 'Email tersalin ke clipboard!'
    } catch {
        statusEl.textContent = 'Gagal menyalin. Silakan salin manual.'
    }
    setTimeout(() => (statusEl.textContent = ''), 2500)
})