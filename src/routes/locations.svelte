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
	div {
		width: 100%;
		height: 100%;
		background-color:  #F7EEDF;
	}

	h1 {
		color: black;
		font-size: 32px;
		font-weight: bold;
		letter-spacing: 2px;
	}

	.cards {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		font-size: 1em;
		text-align: left;
	}

	.card {
		flex: 1;
		min-width: 300px;
		max-width: 30%;
		max-height: 70%;
		margin: 2%;
		padding: 20px;
		box-shadow: -2px -2px 5px darkgray, 2px 2px 5px lightgray;
		border-radius: 20px;
		background-color: white;

		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: flex-start;
	}

	.banner {
		height: 30vh;
		width: 100%;
		background-image: url('../images/banner_crepe_savory.jpg');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: 50% 40%;

		display: flex;
		justify-content: center;
		align-items: center;
	}

  @media only screen and (max-width: 655px) {
	
	h1 {
		font-size: 24px;
	  letter-spacing: 1px;
		margin-bottom: 15%;
	}

	.banner {
		height: 15vh;
		background-position: 60% 0;
	}
}
</style>

<div>
	<div class='banner'>
		<h1>
				LOCATIONS
		</h1>
	</div>
	<div class='cards'>
		<div class='card'>
			<MapCard 
				link='https://www.google.com/maps/place/270+Williams+Blvd,+Richland,+WA+99354/' 
				image='https://maps.googleapis.com/maps/api/staticmap?center=270+Williams+Blvd,+Richland,+WA+99354&zoom=18&scale=false&size=500x500&maptype=roadmap&key=AIzaSyDHsJtQBjSzsLPwckAWjEPymWqY-zZtFOw&format=png&visual_refresh=true'
				alt='Google Map of 270 Williams Blvd, Richland, WA 99354' 
				title='UPTOWN KAGENS'
				address={uptown}
				phone='509-851-7186'
				hours='Monday – Sunday: 7am to 6pm'
				/>
		</div>
		<div class='card'>
				<MapCard 
					link='https://www.google.com/maps/place/902+Battelle+Blvd,+Richland,+WA+99354/' 
					image='https://maps.googleapis.com/maps/api/staticmap?center=902+Battelle+Blvd,+Richland,+WA+99354&zoom=16&scale=false&size=500x500&maptype=roadmap&key=AIzaSyDHsJtQBjSzsLPwckAWjEPymWqY-zZtFOw&format=png&visual_refresh=true'
					alt='Google Map of 902 Battelle Blvd, Richland, WA 99354'
					title='PNNL KAGENS'
					address={pnnl}
					phone='509-851-7186'
					hours='Monday – Sunday: 7am to 6pm'
					/>
			</div>
	</div>
</div>