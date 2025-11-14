# SenseGrid Protocol

A decentralized sensor network for real-time urban intelligence.  
Born in Singapore.

SenseGrid connects physical sensors into a single, unified data layer for cities, companies and developers.  
Air quality, traffic, noise, climate – one network, one API, live and historical data in one place.

> **Status:** early experimental prototype.  
> **Goal:** provide a minimal reference implementation of the SenseGrid API and data model.

---

## Features

- Real-time style endpoints for sensor metadata and latest readings.
- Unified data model for different sensor types (air, traffic, noise, climate).
- Simple in-memory implementation that can be replaced by a real database.
- Clean TypeScript codebase, ready to be extended.
- API documentation and architecture notes in `/docs`.

---

## Quick start

### Requirements

- Node.js 18+
- npm or yarn

### Install

```bash
git clone https://github.com/YOUR_HANDLE/sensegrid-protocol.git
cd sensegrid-protocol
npm install
```

### Run dev server

```bash
npm run dev
```

By default the API listens on `http://localhost:4000`.

---

## API overview

The prototype exposes a small HTTP API:

- `GET /v1/sensors` — list all registered sensors.
- `GET /v1/sensors/:id` — get information about a single sensor.
- `GET /v1/sensors/:id/readings/latest` — get the latest reading for a sensor.
- `GET /v1/streams/latest` — get the latest reading for all sensors.

Full details are available in [`docs/api.md`](./docs/api.md).

---

## Data model

The core entities:

- **Sensor** — a physical or virtual device that produces readings.
  - `id`, `name`, `type`, `location`, `unit`, `meta`.
- **Reading** — a single time-stamped measurement from a sensor.
  - `sensorId`, `value`, `unit`, `timestamp`.

See [`src/types.ts`](./src/types.ts) for exact TypeScript definitions.

---

## Architecture

The current prototype uses:

- TypeScript + Node.js
- Express for the HTTP layer
- An in-memory store (`src/sampleData.ts`) for demo data

The idea is to keep the core logic simple and make it easy to swap the data layer (for example, with PostgreSQL, TimescaleDB or a time-series database).

More details in [`docs/architecture.md`](./docs/architecture.md).

---

## Example usage

You can find a minimal Node.js client in [`examples/simple-node-client.ts`](./examples/simple-node-client.ts).

It demonstrates how to:

- fetch the list of sensors,
- fetch the latest readings,
- work with the TypeScript types.

---

## Roadmap (high level)

- Replace in-memory storage with a proper database.
- Add authentication / API keys.
- Add historical queries (time ranges, aggregation).
- Add WebSocket / SSE streaming endpoints.
- Provide SDKs for more languages.


