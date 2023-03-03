// const icons = document.querySelectorAll('.fa-heart');

// icons.forEach(icon => {
//   icon.addEventListener('click', () => {
//     icon.classList.toggle('fa-regular');
//     icon.classList.toggle('fa-solid');
//   });
// });

document.querySelector(".destinationslist").addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-heart")) {
    let destinationsId = e.target.closest("figure").attributes.id.value;
    if (!localStorage.getItem(destinationsId, destinationsId)) {
      localStorage.setItem(destinationsId, destinationsId);
      e.target.classList.add("fa-solid");
    } else {
      localStorage.removeItem(destinationsId);
      e.target.classList.remove("fa-solid");
      e.target.classList.add("fa-regular");
    }
  }
})
