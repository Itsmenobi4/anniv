function flipPage(id) {
  const page = document.getElementById('page' + id);
  if (page) {
    page.classList.toggle('flipped');
  } else {
    console.error('Element dengan id "page' + id + '" gak ketemu.');
  }
}
