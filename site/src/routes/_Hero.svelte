<script>
	import Timer from './_Timer.svelte';
</script>

<div class="hero" style="font-size: 2rem;">
	<img src="assets/otherThanRealm.png" alt="" />

	<div class="bottom">
		<Timer />
	</div>
</div>

<style lang="scss">
	img {
		position: absolute;
		top: 42%;
		left: 50%;
		transform: translate(-50%, -50%);
		max-width: 85%;
		max-height: 55vh;
	}

	@media (min-width: 1400px) {
		.register-button {
			font-size: 2em;
			padding: 1em 3em;
		}
	}

	@media (max-width: 1100px) {
		img {
			width: 50vh;
		}
	}
	@media (max-width: 768px) {
		img {
			width: 50vh;
		}
	}
	@media (max-width: 425px) {
		img {
			width: 300px;
			top: 38%;
		}
		.bottom {
			top: 70% !important;
		}
	}
	.register-button {
		font-size: 1.9rem;
		letter-spacing: 2px;
		color: #111111;
		padding: 8px 25px;
		font-family: 'Metal Mania';
		background-image: url('/assets/gold-texture.jpg');
		transition: 0.25s transform ease-in-out;
		&:hover {
			transform: scale(1.1);
		}
		margin-bottom: 4px;
	}
	.hero {
		width: 100%;
		height: 100vh;
		position: relative;
		text-align: center;
		scroll-snap-align: start;
	}

	.bottom {
		width: fit-content;
		margin: 0px;
		position: absolute;
		top: 75%;
		left: 50%;
		transform: translate(-50%, 0px);
		min-width: 50%;
		max-width: 100%;
	}
</style>
