run :
	docker run -v `php -r 'echo getcwd();'`:/code --entrypoint=/code/index.js node
