export interface SensorStateSnapshot {
  brewActive: boolean,
  steamActive: boolean,
  scalesPresent: boolean,
  temperature: number, // float
  pressure: number, // float
  pumpFlow: number, // float
  weightFlow: number, // float
  weight: number, // float
  waterLvl: number // uint16_t
};