<script>
  import { dropdownOpen } from '../store'
  export let title = '';
  export let route;
  export let segment;

  function toggle() {
      dropdownOpen.update(value => !value);
  }
</script>


<a 
  aria-current='{segment ===  route ? 'page' : undefined }'
  href={route} 
  on:click={toggle}>
 {title}
</a>


<style>

  a {
    height: 50px;
    display: flex;
    align-items: center;
    transition: background var(--speed);
    margin-left: 5%;
    padding: 0.5rem;
    color: var(--nav-dropdown-text);
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 2px;
  }

  [aria-current] {
    color: black;
	}
      
</style>
