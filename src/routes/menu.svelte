<script>
	import MenuNavbar from '../components/menuNavbar.svelte'
	import MenuCard from '../components/menuCard.svelte'

	const theLemon = {
		src: '../images/crepe_theLemon.jpg', 
		alt: 'A lemon sugar crepe.',
		title: 'The Lemon',
		ingredients: ['lemon', 'sugar', 'eggs', 'dairy', 'flour'],
		// nutrition: ['Sugar 4g', 'Fat 2g']
	};

	const thePeanutButter = {
		src: '../images/crepe_thePeanutButter.jpg',
		alt: 'A peanut butter and banana crepe.',
		title: 'The Peanut Butter ',
		ingredients: ['peanut butter', 'banana', 'eggs', 'dairy', 'flour'],
		// nutrition: ['Sugar 4g', 'Fat 2g']
		
	}

	const theChocolate = {
		src: '../images/crepe_theChocolate.jpg',
		alt: 'A chocolate raspberry crepe.',
		title: 'The Chocolate',
		ingredients: ['chocolate', 'raspberry', 'eggs', 'dairy', 'flour'],
		// nutrition: ['Sugar 4g', 'Fat 2g']
	}

	const theNutella = {
		src: '../images/crepe_theNutella.jpg',
		alt: 'A strawberry and nutella crepe.',
		title: 'The Nutella',
		ingredients: ['Nutella', 'strawberry', 'eggs', 'dairy', 'flour'],
		// nutrition: ['Sugar 4g', 'Fat 2g']
	}

	const theMixedBerry = {
		src: '../images/crepe_theNutella.jpg',
		alt: 'A mixed berry crepe.',
		title: 'The Mixed Berry',
		ingredients: ['cream cheese', 'strawberry', 'blueberries', 'eggs', 'dairy', 'flour'],
		// nutrition: ['Sugar 4g', 'Fat 2g']
	}

	const theEgg = {
		src: '../images/crepe_theEgg.jpg',
		alt: 'An egg crepe with hollandaise.',
		title: 'The Egg',
		ingredients: ['provolone', 'spinach', 'eggs', 'dairy', 'flour'],
		// nutrition: ['Sugar 4g', 'Fat 2g']
	}

	const theBlackBean = {
		src: '../images/crepe_theBlackBean.jpg',
		alt: 'A black bean crepe.',
		title: 'The Black Bean',
		ingredients: ['black bean', 'avocado', 'tomato', 'spinach', 'lime', 'salsa', 'eggs', 'dairy', 'flour'],
		// nutrition: ['Sugar 4g', 'Fat 2g']
	}

	const theAllAmerican = {
		src: '../images/crepe_theAllAmerican.jpg',
		alt: 'An All American crepe.',
		title: 'The All American',
		ingredients: ['gravy', 'bacon', 'cheddar', 'eggs', 'dairy', 'flour'],
		// nutrition: ['Sugar 4g', 'Fat 2g']
	}

	const theChicken = {
		src: '../images/crepe_theAllAmerican.jpg',
		alt: 'A chicken crepe.',
		title: 'The Chicken',
		ingredients: ['chicken', 'spinach', 'provolone', 'eggs', 'dairy', 'flour'],
		// nutrition: ['Sugar 4g', 'Fat 2g']
	}

	const theMonteCristo = {
		src: '../images/crepe_theAllAmerican.jpg',
		alt: 'A Monte Cristo crepe.',
		title: 'The Monte Cristo',
		ingredients: ['ham', 'turkey', 'provolone', 'cheddar', 'raspberry', 'eggs', 'dairy', 'flour'],
		// nutrition: ['Sugar 4g', 'Fat 2g']
	}

	const theTurkeyBacon = {
		src: '../images/crepe_theAllAmerican.jpg',
		alt: 'A turkey bacon crepe.',
		title: 'The Turkey Bacon',
		ingredients: ['turkey', 'bacon', 'provolone', 'tomato', 'spinach', 'ranch', 'eggs', 'dairy', 'flour'],
		// nutrition: ['Sugar 4g', 'Fat 2g']
	}

	const theBreakfastInBed = {
		src: '../images/crepe_theAllAmerican.jpg',
		alt: 'A Breakfast in Bed crepe.',
		title: 'The Breakfast in Bed',
		ingredients: ['bacon', 'cheddar', 'maple sausage', 'maple syrup', 'eggs', 'dairy', 'flour'],
		// nutrition: ['Sugar 4g', 'Fat 2g']
	}

	const theCaprese= {
		src: '../images/crepe_theAllAmerican.jpg',
		alt: 'A Caprese crepe.',
		title: 'The Caprese',
		ingredients: ['mozzarella', 'tomato', 'arugula', 'spinach', 'balsamic', 'eggs', 'dairy', 'flour'],
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
		<div class='card'>
			<MenuCard {...theMixedBerry} />
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
		<div class='card'>
			<MenuCard {...theCaprese} />
		</div>
	</div>
</div>