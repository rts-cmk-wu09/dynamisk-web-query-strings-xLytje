const icons = document.querySelectorAll('.fa-heart');

icons.forEach(icon => {
  icon.addEventListener('click', () => {
    icon.classList.toggle('fa-regular');
    icon.classList.toggle('fa-solid');
  });
});
