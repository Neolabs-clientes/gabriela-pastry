(function () {
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('visto'); io.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
  document.querySelectorAll('.entrada').forEach(function (e) { io.observe(e); });

  var h = document.getElementById('hamb'), m = document.getElementById('movil');
  if (h && m) {
    h.addEventListener('click', function () { m.classList.toggle('abierto'); });
    m.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { m.classList.remove('abierto'); });
    });
  }

  var lupa = document.getElementById('lupa');
  if (lupa) {
    document.querySelectorAll('.muro img').forEach(function (im) {
      im.addEventListener('click', function () {
        var g = lupa.querySelector('img');
        g.src = im.src; g.alt = im.alt;
        lupa.classList.add('abierta');
      });
    });
    lupa.addEventListener('click', function () { lupa.classList.remove('abierta'); });
  }

  var f = document.getElementById('form-encargo');
  if (f) {
    f.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var v = function (id) { var el = document.getElementById(id); return el ? el.value.trim() : ''; };
      var t = ['Hola Gabriela, quiero encargarte una tarta.', '', 'Nombre: ' + v('nom'),
        'Celebración: ' + v('ocasion'), 'Para el día: ' + v('fecha'), 'Comensales: ' + v('comen'),
        '', 'La idea: ' + v('idea')].join('\n');
      window.open('https://wa.me/34697897761?text=' + encodeURIComponent(t), '_blank');
    });
  }
})();
