const phoneNumbersListEl = document.querySelector('.header__phoneNumbers ul');
const phoneListButton = document.querySelector('.arrowButton');
const phoneListBtnIcon = document.querySelector('.arrowIcon use');
const toggleBodyHeightButton = document.querySelector('.hero__learmMoreBtn');
const limitedSection = document.querySelector('.previewSection');

document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.nav__link');

  for (const link of navLinks) {
    link.addEventListener('click', smoothScroll);
  }

  function smoothScroll(event) {
    event.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      const offsetTop = targetSection.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  }
});

phoneListButton.addEventListener('click', handleArrowClick);
let clickedPhoneArrow = false;
function handleArrowClick() {
  clickedPhoneArrow = !clickedPhoneArrow;
  updateListDisplay();
  updateArrowIcon();
}

function updateListDisplay() {
  if (clickedPhoneArrow) {
    phoneNumbersListEl.style.height = '33px';
    phoneNumbersListEl.style.overflow = 'hidden';
  } else {
    phoneNumbersListEl.style.height = 'auto';
    phoneNumbersListEl.style.overflow = 'auto';
  }
}

function updateArrowIcon() {
  const iconHref = clickedPhoneArrow
    ? './assets/images/icons.svg#arrowDown'
    : './assets/images/icons.svg#arrowUp';
  phoneListBtnIcon.setAttribute('href', iconHref);
}

toggleBodyHeightButton.addEventListener('click', toggleSectionHeight);

function toggleSectionHeight() {
  limitedSection.style.height = 'auto';
  document.body.style.overflow = 'auto';
  body.classList.toggle('no-scroll');
  toggleBodyHeightButton.style.display = 'none';
  toggleBodyHeightButton.removeEventListener('click', toggleSectionHeight);
}
