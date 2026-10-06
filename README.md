# Developer card api

Task: Digital business card backend

Company: IT Solutions Management International Pte. Ltd.

## Development

### Docker

Start the application with:

```bash
docker compose up --build
```

The application runs locally on:

`http://localhost:3020`

GraphQL interface:

`http://localhost:3020/graphql`

Database migrations and seed data are applied automatically on startup.

### Local

The application requires PostgreSQL and the `DATABASE_URL` environment variable.

Start the development server with:

```bash
npm run start:dev
```

## Deployment

The backend is deployed on Render:

`https://developer-card-api.onrender.com/graphql`

The demo deployment uses Render's free PostgreSQL instance and is available for testing until November 5, 2026.

## Rules

* No AI agents / Codex
* Official documentation allowed
* Search and open-source examples allowed
* Code written and adapted independently

## Stack

* TypeScript
* Node.js
* NestJS
* @nestjs/config
* GraphQL
* Apollo Server
* Prisma
* PostgreSQL
* Docker
* Git
