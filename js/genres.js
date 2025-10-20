document.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector('main');
  if (!main) return;

  const topics = [
    { title: 'RPG', description: 'Role-playing games with deep storylines and character development.', anchor: 'rpg' },
    { title: 'FPS', description: 'First-person shooters with dynamic gameplay.', anchor: 'fps' },
    { title: 'Strategy', description: 'Strategy games that require planning and tactics.', anchor: 'strategy' }
  ];

  const accordion = document.createElement('div');
  accordion.classList.add('accordion', 'fixed-accordion');
  main.prepend(accordion);

  const searchContainer = document.createElement('div');
  searchContainer.classList.add('search-container');
  searchContainer.innerHTML = `
    <label for="search">Search</label>
    <input type="text" id="search" placeholder="What genre are you looking for?">
  `;
  main.prepend(searchContainer);

  topics.forEach((topic) => {
    const item = document.createElement('div');
    item.classList.add('accordion-item');
    item.innerHTML = `
      <button class="accordion-title"><a href="#${topic.anchor}">${topic.title}</a></button>
      <div class="accordion-content hidden">${topic.description}</div>
    `;
    accordion.appendChild(item);

    const title = item.querySelector('.accordion-title');
    const content = item.querySelector('.accordion-content');
    title.addEventListener('click', (event) => {
      event.preventDefault();
      content.classList.toggle('hidden');
      const targetElement = document.querySelector(`#${topic.anchor}`);
      if (targetElement) targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  const searchInput = document.querySelector('#search');
  const articles = document.querySelectorAll('.lot');
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    articles.forEach(article => {
      const title = article.querySelector('h2').textContent.toLowerCase();
      article.classList.toggle('hidden', !title.includes(query));
    });
  });
});
