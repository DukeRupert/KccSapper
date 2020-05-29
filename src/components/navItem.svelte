<script>
  // your script goes here
  export let title = '';
  export let icon = '';
  export let route;
</script>


  <li>
    <a href={route}>{icon} {title}</a>
  </li>


<style>

  li {
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 22px;
  }

  a {
    margin-right: 20px;
    margin-left: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: filter 300ms;
  }
      
</style>
