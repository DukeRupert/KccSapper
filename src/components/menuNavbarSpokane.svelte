<script>
  import NavItem from "./navItem.svelte";
</script>

<nav>
  <NavItem title="Sweet" route="/menu-spokane#sweet" />
  <NavItem title="Savory" route="/menu-spokane#savory" />
  <NavItem title="Coffee" route="/menu-spokane#coffee" />
  <NavItem title="Drinks" route="/menu-spokane#drinks" />
</nav>

<style>
  nav {
    position: fixed;
    top: 80px;
    height: 80px;
    background-color: white;
    color: black;
    display: flex;
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    justify-content: center;
    box-shadow: rgba(59, 59, 58, 0.5) 0 0 10px;
    z-index: 100;

    /*Horizontal Scolling*/
    overflow: auto;
    white-space: nowrap;
  }
</style>
