<script>
  import { dropdownOpen } from "../store";
  export let title = "";
  export let route;
  export let emphasize = false;
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
    margin-left: 5%;
    padding: 0.5rem;
    color: var(--nav-dropdown-text);
    font-size: 24px;
    font-weight: bold;
  }
  .emphasize {
    color: var(--nav-dropdown-background);
    background-color: white;
    border-radius: 40px;
    padding: inherit;
  }

  [aria-current] {
    color: black;
  }
</style>

<a
  aria-current={segment === route ? 'page' : undefined}
  href={route}
  on:click={toggle}>
  <div class={emphasize ? 'emphasize' : ''}>{title}</div>
</a>
