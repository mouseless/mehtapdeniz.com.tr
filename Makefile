.PHONY: run build fix

run:
	@ \
	echo "(1) Dev" ; \
	echo "(2) Dev with build" ; \
	echo "(3) Local" ; \
	echo "" ; \
	echo "Please select 1-3: " ; \
	read srv ; \
	if test $$srv -eq "1" ; then \
		cd .theme ; npm run dev ; cd .. ; \
	fi ; \
	if test $$srv -eq "2" ; then \
		cd .theme ; npm run dev:build ; cd .. ; \
	fi ; \
	if test $$srv -eq "3" ; then \
		cd .theme ; npm run local ; cd .. ; \
	fi
build:
	@ \
	echo "(1) Production" ; \
	echo "(2) Staging" ; \
	echo "" ; \
	echo "Please select 1-2: " ; \
	read srv ; \
	if test $$srv -eq "1" ; then \
		cd .theme ; npm run generate:production ; cd .. ; \
	fi ; \
	if test $$srv -eq "2" ; then \
		cd .theme ; npm run generate:staging ; cd .. ; \
	fi
fix:
	@ \
	cd .theme ; npx eslint . --fix ; cd ..