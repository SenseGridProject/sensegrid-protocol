# SenseGrid API (Prototype)

Base URL (local development):

```text
http://localhost:4000
```

---

## Health

### `GET /health`

Simple healthcheck endpoint.

**Response:**

```json
{
  "status": "ok",
  "service": "sensegrid-api"
}
```

---

## Sensors

### `GET /v1/sensors`

List all available sensors.

**Response:**

```json
{
  "sensors": [
    {
      "id": "sg-air-001",
      "name": "Marina Bay Air Quality",
      "type": "air",
      "unit": "PM2.5",
      "location": {
        "lat": 1.283,
        "lng": 103.86,
        "city": "Singapore",
        "country": "Singapore"
      },
      "meta": {
        "district": "Marina Bay",
        "provider": "SenseGrid Labs"
      }
    }
  ]
}
```

---

### `GET /v1/sensors/:id`

Get a single sensor by ID.

**Response (200):**

```json
{
  "sensor": {
    "id": "sg-air-001",
    "name": "Marina Bay Air Quality",
    "type": "air",
    "unit": "PM2.5",
    "location": {
      "lat": 1.283,
      "lng": 103.86,
      "city": "Singapore",
      "country": "Singapore"
    },
    "meta": {
      "district": "Marina Bay",
      "provider": "SenseGrid Labs"
    }
  }
}
```

**Response (404):**

```json
{ "error": "Sensor not found" }
```

---

## Readings

### `GET /v1/sensors/:id/readings/latest`

Get the latest reading for a specific sensor.

**Response (200):**

```json
{
  "reading": {
    "sensorId": "sg-air-001",
    "value": 18,
    "unit": "PM2.5",
    "timestamp": "2025-01-01T12:34:56.000Z"
  }
}
```

**Response (404):**

```json
{ "error": "No readings for this sensor" }
```

---

### `GET /v1/streams/latest`

Get the latest reading for all sensors.

**Response:**

```json
{
  "readings": [
    {
      "sensorId": "sg-air-001",
      "value": 18,
      "unit": "PM2.5",
      "timestamp": "2025-01-01T12:34:56.000Z"
    },
    {
      "sensorId": "sg-traffic-001",
      "value": 132,
      "unit": "vehicles/min",
      "timestamp": "2025-01-01T12:34:56.000Z"
    }
  ]
}
```

---

This API is a minimal prototype and may change as the protocol evolves.
