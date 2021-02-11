<script>
  import BannerMenu from "../components/bannerMenu.svelte";
  import BannerLocations from "../components/bannerLocations.svelte";
  import BannerOrder from "../components/bannerOrder.svelte";
  import Instagram from "../components/instagram.svelte";
  import Footer from "../components/footer.svelte";
  import Modal from "../components/modal.svelte";

  let width;
  let mobile = false;
  $: if (width < 1100) {
    mobile = true;
  } else {
    mobile = false;
  }
</script>

<svelte:window bind:innerWidth={width} />

<main>
  <Modal />
  <BannerOrder label="ORDER ONLINE" right />
  <BannerLocations label="LOCATIONS" route="/locations" left />
  <BannerMenu label="MENU" route="/menu" right />
  <Footer />
  <!-- {#if mobile}
    <Instagram />
  {/if} -->
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
</style>
