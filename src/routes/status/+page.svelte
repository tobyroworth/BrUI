<script lang="ts">
	import { formatTemp, formatPressure, formatFlow } from '$lib/numberFormat';
	import type { SensorStateSnapshot } from '$lib/sensorState';
	import { getContext } from 'svelte';
	import type { PageProps } from '../$types';

  // let {data}: PageProps = $props();

  const sensorState = getContext<SensorStateSnapshot>('sensorState');
</script>

<h1>Status</h1>
<label>
	<h3>Temperature: {formatTemp(sensorState.temperature)}</h3>
	<meter value={sensorState.temperature} min="70" max="100"></meter>
</label>
<label>
	<h3>Pressure: {formatPressure(sensorState.pressure)} bar</h3>
	<meter value={sensorState.pressure} min="0" max="10"></meter>
</label>
<label>
	<h3>Flow: {formatFlow(sensorState.pumpFlow)}</h3>
	<meter value={sensorState.pumpFlow} min="0" max="10"></meter>
</label>
