<script>
  import MenuCard from "../../components/menuCard.svelte";
  import MenuItem from "../../components/menuItem.svelte";
  import CoffeeItem from "../../components/coffeeItem.svelte";

  const theLemon = {
    src: "../images/crepe_theLemon.jpg",
    alt: "A lemon sugar crepe.",
    title: "The Lemon",
    ingredients: ["lemon", "sugar", "eggs", "dairy", "flour"],
    price: {
      full: "7.00",
      mini: "6.00",
    },
    // nutrition: ['Sugar 4g', 'Fat 2g']
  };

  const thePeanutButter = {
    src: "../images/crepe_thePeanutButter.jpg",
    alt: "A peanut butter and banana crepe.",
    title: "The Peanut Butter ",
    ingredients: ["peanut butter", "banana", "eggs", "dairy", "flour"],
    price: {
      full: "9.00",
      mini: "7.50",
    },

    // nutrition: ['Sugar 4g', 'Fat 2g']
  };

  const theChocolateRaspberry = {
    src: "../images/crepe_theChocolate.jpg",
    alt: "A chocolate raspberry crepe.",
    title: "The Chocolate",
    ingredients: ["chocolate", "raspberry", "eggs", "dairy", "flour"],
    price: {
      full: "9.00",
      mini: "7.50",
    }, // nutrition: ['Sugar 4g', 'Fat 2g']
  };

  const theNutella = {
    src: "../images/crepe_theNutella.jpg",
    alt: "A strawberry and nutella crepe.",
    title: "The Nutella",
    ingredients: ["Nutella", "strawberry", "eggs", "dairy", "flour"],
    price: {
      full: "9.00",
      mini: "7.50",
    }, // nutrition: ['Sugar 4g', 'Fat 2g']
  };

  const theEgg = {
    src: "../images/crepe_theEgg.jpg",
    alt: "An egg crepe with hollandaise.",
    title: "The Egg",
    ingredients: ["provolone", "spinach", "eggs", "dairy", "flour"],
    price: {
      full: "11.95",
      mini: "8.50",
    }, // nutrition: ['Sugar 4g', 'Fat 2g']
  };

  const theBlackBean = {
    src: "../images/crepe_theBlackBean.jpg",
    alt: "A black bean crepe.",
    title: "The Black Bean",
    ingredients: [
      "black bean",
      "avocado",
      "tomato",
      "spinach",
      "lime",
      "salsa",
      "eggs",
      "dairy",
      "flour",
    ],
    price: {
      full: "11.95",
      mini: "8.50",
    }, // nutrition: ['Sugar 4g', 'Fat 2g']
  };

  const theChicken = {
    src: "../images/crepe_chicken.jpg",
    alt: "A chicken crepe.",
    title: "The Chicken",
    ingredients: ["chicken", "spinach", "provolone", "eggs", "dairy", "flour"],
    price: {
      full: "11.95",
      mini: "8.50",
    }, // nutrition: ['Sugar 4g', 'Fat 2g']
  };

  const theMonteCristo = {
    src: "../images/crepe_monteCristo.jpg",
    alt: "A Monte Cristo crepe.",
    title: "The Monte Cristo",
    ingredients: [
      "ham",
      "turkey",
      "provolone",
      "cheddar",
      "raspberry",
      "eggs",
      "dairy",
      "flour",
    ],
    price: {
      full: "11.95",
      mini: "8.50",
    }, // nutrition: ['Sugar 4g', 'Fat 2g']
  };

  const theTurkeyBacon = {
    src: "../images/crepe_turkeyBacon.jpg",
    alt: "A turkey bacon crepe.",
    title: "The Turkey Bacon",
    ingredients: [
      "turkey",
      "bacon",
      "provolone",
      "tomato",
      "spinach",
      "ranch",
      "eggs",
      "dairy",
      "flour",
    ],
    price: {
      full: "11.95",
      mini: "8.50",
    }, // nutrition: ['Sugar 4g', 'Fat 2g']
  };

  const theChipotleChicken = {
    src: "../images/crepe_chickenChipotle.jpg",
    alt: "A chipotle chicken crepe.",
    title: "The Chipotle Chicken",
    ingredients: [
      "chicken",
      "cole slaw",
      "tomato",
      "chipotle ranch",
      "eggs",
      "dairy",
      "flour",
    ],
    price: {
      full: "11.95",
      mini: "8.50",
    }, // nutrition: ['Sugar 4g', 'Fat 2g']
  };

  const savoryCrepes = [
    theEgg,
    theChicken,
    theChipotleChicken,
    theTurkeyBacon,
    theBlackBean,
    theMonteCristo,
  ];

  const sweetCrepes = [
    theNutella,
    thePeanutButter,
    theLemon,
    theChocolateRaspberry,
  ];

  const coffees = [
    {
      title: "Drip Coffee",
      price: {
        12: "2.00",
        16: "2.25",
        20: "2.50",
      },
    },
    {
      title: "Americano",
      price: {
        12: "3.25",
        16: "3.75",
        20: "4.25",
      },
    },
    {
      title: "Latte",
      price: {
        12: "4.00",
        16: "4.50",
        20: "5.00",
      },
    },
    {
      title: "Mocha",
      price: {
        12: "4.50",
        16: "5.00",
        20: "5.50",
      },
    },
    {
      title: "Chai Tea Latte",
      price: {
        12: "4.50",
        16: "5.00",
        20: "5.50",
      },
    },
    {
      title: "Hot Chocolate",
      price: {
        12: "3.25",
        16: "3.75",
        20: "425",
      },
    },
    {
      title: "Blended Drinks",
      price: {
        12: "4.50",
        16: "5.00",
        20: "5.50",
      },
    },
  ];

  const drinks = [
    {
      title: "Bottled Coke",
      price: "$2.00",
    },
    {
      title: "Mineral Water",
      price: "$2.00",
    },
    {
      title: "Redbull",
      price: "$2.00",
    },
    {
      title: "Italian Soda 12oz",
      price: "$5.00",
    },
  ];

  // const theBreakfastInBed = {
  //   src: "../images/crepe_theAllAmerican.jpg",
  //   alt: "A Breakfast in Bed crepe.",
  //   title: "The Breakfast in Bed",
  //   ingredients: [
  //     "bacon",
  //     "cheddar",
  //     "maple sausage",
  //     "maple syrup",
  //     "eggs",
  //     "dairy",
  //     "flour",
  //   ],
  //   price: {
  //     full: "11.95",
  //     mini: "8.50",
  //   }, // nutrition: ['Sugar 4g', 'Fat 2g']
  // };

  // const theCaprese = {
  //   src: "../images/crepe_caprese.jpg",
  //   alt: "A Caprese crepe.",
  //   title: "The Caprese",
  //   ingredients: [
  //     "mozzarella",
  //     "tomato",
  //     "arugula",
  //     "spinach",
  //     "balsamic",
  //     "eggs",
  //     "dairy",
  //     "flour",
  //   ],
  //   price: {
  //     full: "11.95",
  //     mini: "8.50",
  //   }, // nutrition: ['Sugar 4g', 'Fat 2g']
  // };

  // const theAllAmerican = {
  //   src: "../images/crepe_theAllAmerican.jpg",
  //   alt: "An All American crepe.",
  //   title: "The All American",
  //   ingredients: ["gravy", "bacon", "cheddar", "eggs", "dairy", "flour"],
  //   price: {
  //     full: "11.95",
  //     mini: "8.50",
  //   }, // nutrition: ['Sugar 4g', 'Fat 2g']
  // };

  // const theMixedBerry = {
  //   src: "../images/crepe_theNutella.jpg",
  //   alt: "A mixed berry crepe.",
  //   title: "The Mixed Berry",
  //   ingredients: [
  //     "cream cheese",
  //     "strawberry",
  //     "blueberries",
  //     "eggs",
  //     "dairy",
  //     "flour",
  //   ],
  //   price: {
  //     full: "9.00",
  //     mini: "7.50",
  //   }, // nutrition: ['Sugar 4g', 'Fat 2g']
  // };
