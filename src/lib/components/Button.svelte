<script lang="ts">
	export let disabled = false;
	export let aria_label = "";
</script>

<button on:click {disabled} aria-label={aria_label}>
	<slot />
</button>

<style>
	button {
		font-family: inherit;
		background: none;
		border: none;
		cursor: pointer;
	}

	button:disabled {
		opacity: 0.5;
		cursor: initial;
	}

	button:focus-visible {
		outline: 0.1rem solid black;
		outline-offset: 0.2rem;
	}
</style>
