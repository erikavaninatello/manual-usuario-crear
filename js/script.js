function showSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const sec = document.getElementById('sec-' + id);
  if (sec) sec.classList.add('active');
  const nav = document.querySelector(`.nav-item[data-section="${id}"]`);
  if (nav) nav.classList.add('active');
  document.getElementById('main').scrollTop = 0;
  window.scrollTo(0,0);
}

document.getElementById('searchInput').addEventListener('input', function(e) {
  const q = e.target.value.trim().toLowerCase();
  if (!q) {
    document.querySelectorAll('.nav-item').forEach(n => n.style.display = 'block');
    document.querySelectorAll('.nav-section-label').forEach(n => n.style.display = 'block');
    return;
  }
  document.querySelectorAll('.nav-item').forEach(n => {
    const sectionId = n.getAttribute('data-section');
    const target = document.getElementById('sec-' + sectionId);
    const text = (n.textContent + ' ' + (target ? target.textContent : '')).toLowerCase();
    n.style.display = text.includes(q) ? 'block' : 'none';
  });
});
