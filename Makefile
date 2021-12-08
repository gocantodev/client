.PHONY: serve site

build:
	npx vite build

serve-with-php:
	cd dist/ && php -S localhost:8000
