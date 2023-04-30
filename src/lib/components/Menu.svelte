<script lang="ts">
	import caretleft from "../../assets/caret-left.svg";
	import caretright from "../../assets/caret-right.svg";
	import Button from "./Button.svelte";

	export let year: number;
	export let min_year: number;
	export let max_year: number;

	function increment_year() {
		if (year >= max_year) return;
		year++;
	}

	function decrement_year() {
		if (year <= min_year) return;
		year--;
	}
</script>

<menu>
	<Button
		on:click={decrement_year}
		disabled={year <= min_year}
		aria_label="Jahr zurück"
	>
		<img
			src={caretleft}
			alt="Pfeil nach links"
			aria-hidden="true"
		/>
	</Button>

	<div class="year" aria-live="polite">{year}</div>

	<Button
		on:click={increment_year}
		disabled={year >= max_year}
		aria_label="Jahr vor"
	>
		<img
			src={caretright}
			alt="Pfeil nach rechts"
			aria-hidden="true"
		/>
	</Button>
</menu>

<style>
	menu {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
	}

	img {
		width: 1.2rem;
	}

	.year {
		font-size: 2rem;
		margin-bottom: 0.4rem;
		width: 5rem;
		text-align: center;
	}
</style>
