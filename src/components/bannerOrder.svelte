<script>
  import { modal } from "../store";

  // Function toggles dark mode for document.body and all components listening to dark bool in store
  function toggleModal() {
    modal.update((value) => !value); // toggle the value of dark in store
  }

  export let label = "";
  export let left = false;
  export let right = false;
  import Image from "svelte-image";
</script>

<div>
  <Image
    src="images/crepe_strawberry.jpg"
    alt="A strawberry crepe."
    class="banner"
    wrapperClass="banner"
    placeholderClass="banner"
  />
  <!-- Button to trigger modal on index page -->
  <button class:left class:right on:click={toggleModal}>{label}</button>
</div>

<style>
  div {
    position: relative;
    width: 100%;
    margin-top: 80px;
  }

  :global(.banner) {
    display: block;
    max-width: 100%;
  }

  .right {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 45%;
    right: 20%;
    height: calc(var(--nav-size) * 0.6);
    width: auto;
    padding: 1em;
    padding-right: 2rem;
    padding-left: 2rem;
    border: 4px solid white;
    border-radius: 40px;
    color: white;
    font-size: 24px;
    background-color: rgba(0, 0, 0, 0.5);
    transition: all calc(var(--speed) * 0.4) ease-in;
  }

  .right:hover {
    background-color: rgba(247, 236, 191, 1);
    color: var(--french-black);
  }

  .left {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 20%;
    height: calc(var(--nav-size) * 0.6);
    width: auto;
    padding: 5px;
    padding-right: 2rem;
    padding-left: 2rem;
    border: 4px solid white;
    border-radius: 40px;
    color: white;
    font-size: 24px;
    background-color: rgba(0, 0, 0, 0.5);
    transition: all calc(var(--speed) * 0.4) ease-in;
  }

  .left:hover {
    background-color: rgba(247, 236, 191, 1);
    color: var(--french-black);
  }

  @media (max-width: 655px) {
    .right {
      right: 5%;
      min-width: 30%;
      padding-right: 0.25em;
      padding-left: 0.25em;
      border: 3px solid white;
      border-radius: 30px;
      font-size: 17px;
    }

    .left {
      left: 5%;
      min-width: 30%;
      padding-right: 0.25em;
      padding-left: 0.25em;
      border: 3px solid white;
      border-radius: 30px;
      font-size: 17px;
    }
  }
</style>
