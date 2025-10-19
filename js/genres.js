document.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector('main');
  if (!main) return;

  // Дані для акордеона з відповідними id для якорів
  const topics = [
    { title: 'RPG', description: 'Role-playing games with deep storylines and character development.', anchor: 'rpg' },
    { title: 'FPS', description: 'First-person shooters with dynamic gameplay.', anchor: 'fps' },
    { title: 'Strategy', description: 'Strategy games that require planning and tactics.', anchor: 'strategy' }
  ];

  // Створюємо контейнер акордеона
  const accordion = document.createElement('div');
  accordion.className = 'accordion';
  accordion.style.position = 'fixed';
  accordion.style.top = '90px';
  accordion.style.left = '10px';
  accordion.style.maxWidth = '300px';
  accordion.style.backgroundColor = 'rgba(11, 20, 32, 0.8)';
  accordion.style.borderRadius = '6px';
  accordion.style.padding = '10px';
  accordion.style.zIndex = '1000';
  main.prepend(accordion);

  // Створюємо контейнер для пошуку
  const searchContainer = document.createElement('div');
  searchContainer.className = 'search-container';
  searchContainer.innerHTML = `
    <label for="search">Search</label>
    <input type="text" id="search" placeholder="What genre are you looking for?">
  `;
  searchContainer.style.width = '100%';
  main.prepend(searchContainer);

  // Додаємо елементи акордеона
  topics.forEach((topic) => {
    const item = document.createElement('div');
    item.className = 'accordion-item';
    item.innerHTML = `
      <button class="accordion-title"><a href="#${topic.anchor}">${topic.title}</a></button>
      <div class="accordion-content" style="display: none;">${topic.description}</div>
    `;
    accordion.appendChild(item);

    // Обробник подій для акордеона
    const title = item.querySelector('.accordion-title');
    const content = item.querySelector('.accordion-content');
    title.addEventListener('click', (event) => {
      event.preventDefault(); // Запобігаємо стандартному переходу по якорю
      const isOpen = content.style.display === 'block';
      content.style.display = isOpen ? 'none' : 'block';

      // Плавне прокручування до відповідного елемента
      const targetElement = document.querySelector(`#${topic.anchor}`);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Обробка пошуку
  const searchInput = document.querySelector('#search');
  const articles = document.querySelectorAll('.lot');
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    articles.forEach(article => {
      const title = article.querySelector('h2').textContent.toLowerCase();
      article.style.display = title.includes(query) ? 'flex' : 'none';
    });
  });
});