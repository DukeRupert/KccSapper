<script>
	import Map from '../components/map.svelte'
	import MapCard from '../components/mapCard.svelte'
	import MapCard1 from '../components/mapCard1.svelte'
	let center = {lat: 46.286508, lng: -119.276502}
    let center2 = {lat: 46.286, lng: -119.276}
</script>

<svelte:head>
	<title>Locations</title>
</svelte:head>

<style>
	.cards {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		padding: 1em;
		font-size: 1em;
		text-align: left;
	}

	.card {
		flex: 1;
		min-width: 30%;
		max-height: 70%;
		margin: 2%;
		padding: 20px;
		border: 1px black solid;
		border-radius: 20px;

		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}
</style>


<div class='cards'>
	<div class='card'>
		<MapCard center={center} />
	</div>
	<div class='card'>
		<MapCard1 center={center2} />
	</div>
</div>