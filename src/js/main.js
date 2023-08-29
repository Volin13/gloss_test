const phoneNumbersListEl = document.querySelector('.header__phonesThumb ul');
const phoneListButton = document.querySelector('.arrowButton');
const toggleBodyHeightButton = document.querySelector('.hero__learmMoreBtn');
const limitedSection = document.querySelector('.previewSection');
const hiddenBenefitsText = document.querySelector('.benefits__text');
const benefitsTitle = document.querySelector('.benefits__firstListItem');

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
  if (!clickedPhoneArrow) {
    phoneNumbersListEl.style.height = '33px';
    phoneNumbersListEl.style.overflow = 'hidden';
  } else {
    phoneNumbersListEl.style.height = 'auto';
    phoneNumbersListEl.style.overflow = 'auto';
  }
}

function updateArrowIcon() {
  if (phoneListButton.classList.contains('arrowDown')) {
    phoneListButton.classList.remove('arrowDown');
    phoneListButton.classList.add('arrowUp');
  } else {
    phoneListButton.classList.remove('arrowUp');
    phoneListButton.classList.add('arrowDown');
  }
}

toggleBodyHeightButton.addEventListener('click', toggleSectionHeight);

function toggleSectionHeight() {
  limitedSection.classList.replace(
    'previewSectionHidden',
    'previewSectionShowed',
  );
  toggleBodyHeightButton.style.display = 'none';
  toggleBodyHeightButton.removeEventListener('click', toggleSectionHeight);
}

const screenWidth = 1440;

benefitsTitle.addEventListener('click', toggleElVisibility);

function toggleElVisibility() {
  if (
    hiddenBenefitsText.style.height === '0px' ||
    hiddenBenefitsText.style.height === ''
  ) {
    hiddenBenefitsText.style.height = 'auto';
  } else {
    hiddenBenefitsText.style.height = '0px';
  }
}
