/* Gemeinsamer Kopf- und Fussbereich für alle Seiten.
   Einbinden direkt nach <body>: <script src="layout.js" data-page="aktuelles"></script>
   Icons im HTML: <i class="i" data-i="phone"></i>  (Namen siehe ICONS) */
(function () {
  var MENU = [
    { id: 'aktuelles', label: 'Aktuelles', href: 'index.html' },
    { id: 'arbeiten', label: 'Arbeiten', href: 'arbeiten.html', sub: [
      ['Reparatur', 'arbeiten.html#reparatur'],
      ['Oldtimer', 'arbeiten.html#oldtimer']
    ]},
    { id: 'produkte', label: 'Produkte', href: 'produkte.html', sub: [
      ['Stihl', 'produkte.html#stihl'],
      ['Pöttinger', 'produkte.html#poettinger'],
      ['Reform', 'produkte.html#reform'],
      ['Case / Steyr', 'produkte.html#case-steyr'],
      ['Lindner', 'produkte.html#lindner'],
      ['Rapid', 'produkte.html#rapid'],
      ['Brielmaier', 'produkte.html#brielmaier'],
      ['Weidemann', 'produkte.html#weidemann'],
      ['Uniforest', 'produkte.html#uniforest'],
      ['Gafner', 'produkte.html#gafner'],
      ['Motorex', 'produkte.html#motorex']
    ]},
    { id: 'dienstleistungen', label: 'Dienstleistungen', href: 'dienstleistungen.html', sub: [
      ['Verkauf, Service &amp; Reparaturen', 'dienstleistungen.html#verkauf'],
      ['An- und Verkauf Occasionen', 'dienstleistungen.html#occasionen'],
      ['Maschinenanbauteile in Kleinserien', 'dienstleistungen.html#anbauteile'],
      ['Unsere Werkstatt', 'dienstleistungen.html#werkstatt']
    ]},
    { id: 'occasionen', label: 'Occasionen', href: 'occasionen.html' },
    { id: 'kontakt', label: 'Kontakt', href: 'kontakt.html' }
  ];

  /* Strich-Icons (24×24, Farbe = currentColor) */
  var ICONS = {
    tractor: '<path d="M3 4h9l1 7"/><path d="M4 11V4"/><path d="M8 10V4"/><path d="M18 5c-.6 0-1 .4-1 1v5.6"/><path d="m10 11 11 .9c.6 0 .9.5.8 1.1l-.8 5h-1"/><circle cx="7" cy="15" r=".5"/><circle cx="7" cy="15" r="5"/><circle cx="16" cy="18" r="2"/>',
    cycle: '<path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 16h5v5"/>',
    wrench: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
    award: '<circle cx="12" cy="8" r="6"/><path d="M15.48 12.89 17 22l-5-3-5 3 1.52-9.11"/>',
    gear: '<circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M4.9 4.9 7 7M17 17l2.1 2.1M2 12h3M19 12h3M4.9 19.1 7 17M17 7l2.1-2.1"/>',
    factory: '<path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M17 18h1M12 18h1M7 18h1"/>',
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
    mail: '<rect x="2" y="4" width="20" height="16"/><path d="m22 7-10 6L2 7"/>',
    pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    fax: '<path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/>',
    clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    building: '<rect x="4" y="2" width="16" height="20"/><path d="M9 22v-4h6v4M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01"/>',
    alert: '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4M12 17h.01"/>',
    user: '<circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/>',
    crane: '<path d="M3 21h8M7 21V3M7 3h14M7 7l4-4M17 3v6M15 9h4v4h-4z"/>',
    chart: '<path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/>',
    tire: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><path d="M12 2v6M12 16v6M2 12h6M16 12h6"/>',
    laptop: '<path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"/>',
    wind: '<path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2M9.6 4.6A2 2 0 1 1 11 8H2M12.6 19.4A2 2 0 1 0 14 16H2"/>',
    hammer: '<path d="m15 12-8.37 8.37a1 1 0 1 1-3-3L12 9"/><path d="m18 15 4-4"/><path d="m21.5 11.5-1.91-1.91A2 2 0 0 1 19 8.17V7l-2.26-2.26a6 6 0 0 0-4.2-1.76L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.17a2 2 0 0 1 1.41.59l1.92 1.91"/>',
    lift: '<path d="M4 21h16M12 17V3M6 9l6-6 6 6"/>',
    hardhat: '<path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z"/><path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5M4 15v-3a6 6 0 0 1 6-6M14 6a6 6 0 0 1 6 6v3"/>',
    camera: '<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    arrow: '<path d="M4 12h16M14 6l6 6-6 6"/>',
    menu: '<path d="M3 6h18M3 12h18M3 18h18"/>',
    chevron: '<path d="m6 9 6 6 6-6"/>',
    external: '<path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>'
  };
  function icon(name) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="miter" aria-hidden="true">' + (ICONS[name] || '') + '</svg>';
  }
  window.jostIcon = icon;

  var page = (document.currentScript && document.currentScript.getAttribute('data-page')) || '';

  var items = MENU.map(function (m) {
    var act = m.id === page ? ' class="act" aria-current="page"' : '';
    if (!m.sub) return '<li><a href="' + m.href + '"' + act + '>' + m.label + '</a></li>';
    return '<li class="has-sub"><a href="' + m.href + '"' + act + '>' + m.label + '</a>' +
      '<button class="subtog" aria-label="' + m.label + ' Untermenü öffnen" aria-expanded="false">' + icon('chevron') + '</button>' +
      '<ul class="sub">' + m.sub.map(function (s) { return '<li><a href="' + s[1] + '">' + s[0] + '</a></li>'; }).join('') + '</ul></li>';
  }).join('');

  document.write(
    '<div class="topbar"><div class="wrap">' +
      '<span><a href="tel:+41344026264">' + icon('phone') + '034 402 62 64</a><a href="mailto:info@jostland.ch">' + icon('mail') + 'info@jostland.ch</a></span>' +
      '<span><a href="https://www.google.com/maps/dir/?api=1&amp;destination=Obermattweg%2025%2C%203550%20Langnau%20im%20Emmental" target="_blank" rel="noopener" title="Route in Google Maps planen">' + icon('pin') + 'Obermattweg 25 · 3550 Langnau i.E.</a></span>' +
    '</div></div>' +
    '<header><div class="wrap nav">' +
      '<a href="index.html" class="logo" aria-label="Jost Landtechnik AG – Startseite"><img src="logo-jost-traktor.png" alt=""><span>JOST LANDTECHNIK AG<small>Landmaschinen · Mechanische Werkstatt</small></span></a>' +
      '<nav aria-label="Hauptmenü"><button class="burger" aria-label="Menü öffnen" aria-expanded="false">' + icon('menu') + '</button><ul class="menu">' + items + '</ul></nav>' +
    '</div></header>'
  );

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('[data-i]').forEach(function (el) { el.innerHTML = icon(el.getAttribute('data-i')); });

    var burger = document.querySelector('.burger'), menu = document.querySelector('.menu');
    burger.addEventListener('click', function () {
      var o = menu.classList.toggle('open'); burger.setAttribute('aria-expanded', o);
    });
    document.querySelectorAll('.subtog').forEach(function (b) {
      b.addEventListener('click', function () {
        var li = b.parentElement, o = li.classList.toggle('open'); b.setAttribute('aria-expanded', o);
      });
    });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { menu.classList.remove('open'); });
    });

    var f = document.createElement('footer');
    f.innerHTML =
      '<div class="wrap fgrid">' +
        '<div><img src="logo-jost-traktor.png" alt="" class="flogo"><p><b>Jost Landtechnik AG</b><br>Landmaschinen · Mechanische Werkstatt<br>Obermattweg 25 · CH-3550 Langnau i.E.</p></div>' +
        '<div><b class="fh">Kontakt</b><p>Tel. <a href="tel:+41344026264">034 402 62 64</a><br><a href="mailto:info@jostland.ch">info@jostland.ch</a></p></div>' +
        '<div><b class="fh">Navigation</b><p>' + MENU.map(function (m) { return '<a href="' + m.href + '">' + m.label + '</a>'; }).join('<br>') + '</p></div>' +
        '<div><b class="fh">Vertretungen</b><p>' + [
          [['Stihl', 'stihl'], ['Pöttinger', 'poettinger'], ['Reform', 'reform']],
          [['Case IH', 'case-steyr'], ['Steyr', 'case-steyr'], ['Lindner', 'lindner']],
          [['Rapid', 'rapid'], ['Brielmaier', 'brielmaier'], ['Weidemann', 'weidemann']],
          [['Uniforest', 'uniforest'], ['Gafner', 'gafner'], ['Motorex', 'motorex']]
        ].map(function (row) {
          return row.map(function (m) { return '<a href="produkte.html#' + m[1] + '">' + m[0] + '</a>'; }).join(' · ');
        }).join('<br>') + '</p></div>' +
      '</div>' +
      '<div class="wrap fbot"><span>© 2026 Jost Landtechnik AG · UID CHE-107.395.639</span><span><a href="impressum.html">Impressum</a> · <a href="datenschutz.html">Datenschutz</a></span></div>';
    document.body.appendChild(f);
  });
})();







