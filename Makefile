CURRENT_BRANCH := `git branch --show-current`

branch:
	echo $(CURRENT_BRANCH)

local.run:
	npm run dev	

local.tests:
	npm run cypress:run

local.tests.watch:
	npm run cypress:open