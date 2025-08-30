SHELL=/bin/bash

JS_IMAGE_NAME=poc-js-engine
CONTAINER_WORKING_DIR=/home/user/app
POSTGRES_NETWORK_NAME=poc-better-auth-postgres

all: install

reinstall: uninstall install

install: compose-build bun-install compose-up auth-migration-migrate welcome

uninstall: remove-volumes

reset: uninstall install

start: compose-up welcome

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

welcome:
	@echo ""
	@echo "Application is now running!"
	@echo ""
	@echo "Available Services:"
	@echo -e "  - Client App:      \033[34mhttp://localhost:3000\033[0m"
	@echo -e "  - Auth API:        \033[34mhttp://localhost:4000\033[0m"
	@echo -e "  - Emails Dev:      \033[34mhttp://localhost:3005\033[0m"
	@echo ""
	@echo "Database Access:"
	@echo -e "  - PgAdmin:         \033[34mhttp://localhost:8082\033[0m"
	@echo "    Email: root@gmail.com"
	@echo "    Password: root"
	@echo ""
	@echo "Quick Commands:"
	@echo "  - make stop        - Stop all services"
	@echo "  - make reset       - Clean reset"
	@echo "  - make check       - Format & lint code"
	@echo ""
