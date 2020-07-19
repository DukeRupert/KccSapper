<script>
  import Logo from "./logo.svelte";
  import NavItem from "./navItem.svelte";
  import Dropdown from './dropdown.svelte'
  let title = "Kagens Coffee & Crepes";
  let width;
  let mobile = false;
  $: if (width < 655) {
    mobile = true;
  }
  else {
    mobile = false;
  }
</script>

<style>
  nav {
    height: 80px;
    background-color: white;
    color: black;
    display: flex;
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    justify-content: flex-end;
    box-shadow: 0 4px 2px -2px gray;
    z-index: 101;
  }

  @media only screen and (max-width: 655px) {

    nav {
      position: fixed;
    }
  }
</style>

<svelte:window bind:innerWidth={width}/>

{#if mobile}
<nav>
  <Logo {title} />
  <Dropdown />
</nav>
{:else}
<nav>
  <Logo {title} />
  <NavItem title="Menu" route='/menu'/>
  <NavItem title="Locations" route='/locations'/>
  <NavItem title="About Us" route='/about'/>
  <NavItem title="Order Online" route='/test'/>
</nav>
{/if}
