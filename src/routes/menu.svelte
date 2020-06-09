<script>
	import MenuCard from '../components/menuCard.svelte'

	const lemonSugar = {
		src: '../images/crepe_lemonSugar.jpg', 
		alt: 'A lemon sugar crepe.',
		title: 'Lemon & Sugar',
	};

	const peanutBanana = {
		src: '../images/crepe_PeanutButterBanana.jpg',
		alt: 'A peanut butter and banana crepe.',
		title: 'Peanut Butter & Banana ',
	}

	const chocolateRaspberry = {
		src: '../images/crepe_chocolateRaspberry.jpg',
		alt: 'A chocolate raspberry crepe.',
		title: 'Chocolate & Raspberry',
	}

	const strawberryNutella = {
		src: '../images/crepe_strawberryNutella.jpg',
		alt: 'A strawberry and nutella crepe.',
		title: 'Strawberry & Hazelnut Spread',
	}

	const hamHollandaise = {
		src: '../images/crepe_hamHollandaise.jpg',
		alt: 'A ham, egg, spinach and cheese crepe with hollandaise.',
		title: 'Ham Egg Spinach & Cheese w/ Hollandaise',
	}

	const blackBean = {
		src: '../images/crepe_blackBean.jpg',
		alt: 'A black bean and avacado crepe.',
		title: 'Black bean & Avacado',
	}

	const allAmerican = {
		src: '../images/crepe_allAmerican.jpg',
		alt: 'An egg, sausage and country gravy crepe.',
		title: 'All American',
	}
</script>

<svelte:head>
	<title>Menu</title>
</svelte:head>

<style>
	
	div {
		width: 100%;
		height: 100%;
		padding-right: 5%; 
		padding-left: 5%;
	}

	.cards {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		padding-top: 2%;
		padding-right: 0; 
		padding-left: 0;
		font-size: 1em;
		text-align: left;
	}

	.card {
		flex: 0 0 auto;
		width: 25vw;
		margin: 1%;
		padding: 20px;
		background-color: white;

		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
	}

	/* Empty card created to create an align-left effect on the the last card element*/
	.empty-card {
		width: 25vw;
		/*0 height allows the row to collapse if necessary*/
		height: 0;
		margin: 1%;
		padding: 20px;
	}


  @media only screen and (max-width: 655px) {

	.cards {
		justify-content: center;
	}

	.card {
		width: 60vw;
	}

  }
</style>

<div>
	<div id='sweet' class='cards'>
		<div class='card'>
			<MenuCard {...lemonSugar} />
		</div>
		<div class='card'>
			<MenuCard {...peanutBanana} />
		</div>
		<div class='card'>
			<MenuCard {...chocolateRaspberry} />
		</div>
		<div class='card'>
			<MenuCard {...strawberryNutella} />
		</div>
		<div class='empty-card'></div>
		<div class='empty-card'></div>
	</div>
	<div id='savory' class='cards'>
		<div class='card'>
			<MenuCard {...hamHollandaise} />
		</div>
		<div class='card'>
			<MenuCard {...blackBean} />
		</div>
		<div class='card'>
			<MenuCard {...allAmerican} />
		</div>
		<div class='empty-card'></div>
	</div>
</div>