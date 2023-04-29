<script lang="ts">
	import Chart from "./lib/components/Chart.svelte";
	import Header from "./lib/components/Header.svelte";
	import Menu from "./lib/components/Menu.svelte";
	import {
		generate_random_results,
		get_max_percent,
		get_year_range,
	} from "./lib/results";

	const all_results = generate_random_results();
	const max_percent = get_max_percent(all_results);

	const [min_year, max_year] = get_year_range(all_results);

	let year = min_year;

	$: results = all_results.filter((c) => c.year === year);
</script>

<svelte:head>
	<title>Wahlergebnisse</title>
</svelte:head>

<Header />

<main>
	<Menu bind:year {min_year} {max_year} />

	<Chart {results} {max_percent} />
</main>

<style>
	main {
		max-width: 42rem;
		margin: 0 auto;
		padding-inline: 1rem;
	}
</style>
