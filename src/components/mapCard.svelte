<script>
    import Map from './map.svelte'
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

{#if ready }
    <Map></Map>
    <h1>THE ORIGINAL UPTOWN KAGENS</h1>
    <p>270 Williams Boulevard <br /> Richland, WA 99354</p>
    <p>509-851-7186</p>
    <p>Sunday – Saturday | 7:00 a.m. to 6:00 p.m.</p>
{:else}
    <h1>loading</h1>
{/if}

<style>
    p {
		width: 100%;
		font-size: 17px;
	}
</style>
