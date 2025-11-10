export function snowflakesFall() {
  const siteTitle = document.querySelector('header');
  if (!siteTitle) return;

  const bElement = siteTitle.querySelector('b');
  const fontSize = parseFloat(getComputedStyle(bElement).fontSize);
  const snowflakeSize = fontSize * 2;

  const snowContainer = document.createElement('div');
  snowContainer.classList.add('snow-container');
  siteTitle.appendChild(snowContainer);

  function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.textContent = '❄';
    snowflake.classList.add('snowflake');
    snowflake.style.fontSize = `${snowflakeSize}px`;
    snowflake.style.top = `${Math.random() * 100}%`;
    snowContainer.appendChild(snowflake);

    const duration = 10 + Math.random() * 5;
    snowflake.animate(
      [
        { transform: 'translateX(-10%)' },
        { transform: `translateX(${siteTitle.offsetWidth + 100}px)` }
      ],
      { duration: duration * 1000, easing: 'linear', fill: 'forwards' }
    ).onfinish = () => snowflake.remove();

    setTimeout(createSnowflake, Math.random() * 2000);
  }

  createSnowflake();
}

export function adjustMenuLayout() {
  function switchMenuLayout() {
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
window.addEventListener("load", switchMenuLayout);
window.addEventListener("resize", switchMenuLayout);
}
