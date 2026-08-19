(function() {
    const body = document.body;
    const wrapper = document.getElementById('spinnerWrapper');
    const bgBtns = document.querySelectorAll('[data-bg]');
    const sizeBtns = document.querySelectorAll('[data-size]');

    bgBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            bgBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const bg = btn.dataset.bg;
            body.classList.toggle('bg-light', bg === 'light');
        });
    });

    sizeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            sizeBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const size = btn.dataset.size;
            wrapper.classList.remove('size-sm', 'size-md', 'size-lg');
            wrapper.classList.add(`size-${size}`);
        });
    });

    // Keyboard shortcuts: D = Dark, L = Light
    document.addEventListener('keydown', (e) => {
        if (e.key === 'd' || e.key === 'D') {
            document.querySelector('[data-bg="dark"]')?.click();
        }
        if (e.key === 'l' || e.key === 'L') {
            document.querySelector('[data-bg="light"]')?.click();
        }
    });
})();
