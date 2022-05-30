const list = document.querySelector('#n1');

list.addEventListener('click', () => {
  document.getElementById('show-book').style.cssText = 'display: flex;';
  document.getElementById('book-form').style.cssText = 'display: none;';
  document.getElementById('show-contact').style.cssText = 'display: none;';
});

export default { list };