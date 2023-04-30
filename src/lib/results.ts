import { rand_ints_with_sum } from "./utils";

const parties: party[] = [
	{ color: "#070707", name: "CDU" },
	{ color: "#D70019", name: "SPD" },
	{ color: "orange", name: "FDP" },
	{ color: "darkgreen", name: "Grüne" },
	{ color: "purple", name: "Linke" },
	{ color: "#AC2031", name: "PARTEI" },
];

export function generate_random_results(
	number_of_years: number = 10
): results {
	const this_year = new Date().getFullYear();

	const results: results = [];

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
			(result, i) => ({
				...result,
				percent: percentages[i],
				year,
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
