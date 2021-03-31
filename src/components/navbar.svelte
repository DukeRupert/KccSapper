<script>
  import Logo from "./logo.svelte";
  import NavItem from "./navItem.svelte";
  import Dropdown from "./dropdown.svelte";
  import Modal from "./modal.svelte";

  export let segment;
  export let mobile;

  import { modal } from "../store";

  // Function toggles dark mode for document.body and all components listening to dark bool in store
  function toggleModal() {
    modal.update((value) => !value); // toggle the value of dark in store
  }

  let title = "Kagens Coffee & Crepes";
</script>

{#if mobile}
  <Modal />
  <nav>
    <Logo {title} />
    <Dropdown {segment} />
  </nav>
{:else}
  <Modal />
  <nav>
    <Logo {title} />
    <NavItem title="Tri-Cities Menu" route="menu" {segment} />
    <NavItem title="Spokane Menu" route="menu-spokane" {segment} />
    <NavItem title="Locations" route="locations" {segment} />
    <NavItem title="About Us" route="about" {segment} />
    <NavItem title="Join Our Team" route="join-our-team" {segment} />
    <!-- Button to trigger modal on index page -->
    <button on:click={toggleModal}>Order Online</button>
    <NavItem
      title="Shop"
      route="https://shop.kagenandco.com"
      emphasize
      {segment}
    />
  </nav>
{/if}

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

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px var(--secondary) solid;
    border-radius: 40px;
    margin: 0em 0.5em;
    transition: all 0.2s ease-in-out;
    font-weight: bold;
    font-size: 22px;
    background-color: white;
  }

  button:hover {
    background-color: var(--secondary);
  }
</style>
