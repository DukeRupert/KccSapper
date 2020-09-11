<script>
  // your script goes here
  export let title = "";
  export let route;
  export let segment;
</script>

<style>
  li {
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 22px;
    transition: all 300ms;
  }

  a {
    margin-right: 20px;
    margin-left: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 300ms;
  }

  .emphasize {
    border: 2px var(--secondary) solid;
    border-radius: 40px;
  }

  [aria-current] {
    color: var(--primary);
  }

  @media only screen and (max-width: 900px) {
    li {
      font-size: 19px;
    }

    a {
      margin-left: 10px;
      margin-right: 10px;
    }
  }
</style>

<li class={title === 'Order Online' ? 'emphasize' : ''}>
  <a aria-current={segment === route ? 'page' : undefined} href={route}>
    {title}
  </a>
</li>
