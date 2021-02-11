<script>
  import BannerMenu from "../components/bannerMenu.svelte";
  import BannerLocations from "../components/bannerLocations.svelte";
  import BannerOrder from "../components/bannerOrder.svelte";
  import Instagram from "../components/instagram.svelte";
  import Footer from "../components/footer.svelte";
  import { onMount } from "svelte";

  let width;
  let mobile = false;
  $: if (width < 1100) {
    mobile = true;
  } else {
    mobile = false;
  }

  onMount(() => {
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    btn.onclick = function () {
      modal.style.display = "flex";
    };

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  });
</script>

<svelte:window bind:innerWidth={width} />

<main>
  <BannerOrder label="ORDER ONLINE" right />
  <BannerLocations label="LOCATIONS" route="/locations" left />
  <BannerMenu label="MENU" route="/menu" right />
  <div id="myModal" class="modal">
    <!-- Modal content -->
    <div class="modal-content">
      <span class="close">&times;</span>
      <h1>Select your location</h1>
    </div>
  </div>
  <Footer />
  {#if mobile}
    <Instagram />
  {/if}
  <!-- a naive and simple way to hide a div -->
  <div class="housekeeping">
    <a href="/spokane-menu">spokane-menu</a>
  </div>
</main>

<style>
  main {
    text-align: center;
    padding: 0px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    background-color: black;
  }
  .housekeeping {
    display: none;
    visibility: hidden;
    position: absolute;
  }

  /* The Modal (background) */
  .modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 101; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    /* Enable scroll if needed */
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  }

  /* Modal Content/Box */
  .modal-content {
    background-color: #fefefe;
    margin: 40% auto; /* 40% from the top and centered */
    padding: 1.5em;
    width: 80%; /* Could be more or less, depending on screen size */
    box-sizing: border-box;
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
