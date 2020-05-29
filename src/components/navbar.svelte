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
    height: var(--nav-size);
    background-color: white;
    color: black;
    display: flex;
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    justify-content: flex-end;
  }
</style>

<svelte:window bind:innerWidth={width}/>

{#if mobile}
<nav>
  <Logo image="🍓" {title} />
  <Dropdown />
</nav>
{:else}
<nav>
  <Logo image="🍓" {title} />
  <NavItem title="Menu" route='/menu'/>
  <NavItem title="Locations" route='/locations'/>
  <NavItem title="About Us" route='/about'/>
  <NavItem title="Order Online" route='/test'/>
</nav>
{/if}
