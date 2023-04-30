<script lang="ts">
	import Bar from "./Bar.svelte";

	export let results: results;
</script>

<div class="card chart">
	{#each results as result}
		<Bar {result} />
	{/each}
</div>

<style>
	.chart {
		margin-block: 1.5rem;
		padding-block: 1.5rem;
		display: grid;
		grid-auto-flow: row dense;
		grid-template-columns: 2.5rem 1fr;
		align-items: center;
		gap: 1rem;
	}

	@media (min-width: 34rem) {
		.chart {
			height: 40rem;
			grid-auto-flow: column dense;
			grid-template-columns: initial;
			grid-auto-columns: 1fr;
			grid-template-rows: 1fr 2rem;
			row-gap: 0.5rem;
		}
	}
</style>
