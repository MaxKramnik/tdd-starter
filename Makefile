BASE = .
ISTANBUL = ./node_modules/.bin/istanbul
COVERAGE_OPTS = --lines 90 --statements 90 --branches 90 --functions 90

cover:
	@ echo ++++++++++++++++++++++++++++++++++++++++++++++++++++
	@ echo runing test coverage
	$(ISTANBUL) cover test/run.js

check-coverage:
	@ echo ++++++++++++++++++++++++++++++++++++++++++++++++++++
	@ echo checking test coverage threshhold
	$(ISTANBUL) check-coverage $(COVERAGE_OPTS)

test: cover check-coverage

test-cov: cover check-coverage
	open coverage/lcov-report/index.html

jshint:
	./node_modules/.bin/jshint ./*/*/*/*.js --config $(BASE)/.jshintrc --exclude-path=$(BASE)/.jshintignore

clean:
	@rm -rf coverage

.PHONY: test clean
