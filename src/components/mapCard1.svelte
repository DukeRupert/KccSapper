<script>
    import Map from './map1.svelte'
    let ready = false;
	function toggleReady() {
		ready = !ready;
	}
	window.initMap2 = toggleReady;
    export let center = {}
</script>

<svelte:head>
	<script 
		src='https://maps.googleapis.com/maps/api/js?key=AIzaSyDHsJtQBjSzsLPwckAWjEPymWqY-zZtFOw&callback=initMap2'>
	</script>
	<title>Locations</title>
</svelte:head>

{#if ready }
    <Map center={center}></Map>
    <h1>THE 2nd KAGENS</h1>
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
