<script>
	import Map from '../components/map.svelte'
	import MapCard from '../components/mapCard.svelte'
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
		<MapCard />
	</div>
</div>