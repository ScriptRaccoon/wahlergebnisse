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
	class:small={result.percent < 5}
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

	.bar.ready {
		width: calc(var(--percent) * 1%);
	}

	.label {
		position: absolute;
		color: white;
		font-weight: bold;
		z-index: 1;
		transition: color 1000ms ease-in-out, left 500ms ease-in-out,
			bottom 500ms ease-in-out;
		left: 0;
		padding: 0.25rem 0.5rem;
	}

	.bar.small .label {
		color: black;
		left: 100%;
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

		.label {
			width: 100%;
			text-align: center;
			bottom: 0;
		}

		.bar.small .label {
			left: 0;
			bottom: 100%;
		}
	}
</style>
