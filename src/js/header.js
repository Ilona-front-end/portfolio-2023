const navBurgerMenuButton = document.getElementById('navBurgerMenuButton');
const navDropdownContent = document.getElementById('navDropdownContent');
const navDropdownLinks = document.querySelectorAll('#navDropdownContent a');
const navCloseButton = document.getElementById('navCloseButton');

navBurgerMenuButton.addEventListener('click', () => {
  navDropdownContent.classList.toggle('hidden');
});

navCloseButton.addEventListener('click', () => {
  navDropdownContent.classList.toggle('hidden');
});

navDropdownLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navDropdownContent.classList.add('hidden');
  });
});
