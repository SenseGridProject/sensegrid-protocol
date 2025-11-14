// src/sampleData.ts

import { Sensor, SensorReading } from "./types";

export const sensors: Sensor[] = [
  {
    id: "sg-air-001",
    name: "Marina Bay Air Quality",
    type: "air",
    unit: "PM2.5",
    location: {
      lat: 1.283,
      lng: 103.86,
      city: "Singapore",
      country: "Singapore"
    },
    meta: {
      district: "Marina Bay",
      provider: "SenseGrid Labs"
    }
  },
  {
    id: "sg-traffic-001",
    name: "Downtown Traffic Flow",
    type: "traffic",
    unit: "vehicles/min",
    location: {
      lat: 1.295,
      lng: 103.852,
      city: "Singapore",
      country: "Singapore"
    },
    meta: {
      district: "Downtown Core",
      provider: "SenseGrid Labs"
    }
  },
  {
    id: "sg-noise-001",
    name: "Orchard Road Noise Level",
    type: "noise",
    unit: "dB",
    location: {
      lat: 1.304,
      lng: 103.831,
      city: "Singapore",
      country: "Singapore"
    },
    meta: {
      district: "Orchard",
      provider: "SenseGrid Labs"
    }
  }
];

export const latestReadings: SensorReading[] = [
  {
    sensorId: "sg-air-001",
    value: 18,
    unit: "PM2.5",
    timestamp: new Date().toISOString()
  },
  {
    sensorId: "sg-traffic-001",
    value: 132,
    unit: "vehicles/min",
    timestamp: new Date().toISOString()
  },
  {
    sensorId: "sg-noise-001",
    value: 64,
    unit: "dB",
    timestamp: new Date().toISOString()
  }
];

export function getSensorById(id: string): Sensor | undefined {
  return sensors.find((s) => s.id === id);
}

export function getLatestReadingForSensor(
  id: string
): SensorReading | undefined {
  return latestReadings.find((r) => r.sensorId === id);
}
