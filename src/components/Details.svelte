<script>
	import {createEventDispatcher} from 'svelte'

	const dispatch = createEventDispatcher()
	let open = false
	// abre e fecha details
	function details() {
		open = !open
		if (open) {
			dispatch('view')
		}
		this.open = open
	}
</script>

<details class="details" class:details_open={open} on:click|preventDefault={details}>
	<summary class="summary summary-title">
		<slot name="summary" />
	</summary>
	<div class="summary-content">
		<slot />
	</div>
</details>

<style>
	*, *:before, *:after {
		box-sizing: inherit;
	}

	.details {
		font-size: 1rem;
		margin: 1em auto;
		width: 100%;
		border-radius: 8px;
		position: relative;
	}

	.summary:focus {
		outline: none;
	}

	.summary::-webkit-details-marker {
		/*display: none;*/
	}

	.summary-title {
		user-select: none;
	}

	.details_open > .summary-content {
		border-top: 1px solid #e2e8f0;
		padding: 7px;
		background-color: var(--gray);
		animation-name: slideDown;
		animation-duration: 0.5s;
		animation-fill-mode: forwards;
	}

	@keyframes slideDown {
		from {
			clip-path: inset(0 0 100% 0);
		}
		to {
			clip-path: inset(0 0 0 0);
		}
	}

</style>
