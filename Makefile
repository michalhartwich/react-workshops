COLOR_WOFF=\033[0m
COLOR_GREEN=\033[0;32m

setup:
	@echo "  $(COLOR_GREEN) + installing ruby gems $(COLOR_OFF)" && bundle install > /dev/null 2>&1
	@echo "  $(COLOR_GREEN) + initializing database $(COLOR_OFF)" && rake db:setup > /dev/null 2>&1
	@echo "  $(COLOR_GREEN) + installing npm packages $(COLOR_OFF)" && npm install > /dev/null 2>&1

start-npm:
	@npm run start

start-rails:
	@rails s
