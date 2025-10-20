document.addEventListener('DOMContentLoaded', () => {
  const textarea = document.querySelector('#details');
  if (!textarea) return;

  // Створюємо tooltip
  const tooltip = document.createElement('div');
  tooltip.classList.add('tooltip', 'hidden');
  tooltip.textContent = 'Ваша думка для нас важлива! Конкретизуйте мету звернення, будь ласка';
  textarea.parentElement.classList.add('relative');
  textarea.parentElement.appendChild(tooltip);

  // Ефекти при наведенні
  textarea.addEventListener('mouseenter', () => {
    textarea.classList.add('textarea-hover');
    tooltip.classList.remove('hidden');
  });

  textarea.addEventListener('mouseleave', () => {
    textarea.classList.remove('textarea-hover');
    tooltip.classList.add('hidden');
  });
});
