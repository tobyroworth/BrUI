import type { SensorStateSnapshot } from "$lib/sensorState";
import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = ({}) => {

  let sensorState: SensorStateSnapshot = {
    brewActive: false,
    scalesPresent: false,
    steamActive: false,
    temperature: 70,
    pressure: 0,
    pumpFlow: 0,
    weight: 0,
    waterLvl: 0,
    weightFlow: 0
  };

  return {
    sensorState
  };
};