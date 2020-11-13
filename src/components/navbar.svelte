<script>
  import Logo from "./logo.svelte";
  import NavItem from "./navItem.svelte";
  import Dropdown from "./dropdown.svelte";

  export let segment;

  let title = "Kagens Coffee & Crepes";
  let width;
  let mobile = false;
  $: if (width < 1100) {
    mobile = true;
  } else {
    mobile = false;
  }
</script>

<style>
  nav {
    position: fixed;
    top: 0px;
    height: 80px;
    background-color: white;
    color: black;
    display: flex;
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    justify-content: flex-end;
    box-shadow: rgba(60, 60, 59, 0.75) 0 0 10px;
    z-index: 101;
  }
</style>

<svelte:window bind:innerWidth={width} />

{#if mobile}
  <nav>
    <Logo {title} />
    <Dropdown {segment} />
  </nav>
{:else}
  <nav>
    <Logo {title} />
    <NavItem title="Menu" route="menu" {segment} />
    <NavItem title="Locations" route="locations" {segment} />
    <NavItem title="About Us" route="about" {segment} />
    <NavItem title="Join Our Team" route="join-our-team" {segment} />
    <NavItem
      title="Order Online"
      route="https://ordering.chownow.com/order/15130/locations?add_cn_ordering_class=true"
      {segment} />
  </nav>
{/if}
