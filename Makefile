SHELL=/bin/bash

JS_IMAGE_NAME=poc-js-engine
CONTAINER_WORKING_DIR=/home/user/app
POSTGRES_NETWORK_NAME=poc-better-auth-postgres

all: install

reinstall: uninstall install

install: compose-build bun-install compose-up auth-migration-migrate

uninstall: remove-volumes

reset: uninstall install

start: compose-up

stop: compose-down

format:
	@docker run --rm -v .:$(CONTAINER_WORKING_DIR) -w $(CONTAINER_WORKING_DIR) $(JS_IMAGE_NAME) bunx biome format --write

lint:
	@docker run --rm -v .:$(CONTAINER_WORKING_DIR) -w $(CONTAINER_WORKING_DIR) $(JS_IMAGE_NAME) bunx biome lint --write

check:
	@docker run --rm -v .:$(CONTAINER_WORKING_DIR) -w $(CONTAINER_WORKING_DIR) $(JS_IMAGE_NAME) bunx biome check --write

# AUTH MIGRATIONS
auth-migration-generate:
	@docker run --rm -it --network $(POSTGRES_NETWORK_NAME) --env-file .env -v .:$(CONTAINER_WORKING_DIR) -w $(CONTAINER_WORKING_DIR)/apps/auth $(JS_IMAGE_NAME) bun --bun run migration-generate

auth-migration-migrate:
	@docker run --rm -it --network $(POSTGRES_NETWORK_NAME) --env-file .env -v .:$(CONTAINER_WORKING_DIR) -w $(CONTAINER_WORKING_DIR)/apps/auth $(JS_IMAGE_NAME) bun --bun run migration-migrate

# UTILS
bun-install:
	@docker run --rm -v .:$(CONTAINER_WORKING_DIR) -w $(CONTAINER_WORKING_DIR) $(JS_IMAGE_NAME) bun install

compose-build:
	@docker compose build

compose-up:
	@docker compose up -d

compose-down:
	@docker compose down

compose-restart:
	@docker compose up -d --force-recreate

remove-volumes:
	@docker compose down -v
