<!-- src/routes/menu/_layout.svelte -->
<script>
  import MenuNavbar from "../../components/menuNavbar.svelte";

  export let segment;
</script>

<MenuNavbar {segment} />

<slot {segment} />
