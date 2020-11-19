<script>
  import BannerMenu from "../components/bannerMenu.svelte";
  import BannerLocations from "../components/bannerLocations.svelte";
  import BannerOrder from "../components/bannerOrder.svelte";
  import Instagram from "../components/instagram.svelte";
  import Footer from "../components/footer.svelte";

  let width;
  let mobile = false;
  $: if (width < 1100) {
    mobile = true;
  } else {
    mobile = false;
  }
</script>

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
</style>

<svelte:window bind:innerWidth={width} />

<main>
  <BannerOrder
    label="ORDER ONLINE"
    route="https://ordering.chownow.com/order/15130/locations?add_cn_ordering_class=true"
    right />
  <BannerLocations label="LOCATIONS" route="/locations" left />
  <BannerMenu label="MENU" route="/menu" right />
  <Footer />
  {#if mobile}
    <Instagram />
  {/if}
</main>
