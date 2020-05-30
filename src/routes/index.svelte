<script>
	import Navbar from "../components/navbar.svelte";
	import Banner from "../components/banner.svelte";
	let title = "Kagen's Coffee & Crepes";
	let src = "/build/images/crepeBanana.jpg";
	export let ready;
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
</style>
	  
<main>
	<Banner label='MENU' route='/menu' src="crepeBanana.jpg" alt='A banana crepe' right />
	<Banner label='LOCATIONS' route='/locations' src="images/latte.jpg" alt='A latte' left />
	<Banner label='ORDER ONLINE' route='/' src="images/crepeChocolate.jpg" alt='A chocolate crepe' right />
</main>
