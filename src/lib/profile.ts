export interface ShotSnapshot {
  timeInShot: number, // uint32_t
  pressure: number, // float
  pumpFlow: number, // float
  weightFlow: number, // float
  temperature: number, // float
  shotWeight: number, // float
  waterPumped: number, // float
  
  targetTemperature: number, // float
  targetPumpFlow: number, // float
  targetPressure: number, // float
};