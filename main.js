const buttons = document.querySelectorAll('[data-carousel-button]');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const positionChange = button.dataset.carouselButton === 'next' ? 1 : -1;
    const photos = button
      .closest('[data-carousel]')
      .querySelector('[data-photos]');
    const activePhoto = photos.querySelector('[data-active]');
    let newPosition =
      [...photos.children].indexOf(activePhoto) + positionChange;
    if (newPosition < 0) newPosition = photos.children.length - 1;
    if (newPosition >= photos.children.length) newPosition = 0;
    photos.children[newPosition].dataset.active = true;
    delete activePhoto.dataset.active;
  });
});
