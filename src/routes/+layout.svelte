<script lang="ts">
	import { onMount } from 'svelte';

	export let data;

	onMount(() => {
		console.log('LAYOUT data', data);
	});
</script>

<div>{data.a}</div>
<div>{data.b}</div>

<slot />
