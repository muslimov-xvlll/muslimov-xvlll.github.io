document.addEventListener('DOMContentLoaded', () => {
    // Инициализация иконок
    if (window.lucide) {
        lucide.createIcons();
    }
});


// FLIP CARDS
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});

// PROJECT DATA — расширенное описание
const projectData = {
    watchdog: {
        title: "WatchDog‑Analytics",
        desc: `
            <p><strong>WatchDog‑Analytics</strong> — система мониторинга цен в реальном времени, 
            построенная на событийной архитектуре.</p>

            <p><strong>Задача:</strong> создать сервис, который отслеживает изменения цен на маркетплейсах 
            и уведомляет пользователей в реальном времени.</p>

            <p><strong>Архитектура:</strong></p>
            <ul>
                <li>Kafka — брокер событий, распределяющий задачи между воркерами</li>
                <li>FastAPI — REST API</li>
                <li>Redis — кеширование и дедупликация событий</li>
                <li>PostgreSQL — хранение истории цен</li>
                <li>Telegram Stars — монетизация</li>
            </ul>

            <p><strong>Фичи:</strong></p>
            <ul>
                <li>Real‑time обновления</li>
                <li>Горизонтальное масштабирование воркеров</li>
                <li>Гибкие фильтры уведомлений</li>
            </ul>

            <p><strong>Что показывает обо мне:</strong> умение строить распределённые системы, 
            работать с Kafka, проектировать архитектуру и оптимизировать производительность.</p>
        `,
        tech: "FastAPI · Kafka · Redis · PostgreSQL · Docker · Telegram API",
        github: "https://github.com/muslimov-xvlll/WatchDog--Analytics"
    },

    wbparser: {
        title: "WB Parser",
        desc: `
            <p><strong>WB Parser</strong> — глубокий асинхронный парсер Wildberries 
            с реверс‑инжинирингом CDN и обходом антибот‑защит.</p>

            <p><strong>Задача:</strong> получать скрытые данные, которые не доступны через публичные API.</p>

            <p><strong>Технические решения:</strong></p>
            <ul>
                <li>curl_cffi — имитация реального браузера</li>
                <li>Асинхронная обработка 1000+ запросов</li>
                <li>Реверс‑инжиниринг CDN‑эндпоинтов</li>
                <li>Система ретраев и обхода антиботов</li>
            </ul>

            <p><strong>Фичи:</strong></p>
            <ul>
                <li>Сбор статистики карточек</li>
                <li>Аналитика продавцов</li>
                <li>Сохранение данных в PostgreSQL</li>
            </ul>

            <p><strong>Что показывает обо мне:</strong> умение работать с низкоуровневым HTTP, 
            реверсить API, обходить защиту и писать высокопроизводительные асинхронные пайплайны.</p>
        `,

        tech: "Python · curl_cffi · Asyncio · PostgreSQL",
        github: "https://github.com/muslimov-xvlll/wb_parser_to_excel"
    },

    ergovision: {
        title: "ErgoVision",
        desc: `
            <p><strong>ErgoVision</strong> — система анализа осанки в реальном времени.</p>

            <p><strong>Задача:</strong> определять неправильную позу человека и уведомлять его.</p>

            <p><strong>Технические решения:</strong></p>
            <ul>
                <li>YOLOv8 — детекция человека</li>
                <li>OpenCV — анализ ключевых точек</li>
                <li>30 FPS real‑time обработка</li>
                <li>Система триггеров и уведомлений</li>
            </ul>

            <p><strong>Фичи:</strong></p>
            <ul>
                <li>Определение наклона головы</li>
                <li>Определение сутулости</li>
                <li>История нарушений</li>
            </ul>

            <p><strong>Что показывает обо мне:</strong> умение работать с CV, 
            оптимизировать real‑time пайплайны и строить ML‑интеграции.</p>
        `,

        tech: "YOLOv8 · OpenCV · Python · NumPy",
        github: "https://github.com/muslimov-xvlll/CV-project"
    },

    browseragent: {
        title: "Browser AI‑Agent",
        desc: `
            <p><strong>Browser AI‑Agent</strong> — автономный агент, который управляет браузером 
            как человек.</p>

            <p><strong>Задача:</strong> автоматизировать сложные сценарии, которые невозможно 
            выполнить обычным парсером.</p>

            <p><strong>Технические решения:</strong></p>
            <ul>
                <li>Playwright — управление браузером</li>
                <li>Persistent context — сохранение сессий</li>
                <li>LLM — принятие решений</li>
                <li>Асинхронная архитектура</li>
            </ul>

            <p><strong>Фичи:</strong></p>
            <ul>
                <li>Навигация по сайту</li>
                <li>Заполнение форм</li>
                <li>Клик‑действия</li>
                <li>Сложные сценарии без участия человека</li>
            </ul>

            <p><strong>Что показывает обо мне:</strong> умение строить AI‑агентов, 
            работать с Playwright и проектировать автономные системы.</p>
        `,

        tech: "Playwright · Python · Asyncio · LLM Integration",
        github: "https://github.com/muslimov-xvlll/browser_AI-agent"
    }
};

// MODAL LOGIC
const modal = document.getElementById('project-modal');
const modalContent = document.querySelector('.modal-content');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalTech = document.getElementById('modal-tech');
const modalGithub = document.getElementById('modal-github');

document.querySelectorAll('.more-btn').forEach(btn => {
    btn.addEventListener('click', e => {
        e.stopPropagation();
        const key = btn.dataset.project;
        const data = projectData[key];

        modalTitle.textContent = data.title;
        modalDesc.innerHTML = data.desc;
        modalTech.textContent = data.tech;
        modalGithub.href = data.github;

        modal.classList.add('show');
    });
});

document.querySelector('.modal-close').addEventListener('click', () => {
    modal.classList.remove('show');
});

modal.addEventListener('click', e => {
    if (e.target === modal) {
        modal.style.display = 'none';
        modal.classList.remove('show');
    }
});

