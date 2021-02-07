<script>
  import MenuCard from "../../components/menuCard.svelte";
  import MenuItem from "../../components/menuItem.svelte";
  import CoffeeItem from "../../components/coffeeItem.svelte";

  import { sweetCrepes, savoryCrepes, coffees, drinks } from "../../store";
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
  <CoffeeItem items={$coffees} />
</div>

<!-- Drinks -->
<a class="anchor" id="drinks" />
<div class="wrapper">
  <img class="banner" src="/images/drinks.png" alt="sweet" />
  <MenuItem items={$drinks} />
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
