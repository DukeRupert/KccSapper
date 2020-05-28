<script>
	import Map from '../components/map.svelte'
	let ready = false;
	function toggleReady() {
		ready = !ready;
	}
	window.initMap = toggleReady;
</script>

<svelte:head>
	<script 
		src='https://maps.googleapis.com/maps/api/js?key=AIzaSyDHsJtQBjSzsLPwckAWjEPymWqY-zZtFOw&callback=initMap'>
	</script>
	<title>Locations</title>
</svelte:head>

<style>
	div {
	width: 100vw;
	height: 100vh;
	}
</style>

{#if ready}
	<div>
		<Map></Map>
	</div>
{:else}
	<h1>loading locations</h1>
{/if}