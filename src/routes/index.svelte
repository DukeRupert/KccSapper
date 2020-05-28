<script>
	import Navbar from "../components/navbar.svelte";
	import Banner from "../components/banner.svelte";
	export let name;
	let title = "Kagen's Coffee & Crepes";
	let src = "/build/images/crepeBanana.jpg";
</script>
	  
<style>
	main {
		text-align: center;
		padding: 0px;
		max-width: 100%;
		height: 100%;
		margin: 0 auto;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
	}
	body {
		background-image: url("/build/images/crepeBanana.jpg");
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
		max-width: none;
		}
	}
</style>
	  
<main>
	<Banner label='Menu' src="crepeBanana.jpg" alt='A banana crepe' right />
	<Banner label='Locations' src="images/latte.jpg" alt='A latte' left />
	<Banner label='Order Online' src="images/crepeChocolate.jpg" alt='A chocolate crepe' right />
</main>
