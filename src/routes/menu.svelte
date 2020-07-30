<script>
	import MenuNavbar from '../components/menuNavbar.svelte'
	import MenuCard from '../components/menuCard.svelte'

	const theLemon = {
		src: '../images/crepe_theLemon.jpg', 
		alt: 'A lemon sugar crepe.',
		title: 'The Lemon',
	};

	const thePeanutButter = {
		src: '../images/crepe_thePeanutButter.jpg',
		alt: 'A peanut butter and banana crepe.',
		title: 'The Peanut Butter ',
	}

	const theChocolate = {
		src: '../images/crepe_theChocolate.jpg',
		alt: 'A chocolate raspberry crepe.',
		title: 'The Chocolate',
	}

	const theNutella = {
		src: '../images/crepe_theNutella.jpg',
		alt: 'A strawberry and nutella crepe.',
		title: 'The Nutella',
	}

	const theEgg = {
		src: '../images/crepe_theEgg.jpg',
		alt: 'A ham, egg, spinach and cheese crepe with hollandaise.',
		title: 'The Egg',
	}

	const theBlackBean = {
		src: '../images/crepe_theBlackBean.jpg',
		alt: 'A black bean and avacado crepe.',
		title: 'The Black Bean',
	}

	const theAllAmerican = {
		src: '../images/crepe_theAllAmerican.jpg',
		alt: 'An egg, sausage and country gravy crepe.',
		title: 'The All American',
	}

	const theChicken = {
		src: '../images/crepe_theAllAmerican.jpg',
		alt: 'A chicken, spinach and provolone crepe.',
		title: 'The Chicken',
	}

	const theMonteCristo = {
		src: '../images/crepe_theAllAmerican.jpg',
		alt: 'An egg, ham, turkey, cheddar, provolone, topped with raspberry and powdered sugar crepe.',
		title: 'The Monte Cristo',
	}

	const theTurkeyBacon = {
		src: '../images/crepe_theAllAmerican.jpg',
		alt: 'A turkey, bacon, provolone, tomato, spinach, topped with ranch crepe.',
		title: 'The Turkey Bacon',
	}

	const theBreakfastInBed = {
		src: '../images/crepe_theAllAmerican.jpg',
		alt: 'A egg, bacon, maple sausage, cheddar cheese, topped with maple syrup crepe.',
		title: 'The Breakfast in Bed',
	}

</script>

<svelte:head>
	<title>Menu</title>
</svelte:head>

<style>
	
	div {
		width: 100%;
		height: 100%;
		margin-top: 40px;
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
		background-color: #ffffff;

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

<MenuNavbar />
<div>
	<div id='sweet' class='cards'>
		<div class='card'>
			<MenuCard {...theLemon} />
		</div>
		<div class='card'>
			<MenuCard {...thePeanutButter} />
		</div>
		<div class='card'>
			<MenuCard {...theChocolate} />
		</div>
		<div class='card'>
			<MenuCard {...theNutella} />
		</div>
		<div class='empty-card'></div>
		<div class='empty-card'></div>
	</div>
	<div id='savory' class='cards'>
		<div class='card'>
			<MenuCard {...theEgg} />
		</div>
		<div class='card'>
			<MenuCard {...theBlackBean} />
		</div>
		<div class='card'>
			<MenuCard {...theAllAmerican} />
		</div>
		<div class='card'>
			<MenuCard {...theChicken} />
		</div>
		<div class='card'>
			<MenuCard {...theMonteCristo} />
		</div>
		<div class='card'>
			<MenuCard {...theTurkeyBacon} />
		</div>
		<div class='card'>
			<MenuCard {...theBreakfastInBed} />
		</div>
		<div class='empty-card'></div>
		<div class='empty-card'></div>
	</div>
</div>