import { rand_ints_with_sum } from "./utils";

export function generate_random_results(): results {
	const this_year = new Date().getFullYear();

	const number_of_years = 10;
	const results: results = [];

	const parties: party[] = [
		{ color: "red", name: "SPD" },
		{ color: "black", name: "CDU" },
		{ color: "darkorange", name: "FPD" },
		{ color: "darkgreen", name: "Grüne" },
		{ color: "purple", name: "Linke" },
		{ color: "firebrick", name: "PARTEI" },
	];

	const initial_results: results = parties.map((party) => ({
		party,
		year: this_year,
		percent: 0,
	}));

	const { length } = initial_results;

	for (
		let year = this_year;
		year < this_year + number_of_years;
		year++
	) {
		const percentages = rand_ints_with_sum(length, 100);

		const filled_results: results = initial_results.map(
			(res, i) => ({
				...res,
				percent: percentages[i],
				year: year,
			})
		);

		results.push(...filled_results);
	}

	return results;
}

export function get_year_range(results: results): [number, number] {
	const years = results.map((c) => c.year);
	return [Math.min(...years), Math.max(...years)];
}

export function get_max_percent(results: results): number {
	return Math.max(...results.map((c) => c.percent));
}
