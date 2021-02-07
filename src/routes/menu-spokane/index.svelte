<script>
  import MenuCard from "../../components/menuCard.svelte";
  import MenuItem from "../../components/menuItem.svelte";
  import CoffeeItem from "../../components/coffeeItem.svelte";

  import { sweetCrepes, savoryCrepes } from "../../store";

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
</script>

<svelte:head>
  <title>Spokane Menu</title>
</svelte:head><a class="anchor" id="sweet" />

<!-- Sweet Crepes -->
<div class="wrapper">
  <img class="banner" src="/images/sweet.png" alt="sweet" />
  {#each $sweetCrepes as crepe}
    <div class="card">
      <MenuCard {...crepe} />
    </div>
  {/each}
</div>

<!-- Savory Crepes -->
<a class="anchor" id="savory" />
<div class="wrapper">
  <img class="banner" src="/images/savory.png" alt="sweet" />
  {#each $savoryCrepes as crepe}
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
