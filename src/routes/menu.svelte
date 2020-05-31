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
	.cards {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		font-size: 1em;
		text-align: left;
	}

	.card {
		flex: 0 0 auto;
		width: 25vw;
		margin: 2%;
		padding: 20px;
		box-shadow: -2px -2px 5px darkgray, 2px 2px 5px lightgray;
		border-radius: 20px;

		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
	}
	div {
		width: 100%;
		height: 100%;
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
	<div class='cards'>
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
		<div class='card'>
			<MenuCard {...hamHollandaise} />
		</div>
		<div class='card'>
			<MenuCard {...blackBean} />
		</div>
		<div class='card'>
			<MenuCard {...allAmerican} />
		</div>
	</div>
</div>