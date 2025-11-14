// src/server.ts

import express, { Request, Response } from "express";
import cors from "cors";
import {
  sensors,
  latestReadings,
  getSensorById,
  getLatestReadingForSensor
} from "./sampleData";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Healthcheck
app.get("/health", (_req: Request, res: Response) => {
  res.json({ status: "ok", service: "sensegrid-api" });
});

// List all sensors
app.get("/v1/sensors", (_req: Request, res: Response) => {
  res.json({ sensors });
});

// Get single sensor
app.get("/v1/sensors/:id", (req: Request, res: Response) => {
  const sensor = getSensorById(req.params.id);
  if (!sensor) {
    return res.status(404).json({ error: "Sensor not found" });
  }
  res.json({ sensor });
});

// Latest reading for a sensor
app.get("/v1/sensors/:id/readings/latest", (req: Request, res: Response) => {
  const reading = getLatestReadingForSensor(req.params.id);
  if (!reading) {
    return res.status(404).json({ error: "No readings for this sensor" });
  }
  res.json({ reading });
});

// Latest readings for all sensors
app.get("/v1/streams/latest", (_req: Request, res: Response) => {
  res.json({ readings: latestReadings });
});

// Root – small info
app.get("/", (_req: Request, res: Response) => {
  res.json({
    name: "SenseGrid Protocol",
    description:
      "Experimental reference implementation of the SenseGrid sensor network API.",
    docs: "/docs",
    version: "0.1.0"
  });
});

app.listen(PORT, () => {
  console.log(`SenseGrid API listening on http://localhost:${PORT}`);
});
