document.addEventListener('DOMContentLoaded', () => {
  const textarea = document.querySelector('#details');
  if (!textarea) return;

  // Створюємо tooltip
  const tooltip = document.createElement('div');
  tooltip.className = 'tooltip';
  tooltip.textContent = 'Ваша думка для нас важлива! Конкретизуйте мету звернення, будь ласка';
  tooltip.style.position = 'absolute';
  tooltip.style.background = 'rgba(0, 0, 0, 0.8)';
  tooltip.style.color = '#fff';
  tooltip.style.padding = '8px';
  tooltip.style.borderRadius = '4px';
  tooltip.style.display = 'none';
  tooltip.style.left = '50%';
  tooltip.style.top = '50%';
  tooltip.style.transform = 'translateX(-50%)';
  textarea.parentElement.style.position = 'relative';
  textarea.parentElement.appendChild(tooltip);

  // Ефекти при наведенні
  textarea.addEventListener('mouseenter', () => {
    textarea.style.background = 'rgba(255, 255, 255, 0.1)';
    textarea.style.border = '2px solid #9ad1ff';
    textarea.style.boxShadow = '0 0 10px rgba(154, 209, 255, 0.5)';
    tooltip.style.display = 'block';
  });

  textarea.addEventListener('mouseleave', () => {
    textarea.style.background = 'rgba(255, 255, 255, 0.02)';
    textarea.style.border = '1px solid rgba(255, 255, 255, 0.08)';
    textarea.style.boxShadow = 'none';
    tooltip.style.display = 'none';
  });
});