<script>
  import Link from "../components/link.svelte";
  import { onMount } from "svelte";

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

<div id="myModal" class="modal">
  <!-- Modal content -->
  <div class="modal-content">
    <span class="close">&times;</span>
    <h1>Select your location</h1>
    <Link
      label="Tri-Cities"
      route="https://ordering.chownow.com/order/15130/locations?add_cn_ordering_class=true"
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
    z-index: 101; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    /* Enable scroll if needed */
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.32); /* Black w/ opacity */
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
