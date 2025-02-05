<script lang="ts">
	import type { SensorStateSnapshot } from '$lib/sensorState';
	import { getContext, setContext } from 'svelte';

	let { data, children } = $props();
  
  let sensorState: SensorStateSnapshot = $state(data.sensorState);

  setContext('sensorState', sensorState);

  const tempTarget: number = 93;
  const pressureTarget: number = 9;
  const pumpFlowTarget: number = 2.3;

  setInterval(() => {
    const delta = Math.ceil(Math.random() * 30) / 10;
    if (sensorState.temperature <= tempTarget) {
      sensorState.temperature += delta;
    } else {
      sensorState.temperature -= delta;
    }
  }, 200);

  setInterval(() => {
    const delta = Math.ceil(Math.random() * 10) / 10;
    if (sensorState.pressure <= pressureTarget) {
      sensorState.pressure += delta;
    } else {
      sensorState.pressure -= delta;
    }
  }, 500);

  setInterval(() => {
    const delta = Math.ceil(Math.random() * 5) / 10;
    if (sensorState.pumpFlow <= pumpFlowTarget) {
      sensorState.pumpFlow += delta;
    } else {
      sensorState.pumpFlow -= delta;
    }
  }, 500);

</script>

<nav>
	<a href="/">Home</a>
	<a href="/status">Status</a>
	<a href="/brew">Brew</a>
	<a href="/steam">Steam</a>
</nav>

{@render children()}