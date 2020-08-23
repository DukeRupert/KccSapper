<script>
	import Navbar from "../components/navbar.svelte";
	import BannerMenu from '../components/bannerMenu.svelte';
	import BannerLocations from '../components/bannerLocations.svelte';
	import BannerOrder from '../components/bannerOrder.svelte';
	import Instagram from '../components/instagram.svelte';
	import Footer from '../components/footer.svelte';
</script>
	  
<style>
	main {
		text-align: center;
		padding: 0px;
		width: 100%;
		height: 100%;
		margin: 0 auto;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
	}
</style>
	  
<main>
	<BannerMenu label='MENU' route='/menu' right />
	<BannerLocations label='LOCATIONS' route='/locations' left />
	<BannerOrder label='ORDER ONLINE' route='/' right />
	<!-- <Instagram /> -->
	<Footer />
</main>
