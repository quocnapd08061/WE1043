const items = document.querySelectorAll('.partner-wrap ul li');
for (let i = 0; i < items.length; i++) {
  items[i].addEventListener('mouseover', function() {
    this.classList.add('hover');
  });
  items[i].addEventListener('mouseout', function() {
    this.classList.remove('hover');
  });
}
    