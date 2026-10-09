/* Occasion im Fokus: zeigt ein zufälliges Inserat von agropool.ch im eigenen Design.
   Filter: Konto 233, Standort 3550 Langnau (gleich wie die Liste auf occasionen.html).
   Benötigt im HTML die Elemente mit den IDs spot-sec, spot-img, spot-badge, spot-loc,
   spot-title, spot-price, spot-vat, spot-ask, spot-next und optional spot-link, spot-count. */
(function () {
  var API = 'https://api.agropool.ch/v1/DataObject?accountId=233&location=3550&pageSize=100';
  var $ = function (id) { return document.getElementById(id); };
  var sec = $('spot-sec');
  if (!sec) return;
  var items = [], total = 0, last = -1, timer = null;
  var auto = parseInt(sec.getAttribute('data-auto'), 10) || 0;
  var chf = function (n) { return 'CHF ' + n.toLocaleString('de-CH', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(/[,’]/g, "'"); };

  function show() {
    if (!items.length) return;
    var i; do { i = Math.floor(Math.random() * items.length); } while (items.length > 1 && i === last);
    last = i;
    var it = items[i], img = (it.image && it.image.locations) || [];
    var src = (img.find(function (l) { return l.type === 'original'; }) || img[0] || {}).url;
    var url = 'https://www.agropool.ch/de/x/a' + it.id + '/';
    var p = it.price || {}, hasPrice = !p.onRequest && p.amount > 0;

    if (src) { var pre = new Image(); pre.onload = function () { if (last !== i) return; $('spot-img').style.backgroundImage = 'url("' + src + '")'; }; pre.src = src; } else { $('spot-img').style.backgroundImage = ''; }
    $('spot-img').href = url;
    $('spot-img').setAttribute('aria-label', it.title + ' auf agropool.ch ansehen');
    $('spot-badge').textContent = it.isTopListed ? 'Top-Angebot' : 'Occasion';
    $('spot-title').textContent = it.title;
    $('spot-loc').textContent = it.location || '';
    $('spot-price').textContent = hasPrice ? chf(p.amount) : 'Preis auf Anfrage';
    $('spot-vat').textContent = hasPrice ? (p.vatClause || '') : '';
    $('spot-ask').href = 'kontakt.html?occasion=' + encodeURIComponent(it.title) + '&nr=' + it.id + '#formular';
    if ($('spot-link')) $('spot-link').href = url;
    if ($('spot-count')) $('spot-count').textContent = total + ' Occasionen in Langnau – zufällig ausgewählt.';
  }

  fetch(API, { headers: { 'X-Platform': 'agropool', 'Accept-Language': 'de' } })
    .then(function (r) { if (!r.ok) throw r.status; return r.json(); })
    .then(function (j) {
      var all = (j.items || []).filter(function (x) { return !x.isWanted; });
      // Nur Inserate mit Bild zeigen (falls vorhanden), sonst alle
      var withImg = all.filter(function (x) { return x.image && x.image.locations && x.image.locations.length; });
      items = withImg.length ? withImg : all; total = all.length;
      if (!items.length) return;
      sec.hidden = false; show(); restart();
    })
    .catch(function () { /* agropool nicht erreichbar: Bereich bleibt ausgeblendet */ });

  function restart() { if (!auto) return; clearInterval(timer); timer = setInterval(show, auto); }
  if ($('spot-next')) $('spot-next').addEventListener('click', function () { show(); restart(); });
})();




