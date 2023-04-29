<script lang="ts">
	import { tweened } from "svelte/motion";
	import { cubicInOut } from "svelte/easing";
	import { onMount } from "svelte";

	export let result: result;
	export let max_percent: number;

	const percent_store = tweened(0, {
		duration: 1200,
		easing: cubicInOut,
	});

	$: {
		$percent_store = result.percent;
	}

	let ready = false;

	onMount(() => {
		setTimeout(() => (ready = true), 0);
	});
</script>

<span class="percent">{Math.round($percent_store)}%</span>

<div
	class="bar"
	class:ready
	data-name={result.party.name}
	style:--color={result.party.color}
	style:--percent={$percent_store * (100 / max_percent)}
>
	<span class="label">{result.party.name}</span>
</div>

<style>
	.bar {
		background-color: var(--color);
		width: 0rem;
		height: 3rem;
		display: flex;
		align-items: center;
		border-radius: 0.2rem;
		position: relative;
	}

	.bar::before {
		content: attr(data-name);
		position: absolute;
		z-index: -1;
		padding: 0.5rem;
		font-weight: bold;
		text-shadow: 0rem 0rem 0.2rem black, 0rem 0rem 0.1rem black,
			0rem 0rem 0.1rem black, 0rem 0rem 0.1rem black;
	}

	.bar.ready {
		width: calc(var(--percent) * 1%);
	}

	.label {
		color: white;
		padding: 0.5rem;
		font-weight: bold;
		z-index: 1;
	}

	.percent {
		font-size: 1.25rem;
	}

	@media (min-width: 34rem) {
		.bar {
			grid-row: 1;
			width: 100%;
			height: 0;
			flex-direction: column-reverse;
			align-self: end;
		}

		.bar.ready {
			height: calc(var(--percent) * 1%);
			width: 100%;
		}

		.percent {
			grid-row: 2;
			align-self: start;
			justify-self: center;
		}
	}
</style>