</script>

<svelte:head>
  <title>Spokane Menu</title>
</svelte:head><a class="anchor" id="sweet" />

<!-- Sweet Crepes -->
<div class="wrapper">
  <img class="banner" src="/images/sweet.png" alt="sweet" />
  {#each sweetCrepes as crepe}
    <div class="card">
      <MenuCard {...crepe} />
    </div>
  {/each}
</div>

<!-- Savory Crepes -->
<a class="anchor" id="savory" />
<div class="wrapper">
  <img class="banner" src="/images/savory.png" alt="sweet" />
  {#each savoryCrepes as crepe}
    <div class="card">
      <MenuCard {...crepe} />
    </div>
  {/each}
</div>

<!-- Coffee -->
<a class="anchor" id="coffee" />
<div class="wrapper">
  <img class="banner" src="/images/coffee.png" alt="sweet" />
  <CoffeeItem items={coffees} />
</div>

<!-- Drinks -->
<a class="anchor" id="drinks" />
<div class="wrapper">
  <img class="banner" src="/images/drinks.png" alt="sweet" />
  <MenuItem items={drinks} />
</div>

<style>
  .anchor {
    margin-top: -200px;
    padding-top: 200px;
  }

  .wrapper {
    width: 100%;
    padding: 0 10%;
    text-align: center;
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
