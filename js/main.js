document.addEventListener('DOMContentLoaded', () => {
  const siteTitle = document.querySelector('header');
  if (!siteTitle) return;

  const bElement = siteTitle.querySelector('b');
  const fontSize = parseFloat(getComputedStyle(bElement).fontSize);
  const snowflakeSize = fontSize * 2; // Подвійний розмір

  // Створюємо контейнер для сніжинок
  const snowContainer = document.createElement('div');
  snowContainer.style.position = 'absolute';
  snowContainer.style.top = '0';
  snowContainer.style.left = '0';
  snowContainer.style.width = '100%';
  snowContainer.style.height = '100%';
  snowContainer.style.overflow = 'hidden';
  snowContainer.style.pointerEvents = 'none';
  siteTitle.appendChild(snowContainer);

  // Функція створення сніжинки
  function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.textContent = '❄';
    snowflake.style.position = 'absolute';
    snowflake.style.fontSize = `${snowflakeSize}px`;
    snowflake.style.color = 'rgba(255, 255, 255, 0.7)';
    snowflake.style.left = '-10%';
    snowflake.style.top = `${Math.random() * 100}%`;
    snowflake.style.zIndex = '1001'; // Поверх тексту
    snowContainer.appendChild(snowflake);

    // Анімація руху зліва направо
    const duration = 10 + Math.random() * 5;
    snowflake.animate(
      [
        { transform: 'translateX(-10%)' },
        { transform: `translateX(${siteTitle.offsetWidth + 100}px)` }
      ],
      {
        duration: duration * 1000,
        easing: 'linear',
        fill: 'forwards'
      }
    ).onfinish = () => snowflake.remove();

    // Створюємо нову сніжинку через випадковий час
    setTimeout(createSnowflake, Math.random() * 2000);
  }

  // Запускаємо першу сніжинку після якої полетять інші
  createSnowflake();
});

function adjustMenuLayout() {
  const nav = document.querySelector("nav");
  const main = document.querySelector("main");
  const footer = document.querySelector("footer");

  if (window.innerWidth <= 768) {
    nav.classList.add("vertical");
    main.classList.add("shifted");
    footer.classList.add("shifted");
  } else {
    nav.classList.remove("vertical");
    main.classList.remove("shifted");
    footer.classList.remove("shifted");
  }
}
window.addEventListener("load", adjustMenuLayout);

// І при зміні розміру вікна
window.addEventListener("resize", adjustMenuLayout);