.PHONY: serve site

lint:
	eslint --ext .js,.vue --ignore-path .gitignore --fix src

format:
	npx prettier src  --write

build:
	npx vite build

serve:
	npx vite serve

serve-with-php:
	cd dist/ && php -S localhost:8000
