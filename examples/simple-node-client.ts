// examples/simple-node-client.ts

import axios from "axios";

async function main() {
  const baseURL = process.env.SENSEGRID_API_URL || "http://localhost:4000";

  console.log("Using SenseGrid API:", baseURL);

  const sensorsRes = await axios.get(`${baseURL}/v1/sensors`);
  console.log("Sensors:", sensorsRes.data.sensors);

  if (sensorsRes.data.sensors.length > 0) {
    const first = sensorsRes.data.sensors[0];
    const readingRes = await axios.get(
      `${baseURL}/v1/sensors/${first.id}/readings/latest`
    );
    console.log("Latest reading for", first.id, ":", readingRes.data.reading);
  }

  const streamsRes = await axios.get(`${baseURL}/v1/streams/latest`);
  console.log("Latest readings for all sensors:", streamsRes.data.readings);
}

main().catch((err) => {
  console.error("Error:", err);
  process.exit(1);
});
