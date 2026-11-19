// Fiche App Store : compteur de caractères et bouton « Copier » par champ.
// Apple compte les caractères (pas les octets) : on compte les points de code.
(function () {
	function text(field) {
		return field.querySelector('.copytext').textContent.trim();
	}

	document.querySelectorAll('.field').forEach(function (field) {
		var count = field.querySelector('.count');
		var limit = Number(count.dataset.limit);
		var n = Array.from(text(field)).length;
		count.textContent = n + ' / ' + limit;
		if (n > limit) count.classList.add('over');

		var btn = field.querySelector('.copy');
		var label = btn.textContent;
		btn.addEventListener('click', function () {
			var done = function () {
				btn.textContent = '✓';
				setTimeout(function () { btn.textContent = label; }, 1200);
			};
			if (navigator.clipboard && navigator.clipboard.writeText) {
				navigator.clipboard.writeText(text(field)).then(done, function () {});
			} else {
				var range = document.createRange();
				range.selectNodeContents(field.querySelector('.copytext'));
				var sel = getSelection();
				sel.removeAllRanges();
				sel.addRange(range);
				try { document.execCommand('copy'); done(); } catch (e) {}
			}
		});
	});
})();
