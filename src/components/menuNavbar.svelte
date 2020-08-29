<script>
  import NavItem from "./navItem.svelte";
</script>

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
  }

  /* @media only screen and (max-width: 655px) {

    
  } */
</style>


<nav>
  <NavItem title="Sweet" route='/menu#sweet'/>
  <NavItem title="Savory" route='/menu#savory' />
  <NavItem title='Coffee' route='/menu#coffee' />
  <NavItem title='Drinks'  route='/menu#drinks' />
</nav>
