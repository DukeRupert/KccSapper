<script>
	import MenuCard from '../../components/menuCard.svelte'
	import MenuItem from '../../components/menuItem.svelte'

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
		src: '../images/crepe_chicken.jpg',
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
		src: '../images/crepe_turkeyBacon.jpg',
		alt: 'A turkey bacon crepe.',
		title: 'The Turkey Bacon',
		ingredients: ['turkey', 'bacon', 'provolone', 'tomato', 'spinach', 'ranch', 'eggs', 'dairy', 'flour'],
		// nutrition: ['Sugar 4g', 'Fat 2g']
	}

	const theChipotleChicken = {
		src: '../images/crepe_theAllAmerican.jpg',
		alt: 'A chipotle chicken crepe.',
		title: 'The Chipotle Chicken',
		ingredients: ['chicken', 'cole slaw', 'tomato', 'chipotle ranch', 'eggs', 'dairy', 'flour'],
		// nutrition: ['Sugar 4g', 'Fat 2g']
	}
	
	const theBreakfastInBed = {
		src: '../images/crepe_theAllAmerican.jpg',
		alt: 'A Breakfast in Bed crepe.',
		title: 'The Breakfast in Bed',
		ingredients: ['bacon', 'cheddar', 'maple sausage', 'maple syrup', 'eggs', 'dairy', 'flour'],
		// nutrition: ['Sugar 4g', 'Fat 2g']
	}

	const theCaprese = {
		src: '../images/crepe_caprese.jpg',
		alt: 'A Caprese crepe.',
		title: 'The Caprese',
		ingredients: ['mozzarella', 'tomato', 'arugula', 'spinach', 'balsamic', 'eggs', 'dairy', 'flour'],
		// nutrition: ['Sugar 4g', 'Fat 2g']
	}

	const coffees = [
		{
			title: 'Americano',
			price: '$2.75'
		},
		{
			title: 'Latte',
			price: '$3.50'
		},
		{
			title: 'Mocha',
			price: '$4.00'
		},
		{
			title: 'Nitro Cold Brew',
			price: '$3.75'
		},
		{
			title: 'Brewed Coffee',
			price: '$2.00'
		},
		{
			title: 'Cappucino',
			price: '$3.50'
		},
		{
			title: 'Doppio',
			price: '$2.75'
		},
		{
			title: 'Cortado',
			price: '$3.25'
		},
		{
			title: 'Hot Chocolate',
			price: '$2.99'
		},
		{
			title: 'Blended Drink',
			price: '$5.00'
		}
	] 

	const drinks = [
		{
			title: 'Chai Tea Latte',
			price: '$4.00'
		},
		{
			title: 'Loose Leaf Teas',
			price: '$2.75'
		},
		{
			title: 'M4',
			price: '$5.00'
		},
		{
			title: 'Redbull Mixer',
			price: '$4.50'
		},
		{
			title: 'Apple Juice',
			price: '$2.00'
		},
		{
			title: 'Sparkling Apple Juice',
			price: '$2.00'
		},
		{
			title: 'Orange Juice',
			price: '$2.00'
		},
		{
			title: 'Coke',
			price: '$2.00'
		},
		{
			title: 'Mineral Water',
			price: '$2.00'
		},
		{
			title: 'Blended Lemonade',
			price: '$3.25'
		},
		{
			title: 'Loose Leaf Teas',
			price: '$2.75'
		},
	]

</script>

<svelte:head>
	<title>Menu</title>
</svelte:head>

<style>
	.anchor { 
		margin-top: -200px;
		padding-top: 200px;
	}

	.wrapper {
		width: 100%;
		padding: 0 10%;
		text-align: left;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: auto;
		gap: 1em;
		margin-bottom: 4em;
	}

	.wrapper:first-of-type {
		
		margin-top: 200px;
	}

	.card {
		vertical-align: top;
		text-align: left;
		margin: 0 2% 40px 3%;
	}
	
	/* :target {
		scroll-margin-top: 200px;
	} */

	.banner {
		position: absolute;
		left: 0px;
	}

	p {
		padding: 0 10%;
	}


  @media only screen and (max-width: 755px) {

	.wrapper {
		display: grid;
		/* grid-auto-flow: column;
		grid-auto-rows: auto; */
		grid-template-columns: 1fr;
		text-align: center;
	}

	.card {
		width: 60vw;
		text-align: center;
		margin: 0 auto 40px auto;
	}

  }
</style>

<a class='anchor' id='sweet'/>
<div class='wrapper'>
	<img class='banner' src='/images/sweet.png' alt='sweet' />
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

<a class='anchor' id='savory'/>
<div class='wrapper'>
	<img class='banner' src='/images/savory.png' alt='sweet' />
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
		<MenuCard {...theChipotleChicken} />
	</div>
	<div class='card'>
		<MenuCard {...theBreakfastInBed} />
	</div>
	<div class='card'>
		<MenuCard {...theCaprese} />
	</div>
</div>

<a class='anchor' id='coffee'/>
<div class='wrapper'>
	<img class='banner' src='/images/coffee.png' alt='sweet' />
	<MenuItem items={coffees} />	
</div>

<a class='anchor' id='drinks'/>
<div class='wrapper'>
	<img class='banner' src='/images/drinks.png' alt='sweet' />
	<MenuItem items={drinks} />	
</div>
<a class='anchor' id='adult'/>
<p>Looking for locally sourced Wine, Cider or Beer? Come in today to see our rotating selection!</p>
