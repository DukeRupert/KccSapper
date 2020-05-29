<svelte:head>
	<title>About Us</title>
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
		margin: 2%;
		padding: 20px;
		border: 1px black solid;
		border-radius: 20px;

		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}

	img {
		width: 100%;
	}

	p {
		width: 100%;
		font-size: 17px;
	}

	@media only screen and (max-width: 655px) {
	h1 {
		font-size: 24px;
	}
	p {
		font-size: 14px;
	}

}
</style>

<div class='cards'>
	<div class='card'>
		<h1>OUR STORY</h1>
		<img src='crepeBanana.jpg' />
		<p>
			Jennifer and I (Kagen) found Crepes during one of our road trips, and
			felt we couldn’t pass up bringing this cuisine to the Tri-Cities. After
			months of researching the best recipes, griddles, and coffees we finally
			found our location in the historic heart of Richland; The Uptown!
		</p>
	</div>
	<div class='card'>
		<h1>OUR STORY</h1>
		<img src='crepeBanana.jpg' />
		<p>
			Jennifer and I (Kagen) found Crepes during one of our road trips, and
			felt we couldn’t pass up bringing this cuisine to the Tri-Cities. After
			months of researching the best recipes, griddles, and coffees we finally
			found our location in the historic heart of Richland; The Uptown!
		</p>
	</div>
	<div class='card'>
		<h1>OUR STORY</h1>
		<img src='crepeBanana.jpg' />
		<p>
			Jennifer and I (Kagen) found Crepes during one of our road trips, and
			felt we couldn’t pass up bringing this cuisine to the Tri-Cities. After
			months of researching the best recipes, griddles, and coffees we finally
			found our location in the historic heart of Richland; The Uptown!
		</p>
	</div>
	<div class='card'>
		<h1>OUR STORY</h1>
		<img src='crepeBanana.jpg' />
		<p>
			Jennifer and I (Kagen) found Crepes during one of our road trips, and
			felt we couldn’t pass up bringing this cuisine to the Tri-Cities. After
			months of researching the best recipes, griddles, and coffees we finally
			found our location in the historic heart of Richland; The Uptown!
		</p>
	</div>
	<div class='card'>
		<h1>OUR STORY</h1>
		<img src='crepeBanana.jpg' />
		<p>
			Jennifer and I (Kagen) found Crepes during one of our road trips, and
			felt we couldn’t pass up bringing this cuisine to the Tri-Cities. After
			months of researching the best recipes, griddles, and coffees we finally
			found our location in the historic heart of Richland; The Uptown!
		</p>
	</div>
</div>