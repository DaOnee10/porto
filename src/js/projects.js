const projects = [
    {
        title: 'Sistem Layanan &amp; Arsip Surat-Menyurat FKIPK IAKN Kupang',
        category: 'Sistem Informasi',
        description:
            'Aplikasi web untuk mengelola layanan administrasi dan arsip surat-menyurat secara digital, dilengkapi chatbot NLP yang menjawab pertanyaan layanan dengan bahasa alami.',
        tags: ['PHP', 'Chatbot NLP'],
        image: null, // contoh nanti: '/images/fkipk.webp'
        demo: null,
        repo: null,
    },
    {
        title: 'Sistem Informasi dan Arsip Paroki Santa Maria Assumpta Kupang',
        category: 'Sistem Informasi',
        description:
            'Sistem informasi web untuk mengelola informasi dan arsip paroki secara terorganisasi dan mudah diakses.',
        tags: ['PHP'],
        image: null,
        demo: null,
        repo: null,
    },
    {
        title: 'Portal Berita Liputan Timor Raya',
        category: 'Portal Berita',
        description:
            'Portal berita digital sebagai wadah publikasi informasi dan berita seputar wilayah Timor Raya.',
        tags: ['PHP'],
        image: null,
        demo: null,
        repo: null,
    },
    {
        title: 'Kearsipan dan Perpustakaan Kabupaten Kupang',
        category: 'Sistem Informasi',
        description:
            'Sistem digital untuk mengelola data kearsipan dan perpustakaan Kabupaten Kupang.',
        tags: [], // TODO: isi teknologi yang kamu pakai
        image: null,
        demo: null,
        repo: null,
    },
    {
        title: 'SI SEHAT LEMBATA',
        category: 'Aplikasi Web',
        description:
            'Aplikasi web penyedia informasi dan layanan kesehatan untuk wilayah Lembata.',
        tags: [], // TODO: isi teknologi yang kamu pakai
        image: null,
        demo: null,
        repo: null,
    },
    {
        title: 'Klasifikasi Stunting Balita dari Citra Foto Tubuh dengan CNN',
        category: 'Machine Learning',
        description:
            'Penelitian klasifikasi stunting berbasis citra menggunakan Convolutional Neural Network untuk mempelajari pola visual terkait stunting.',
        tags: ['CNN', 'Deep Learning'],
        image: null,
        demo: null,
        repo: null,
    },
]

const grid = document.querySelector('#project-grid')

const renderCard = (p, i) => {
    const media = p.image
        ? `<img src="${p.image}" alt="Tampilan ${p.title}" loading="lazy"
            class="aspect-video w-full object-cover" />`
        : `<div class="flex aspect-video items-center justify-center bg-slate-100 dark:bg-slate-800 text-sm text-slate-400">
         Screenshot
       </div>`

    const tags = p.tags
        .map(
            (t) =>
                `<li class="rounded-full bg-brand-50 dark:bg-brand-500/15 px-3 py-1 font-medium text-brand-700 dark:text-brand-100">${t}</li>`
        )
        .join('')

    const links = [
        p.demo &&
        `<a href="${p.demo}" target="_blank" rel="noopener noreferrer"
          class="text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-100">Demo ↗</a>`,
        p.repo &&
        `<a href="${p.repo}" target="_blank" rel="noopener noreferrer"
          class="text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-100">Kode ↗</a>`,
    ]
        .filter(Boolean)
        .join('')

    return `
    <div data-reveal class="h-full" style="--reveal-delay: ${(i % 3) * 100}ms">
      <article class="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-800/50">
        ${media}
        <div class="flex flex-1 flex-col p-5">
          <p class="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">${p.category}</p>
          <h3 class="mt-2 font-semibold leading-snug text-slate-900 dark:text-white">${p.title}</h3>
          <p class="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">${p.description}</p>
          <ul class="mt-4 flex flex-wrap gap-2 text-xs">${tags}</ul>
          <div class="mt-auto flex gap-4 pt-5 text-sm font-semibold">${links}</div>
        </div>
      </article>
    </div>`
}

grid.innerHTML = projects.map(renderCard).join('')