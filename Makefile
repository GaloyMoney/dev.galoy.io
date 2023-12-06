start-local-dev:
	yarn start

generate-api-reference:
	scripts/generate-public-api-reference.sh
	scripts/generate-admin-api-reference.sh
