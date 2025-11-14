// src/types.ts

export type SensorType = "air" | "traffic" | "noise" | "climate";

export interface GeoLocation {
  lat: number;
  lng: number;
  city?: string;
  country?: string;
}

export interface Sensor {
  id: string;
  name: string;
  type: SensorType;
  location: GeoLocation;
  unit: string;
  meta?: Record<string, any>;
}

export interface SensorReading {
  sensorId: string;
  value: number;
  unit: string;
  timestamp: string; // ISO string
}
