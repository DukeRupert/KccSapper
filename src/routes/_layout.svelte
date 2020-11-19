<script>
  import Navbar from "../components/navbar.svelte";

  export let segment;
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
    max-width: 100%;
    height: 100%;
    min-height: 100vh;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>

<svelte:window bind:innerWidth={width} />
<svelte:head>
  <!-- Facebook Pixel Code -->
  <script>
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod
          ? n.callMethod.apply(n, arguments)
          : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(
      window,
      document,
      "script",
      "https://connect.facebook.net/en_US/fbevents.js"
    );
    fbq("init", "348346456445111");
    fbq("track", "PageView");
  </script><noscript><img
      height="1"
      width="1"
      style="display:none"
      src="https://www.facebook.com/tr?id=348346456445111&ev=PageView&noscript=1" /></noscript>
  <!-- End Facebook Pixel Code -->
</svelte:head>

<Navbar {segment} {mobile} />

<main>
  <slot />
</main>
