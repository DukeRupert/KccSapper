<script>
	import Map from '../components/map.svelte'
	import MapCard from '../components/mapCard.svelte'
	let uptown = '270 Williams Boulevard <br /> Richland, WA 99354'
	let pnnl = '2475 Stevens Drive <br /> Richland, WA 99354'
</script>

<svelte:head>
	<title>Locations</title>
</svelte:head>

<style>
	.cards {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		padding: 1em;
		font-size: 1em;
		text-align: left;
	}

	.card {
		flex: 1;
		max-width: 30%;
		max-height: 70%;
		margin: 2%;
		padding: 20px;
		box-shadow: -2px -2px 5px darkgray, 2px 2px 5px lightgray;
		border-radius: 20px;

		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: flex-start;
	}
	div {
		width: 100%;
		height: 100%;
	}

	.banner {
		height: 400px;
		width: 100%;
		background-image: url('../images/banner_crepe_savory.jpg');
		background-repeat: no-repeat;
		background-position: center;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	.title {
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 50%;
    left: 50%;
    height: calc(var(--nav-size) * 0.6);
    width: auto;
    padding-bottom: 5%;
    border-radius: 40px;
    color: black;
	font-size: 32px;
	font-weight: bold;
	letter-spacing: 2px;
  }
</style>

<div>
	<div class='banner'>
		<div class='title'>
			LOCATIONS
		</div>
	</div>
	<div class='cards'>
		<div class='card'>
			<MapCard 
				link='https://www.google.com/maps/place/270+Williams+Blvd,+Richland,+WA+99354/' 
				image='https://maps.googleapis.com/maps/api/staticmap?center=270+Williams+Blvd,+Richland,+WA+99354&zoom=18&scale=false&size=500x500&maptype=roadmap&key=AIzaSyDHsJtQBjSzsLPwckAWjEPymWqY-zZtFOw&format=png&visual_refresh=true" alt="Google Map of 270 Williams Blvd, Richland, WA 99354' 
				title='UPTOWN KAGENS'
				address={uptown}
				phone='509-851-7186'
				hours='Sunday – Saturday | 7:00 a.m. to 6:00 p.m.'
				/>
		</div>
		<div class='card'>
				<MapCard 
					link='https://www.google.com/maps/place/902+Battelle+Blvd,+Richland,+WA+99354/' 
					image='https://maps.googleapis.com/maps/api/staticmap?center=902+Battelle+Blvd,+Richland,+WA+99354&zoom=16&scale=false&size=500x500&maptype=roadmap&key=AIzaSyDHsJtQBjSzsLPwckAWjEPymWqY-zZtFOw&format=png&visual_refresh=true" alt="Google Map of 902 Battelle Blvd, Richland, WA 99354' 
					title='PNNL KAGENS'
					address={pnnl}
					phone='509-851-7186'
					hours='Sunday – Saturday | 7:00 a.m. to 6:00 p.m.'
					/>
			</div>
	</div>
</div>