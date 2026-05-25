document.addEventListener('DOMContentLoaded', () => {
    // Инициализация иконок
    if (window.lucide) {
        lucide.createIcons();
    }

    // Блок "Что я делаю" — единый текст снизу
    const cards = document.querySelectorAll('.feature-card');
    const details = document.getElementById('feature-details');

    const content = {
        backend: `
            <p>FastAPI, Asyncio, Kafka, архитектура микросервисов.</p>
            <a href="#">Кейс Backend →</a>
        `,
        parsing: `
            <p>curl_cffi, CDN, обход антиботов, сбор данных.</p>
            <a href="#">Кейс Парсинг →</a>
        `,
        cv: `
            <p>YOLOv8, OpenCV, real‑time обработка видео.</p>
            <a href="#">Кейс Computer Vision →</a>
        `,
        automation: `
            <p>Playwright, browser‑agents, persistent context.</p>
            <a href="#">Кейс Automation →</a>
        `
    };

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const key = card.dataset.feature;

            // если уже активен — скрываем
            if (card.classList.contains('active')) {
                card.classList.remove('active');
                details.style.display = 'none';
                details.innerHTML = '';
                return;
            }

            // сбрасываем остальные
            cards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');

            // показываем контент
            details.innerHTML = content[key] || '';
            details.style.display = 'block';
        });
    });

    // 3D hover для проектов
    document.querySelectorAll('.tilt').forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left - rect.width / 2) / 15;
            const y = (e.clientY - rect.top - rect.height / 2) / 15;
            card.style.transform = `rotateX(${-y}deg) rotateY(${x}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'rotateX(0deg) rotateY(0deg)';
        });
    });
});
