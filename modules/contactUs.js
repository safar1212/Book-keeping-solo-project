const contactUs = document.querySelector('#n3');

contactUs.addEventListener('click', () => {
  document.getElementById('show-book').style.cssText = 'display: none;';
  document.getElementById('book-form').style.cssText = 'display: none;';
  document.getElementById('show-contact').style.cssText = 'display: flex;';
});

export default { contactUs };