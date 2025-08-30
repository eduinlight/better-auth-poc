# better-auth

A monorepo authentication system built with Bun, featuring a client application, authentication service, and PostgreSQL database.

## Architecture

This project consists of the following services:

- **Client App** (`@app/client`) - Frontend application
- **Auth Service** (`@app/auth`) - Authentication backend service
- **Worker Service** (`@app/worker`) - Background job worker (e.g., sending emails to clients)
- **PostgreSQL** - Database for user data and sessions
- **PgAdmin** - Database administration interface

## Quick Start

### Prerequisites
- Docker and Docker Compose
- Make

### Installation

```bash
# Full installation (builds, installs dependencies, starts services, runs migrations)
make install

# Or step by step:
make compose-build    # Build Docker images
make bun-install     # Install dependencies
make compose-up      # Start all services
make auth-migration-migrate  # Run database migrations
```

### Development

```bash
# Start services
make start

# Stop services  
make stop

# Reset everything (clean install)
make reset
```

## Services & Ports

| Service | Port | Description |
|---------|------|-------------|
| Client | 3000 | Frontend application |
| Auth API | 4000 | Authentication service |
| Emails Dev | 3005 | Email development preview |
| PostgreSQL | 5432 | Database |
| PgAdmin | 8082 | Database admin interface |

## Database Access

- **PgAdmin**: http://localhost:8082
  - Email: `root@gmail.com` 
  - Password: `root`
- **Direct Connection**:
  - Host: `localhost:5432`
  - Database: `auth`
  - User: `root`
  - Password: `root`

## Available Commands

### Project Management
```bash
make install      # Full setup: build, install, start, migrate
make uninstall    # Remove volumes and clean up
make reset        # Uninstall then install
make start        # Start all services
make stop         # Stop all services
```

### Code Quality
```bash
make format       # Format code with Biome
make lint         # Lint and fix with Biome  
make check        # Run format + lint
```

### Database Migrations
```bash
make auth-migration-generate  # Generate new migration
make auth-migration-migrate   # Apply pending migrations
```

### Utilities
```bash
make bun-install     # Install dependencies
make compose-build   # Build Docker images
make compose-up      # Start services
make compose-down    # Stop services
make compose-restart # Restart services
```

## Environment Configuration

Copy the `.env.dist` file and rename it to `.env`, then modify the values as needed:

```bash
cp .env.dist .env
```

The `.env.dist` file contains:
```bash
# CLIENT
CLIENT_PORT=3000
CLIENT_BASE_URL=http://localhost:3000

# AUTH
AUTH_PORT=4000
AUTH_SECRET=
AUTH_URL=http://localhost:4000
AUTH_DATABASE=postgresql://root:root@postgres:5432/auth

# WORKER
EMAILS_DEV_PORT=3005
```

**Important**: Make sure to set a secure value for `AUTH_SECRET` in your `.env` file.

This project was created using `bun init` in bun v1.2.15. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
