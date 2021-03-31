<script>
  import DropdownItem from "./dropdownItem.svelte";
  import { dropdownOpen } from "../store";
  import { slide } from "svelte/transition";
  import { quadOut } from "svelte/easing";
  import Modal from "./modal.svelte";

  import { modal } from "../store";

  // Function toggles dark mode for document.body and all components listening to dark bool in store
  function toggleModal() {
    modal.update((value) => !value); // toggle the value of dark in store
  }

  export let segment;

  //renaming store value to make markup more concise (ie. class:active)
  $: active = $dropdownOpen;

  //toggle dropdown status on click
  function toggle() {
    dropdownOpen.update((value) => !value);
  }
</script>

<!-- <button on:click={toggle}><Icon data={bars} scale='2'/></button> -->
<button
  on:click={toggle}
  class="hamburger hamburger--spin {active ? 'is-active' : ''}"
  type="button"
>
  <span class="hamburger-box"> <span class="hamburger-inner" /> </span>
</button>
{#if active}
  <Modal />
  <li>
    <div transition:slide={{ duration: 500, easing: quadOut }}>
      <DropdownItem
        title="TRI-CITIES MENU"
        route="menu"
        onClick={toggle}
        {segment}
      />
      <DropdownItem
        title="SPOKANE MENU"
        route="menu-spokane"
        onClick={toggle}
        {segment}
      />
      <DropdownItem
        title="LOCATIONS"
        route="locations"
        onClick={toggle}
        {segment}
      />
      <DropdownItem title="ABOUT US" route="about" onClick={toggle} {segment} />
      <DropdownItem
        title="JOIN OUR TEAM"
        route="join-our-team"
        onClick={toggle}
        {segment}
      />
      <DropdownItem
        title="CONTACT US"
        route="feedback"
        onClick={toggle}
        {segment}
      />
      <!-- Button to trigger modal on index page -->
      <button on:click={toggleModal}>ORDER ONLINE</button>
      <DropdownItem
        title="SHOP"
        route="https://shop.kagenandco.com"
        onClick={toggle}
        emphasize
        {segment}
      />
    </div>
  </li>
{/if}

<!-- <button on:click={toggle}><Icon data={bars} scale='2'/></button> -->
<style>
  li {
    display: flex;
    align-items: center;
    font-size: 17px;
  }

  div {
    position: fixed;
    overflow: hidden;
    z-index: 99;
    top: 80px;
    left: 0;
    width: 100%;
    height: calc(100% - 80px);
    box-sizing: border-box;
    box-shadow: rgba(60, 60, 59, 0.75) 0 10px 12px -10px inset;

    background-color: var(--nav-dropdown-background);
  }

  button {
    height: 50px;
    display: flex;
    align-items: center;
    margin-left: 5%;
    padding: 0.5rem;
    color: var(--nav-dropdown-background);
    font-size: 24px;
    font-weight: bold;
    background-color: white;
    border-radius: 40px;
  }
</style>
