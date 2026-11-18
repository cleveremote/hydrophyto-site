// Langue de la page : ?lang=… > choix mémorisé > langue du téléphone > anglais.
// Le HTML contient les trois langues ; seul le bloc [data-content] actif s'affiche.
(function () {
	var LANGS = ['fr', 'en', 'ar'];
	var root = document.documentElement;

	function pick() {
		var q = new URLSearchParams(location.search).get('lang');
		if (LANGS.indexOf(q) >= 0) return q;
		try {
			var s = localStorage.getItem('hp-lang');
			if (LANGS.indexOf(s) >= 0) return s;
		} catch (e) {}
		var n = (navigator.language || 'en').slice(0, 2).toLowerCase();
		return LANGS.indexOf(n) >= 0 ? n : 'en';
	}

	function apply(lang) {
		root.dataset.lang = lang;
		root.lang = lang;
		root.dir = lang === 'ar' ? 'rtl' : 'ltr';
		if (window.PAGE_TITLES && window.PAGE_TITLES[lang]) document.title = window.PAGE_TITLES[lang];
		document.querySelectorAll('[data-set-lang]').forEach(function (b) {
			b.setAttribute('aria-pressed', String(b.dataset.setLang === lang));
		});
		// Garde la langue d'une page à l'autre, même sans stockage local.
		document.querySelectorAll('a[href$=".html"], a[href*=".html?"]').forEach(function (a) {
			var url = new URL(a.getAttribute('href'), location.href);
			url.searchParams.set('lang', lang);
			a.setAttribute('href', url.pathname.split('/').pop() + url.search + url.hash);
		});
		try { localStorage.setItem('hp-lang', lang); } catch (e) {}
	}

	document.querySelectorAll('[data-set-lang]').forEach(function (b) {
		b.addEventListener('click', function () { apply(b.dataset.setLang); });
	});

	apply(pick());
})();
