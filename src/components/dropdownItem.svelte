<script>
  import { dropdownOpen } from "../store";
  export let title = "";
  export let route;
  export let segment;

  function toggle() {
    dropdownOpen.update((value) => !value);
  }
</script>

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
  .emphasize {
    text-decoration: underline;
  }
  [aria-current] {
    color: black;
  }
</style>

<a
  aria-current={segment === route ? 'page' : undefined}
  class={title === 'ORDER ONLINE' ? 'emphasize' : ''}
  href={route}
  on:click={toggle}>
  {title}
</a>
