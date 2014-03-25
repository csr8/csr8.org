all: dist/csr8.css 

dist/csr8.css: clientApp/css/*.scss
	node_modules/.bin/node-sass clientApp/css/csr8.scss public/css/csr8.css

dist/csr8.js: clientApp/js/**/*.js
	node_modules/.bin/browserify -t brfs --debug -e clientApp/js/csr8.js -o public/js/csr8.js

clean:
	rm -f public/css/csr8.css public/js/csr8.js