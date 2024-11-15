// More info about config & dependencies:
// - https://github.com/hakimel/reveal.js#configuration
// - https://github.com/hakimel/reveal.js#dependencies
Reveal.initialize({
	controls: true,
	progress: true,
	history: true,
	center: true,
	width: 1024,
	height: 768,
	transition: 'concave', // none/fade/slide/convex/concave/zoom
	dependencies: [{
		src: 'lib/js/classList.js',
		condition: function () {
			return !document.body.classList;
		}
	}, {
		src: 'plugin/markdown/marked.js',
		condition: function () {
			return !!document.querySelector('[data-markdown]');
		}
	}, {
		src: 'plugin/markdown/markdown.js',
		condition: function () {
			return !!document.querySelector('[data-markdown]');
		}
	}, {
		src: 'plugin/highlight/highlight.js',
		async: true,
		callback: function () {
			hljs.initHighlightingOnLoad();
		}
	}, {
		src: 'plugin/zoom-js/zoom.js',
		async: true
	}, {
		src: 'plugin/notes/notes.js',
		async: true
	}]
});


