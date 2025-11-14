# SenseGrid Architecture (Prototype)

This document describes the high-level architecture of the current SenseGrid prototype.

## Goals

- Provide a simple, easy-to-read reference implementation of the SenseGrid API.
- Show how sensors and readings can be represented in a unified data model.
- Make it easy to swap the data layer for a real database in the future.

## Components

### API server

- Implemented in TypeScript with Node.js and Express.
- Exposes a small HTTP API for:
  - listing sensors,
  - fetching individual sensors,
  - fetching latest readings.

### Data layer

- In this prototype, the data layer is a simple in-memory store defined in `src/sampleData.ts`.
- It exposes:
  - a static list of demo sensors,
  - example "latest" readings,
  - helper functions to fetch by ID.

In a production system, this would be replaced by a proper database, potentially a time-series DB for historical queries.

### Data model

Core entities:

- `Sensor` — identifies a physical or virtual device, its type and location.
- `SensorReading` — a single time-stamped measurement linked to a sensor.

TypeScript definitions are located in `src/types.ts`.

## Next steps

- Add persistence (e.g. Postgres + Prisma, or a time-series DB).
- Add authentication and API keys.
- Add endpoints for historical queries and aggregations.
- Add WebSocket / SSE for live streaming.

This prototype is intentionally minimal: it is meant as a starting point and a reference, not a complete production deployment.
