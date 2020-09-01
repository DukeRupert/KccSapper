<script>
	import Map from '../components/map.svelte';
	import MapCard from '../components/mapCard.svelte';
	let uptown = '270 Williams Boulevard <br /> Richland, WA 99354';
	let pnnl = '640 Horn Rapids <br /> Richland, WA 99354';
	import Image from 'svelte-image';
</script>

<svelte:head>
	<title>Locations</title>
</svelte:head>

<style>
	div {
		width: 100%;
		height: 100%;
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
		box-sizing: border-box;
		padding: 1em;
	}

	.card {
		flex: 1;
		min-width: 25vw;
		max-width: 30vw;
		max-height: 70%;
		margin: 1em;
		padding: 1em;

		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: flex-start;
	}

	.banner {
		position: relative;
		width: 100%;
	}

	.banner-text {
		position: absolute;
		display: inline-block;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		padding: 5px;
		padding-right: 2rem;
		padding-left: 2rem;
		border-radius: 40px;
		color: #fcc24c;
		background-color: rgba(0, 0, 0, 0.5);
	}

  @media only screen and (max-width: 655px) {

	
	h1 {
		font-size: 24px;
	  	letter-spacing: 1px;
		margin-bottom: 15%;
	}

	.card  {
		min-width: 70vw;
		margin-top: 0;
	}

	.cards {
		padding: 2em;
	}
}
</style>

<div>
	<div class='banner'>
		<Image src='images/espresso.jpg' alt='A black and white picture of a steaming espresso machine.' />
		<h1 class='banner-text'>LOCATIONS</h1> 
	</div>
	<div class='cards'>
		<div class='card'>
			<MapCard 
				link='https://www.google.com/maps/place/270+Williams+Blvd,+Richland,+WA+99354/' 
				image='https://maps.googleapis.com/maps/api/staticmap?markers=270+Williams+Blvd,+Richland,+WA+99354&zoom=18&scale=false&size=500x500&maptype=roadmap&key=AIzaSyDHsJtQBjSzsLPwckAWjEPymWqY-zZtFOw&map_id=cef788b41fcab785'
				alt='Google Map of 270 Williams Blvd, Richland, WA 99354' 
				title='UPTOWN KAGENS'
				address={uptown}
				phone='509-851-7186'
				hours='Monday – Sunday: 7am to 6pm'
				/>
		</div>
		<div class='card'>
				<MapCard 
					link='https://www.google.com/maps/place/640+Horn+Rapids+Rd,+Richland,+WA+99354/' 
					image='https://maps.googleapis.com/maps/api/staticmap?markers=640+Horn+Rapids+Rd,+Richland,+WA+99354&zoom=16&scale=false&size=500x500&maptype=roadmap&key=AIzaSyDHsJtQBjSzsLPwckAWjEPymWqY-zZtFOw&map_id=d6fafe2bc3c4597b'
					alt='Google Map of 640 Horn Rapids, Richland, WA 99354'
					title='PNNL KAGENS'
					address={pnnl}
					phone='509-851-7186'
					hours='Monday – Friday: 7am to 2pm'
					/>
		</div>
	</div>
</div>