const navBurgerMenuButton = document.getElementById('navBurgerMenuButton');
const navDropdownContent = document.getElementById('navDropdownContent');
const navCloseButton = document.getElementById('navCloseButton');

navBurgerMenuButton.addEventListener('click', () => {
  navDropdownContent.classList.toggle('hidden');
});

navCloseButton.addEventListener('click', () => {
  navDropdownContent.classList.toggle('hidden');
});
