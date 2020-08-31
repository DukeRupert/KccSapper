<script>
  import { dropdownOpen } from '../store'
  export let title = '';
  export let route;
  export let segment;

  function toggle() {
      dropdownOpen.update(value => !value);
  }
</script>


<a aria-current='{segment ===  route ? 'page' : undefined }' href={route} on:click={toggle}>
 {title}
</a>


<style>

  a {
    height: 50px;
    display: flex;
    align-items: center;
    transition: background var(--speed);
    padding: 0.5rem;
    color: var(--text-color);
    font-size: 17px;
    font-weight: bold;
  }

  [aria-current] {
    color: var(--primary);
	}
      
</style>
