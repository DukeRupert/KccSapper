<script>
  import Link from "../components/link.svelte";
  import { modal } from "../store";

  // Function toggles dark mode for document.body and all components listening to dark bool in store
  function toggleModal() {
    modal.update((value) => !value); // toggle the value of dark in store
  }
</script>

<div id="myModal" class="modal {$modal ? 'open' : ''}">
  <!-- Modal content -->
  <div class="modal-content">
    <span class="close" on:click={toggleModal}>&times;</span>
    <h1>Select your location</h1>
    <Link
      label="Tri-Cities"
      route="https://www.toasttab.com/kagen-coffee-crepes-270-williams-blvd"
    />
    <Link
      label="Spokane"
      route="https://www.toasttab.com/kagen-coffee-crepes-spokane-915-e-hawthorne-rd/v3"
    />
  </div>
</div>

<style>
  /* The Modal (background) */
  .modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 105; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    /* Enable scroll if needed */
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.32); /* Black w/ opacity */
  }

  .open {
    display: flex;
  }

  /* Modal Content/Box */
  .modal-content {
    background-color: #fefefe;
    margin: 20% 10% auto; /* 10% from the top, 20% from bottom and centered */
    padding: 1.5em;
    width: 80%; /* Could be more or less, depending on screen size */
    text-align: center;
    box-sizing: border-box;
    border-radius: 4px;
    box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2),
      0px 24px 38px 3px rgba(0, 0, 0, 0.14),
      0px 9px 46px 8px rgba(0, 0, 0, 0.12);
  }

  /* The Close Button */
  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }

  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }

  @media (min-width: 1100px) {
    .modal-content {
      margin: 10% auto; /* 10% from the top and centered*/
    }
  }
</style>
