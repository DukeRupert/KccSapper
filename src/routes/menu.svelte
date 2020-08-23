<script>
	import MenuNavbar from '../components/menuNavbar.svelte'
	import MenuCard from '../components/menuCard.svelte'

	const theLemon = {
		src: '../images/crepe_theLemon.jpg', 
		alt: 'A lemon sugar crepe.',
		title: 'The Lemon',
		ingredients: ['eggs', 'dairy', 'flour'],
		// nutrition: ['Sugar 4g', 'Fat 2g']
	};

	const thePeanutButter = {
		src: '../images/crepe_thePeanutButter.jpg',
		alt: 'A peanut butter and banana crepe.',
		title: 'The Peanut Butter ',
		ingredients: ['eggs', 'dairy', 'flour'],
		// nutrition: ['Sugar 4g', 'Fat 2g']
		
	}

	const theChocolate = {
		src: '../images/crepe_theChocolate.jpg',
		alt: 'A chocolate raspberry crepe.',
		title: 'The Chocolate',
		ingredients: ['eggs', 'dairy', 'flour'],
		// nutrition: ['Sugar 4g', 'Fat 2g']
	}

	const theNutella = {
		src: '../images/crepe_theNutella.jpg',
		alt: 'A strawberry and nutella crepe.',
		title: 'The Nutella',
		ingredients: ['eggs', 'dairy', 'flour'],
		// nutrition: ['Sugar 4g', 'Fat 2g']
	}

	const theEgg = {
		src: '../images/crepe_theEgg.jpg',
		alt: 'A ham, egg, spinach and cheese crepe with hollandaise.',
		title: 'The Egg',
		ingredients: ['eggs', 'dairy', 'flour'],
		// nutrition: ['Sugar 4g', 'Fat 2g']
	}

	const theBlackBean = {
		src: '../images/crepe_theBlackBean.jpg',
		alt: 'A black bean and avacado crepe.',
		title: 'The Black Bean',
		ingredients: ['eggs', 'dairy', 'flour'],
		// nutrition: ['Sugar 4g', 'Fat 2g']
	}

	const theAllAmerican = {
		src: '../images/crepe_theAllAmerican.jpg',
		alt: 'An egg, sausage and country gravy crepe.',
		title: 'The All American',
		ingredients: ['eggs', 'dairy', 'flour'],
		// nutrition: ['Sugar 4g', 'Fat 2g']
	}

	const theChicken = {
		src: '../images/crepe_theAllAmerican.jpg',
		alt: 'A chicken, spinach and provolone crepe.',
		title: 'The Chicken',
		ingredients: ['eggs', 'dairy', 'flour'],
		// nutrition: ['Sugar 4g', 'Fat 2g']
	}

	const theMonteCristo = {
		src: '../images/crepe_theAllAmerican.jpg',
		alt: 'An egg, ham, turkey, cheddar, provolone, topped with raspberry and powdered sugar crepe.',
		title: 'The Monte Cristo',
		ingredients: ['eggs', 'dairy', 'flour'],
		// nutrition: ['Sugar 4g', 'Fat 2g']
	}

	const theTurkeyBacon = {
		src: '../images/crepe_theAllAmerican.jpg',
		alt: 'A turkey, bacon, provolone, tomato, spinach, topped with ranch crepe.',
		title: 'The Turkey Bacon',
		ingredients: ['eggs', 'dairy', 'flour'],
		// nutrition: ['Sugar 4g', 'Fat 2g']
	}

	const theBreakfastInBed = {
		src: '../images/crepe_theAllAmerican.jpg',
		alt: 'A egg, bacon, maple sausage, cheddar cheese, topped with maple syrup crepe.',
		title: 'The Breakfast in Bed',
		ingredients: ['eggs', 'dairy', 'flour'],
		// nutrition: ['Sugar 4g', 'Fat 2g']
	}

</script>

<svelte:head>
	<title>Menu</title>
</svelte:head>

<style>
	
	.card-container {
		width: 100%;
		height: 100%;
		margin-top: 120px;
		padding: 0 5%;
		text-align: left;
	}

	.card {
		display: inline-block;
		width: 25vw;
		vertical-align: top;
		text-align: left;
		margin: 0 2% 40px 3%;
	}
	
	:target {
		scroll-margin-top: 40px;
	}


  @media only screen and (max-width: 655px) {

	.card-container {
		text-align: center;
	}

	.card {
		width: 60vw;
		text-align: center;
		margin: 0 auto 40px auto;
	}

  }
</style>

<MenuNavbar />
<div class='card-container'>
	<section id='sweet' />
	<div class='cards'>
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
	</div>
	<section id='savory' />
	<div class='cards'>
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
	</div>
</div>