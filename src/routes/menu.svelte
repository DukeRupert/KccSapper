<script>
	import MenuCard from '../components/menuCard.svelte'

	const lemonSugar = {
		src: '../images/crepe_lemonSugar.jpg', 
		alt: 'A lemon sugar crepe.',
		title: 'Lemon Sugar Crepe',
	};

	const peanutBanana = {
		src: '../images/crepe_PeanutButterBanana.jpg',
		alt: 'A peanut butter and banana crepe.',
		title: 'Peanut Butter & Banana Crepe',
	}

	const chocolateRaspberry = {
		src: '../images/crepe_chocolateRaspberry.jpg',
		alt: 'A chocolate raspberry crepe.',
		title: 'Chocolate & Raspberry Crepe',
	}

	const strawberryNutella = {
		src: '../images/crepe_strawberryNutella.jpg',
		alt: 'A strawberry and nutella crepe.',
		title: 'Strawberry & Nutella Crepe',
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
	</div>
</div>