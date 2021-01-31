<script>
  export let items = [];
</script>

{#each items as item}
  <div>
    <h1>{item.title}</h1>
    {#each Object.entries(item.price) as [size, price]}
      <p>{size}oz ${price}</p>
    {/each}
  </div>
{/each}

<style>
  h1 {
    font-size: 19px;
    font-weight: medium;
  }

  p {
    color: black;
    font-size: 1em;
    margin: 0px;
    padding-left: 0.5em;
  }

  /* @media only screen and (max-width: 655px) {

    } */
</style>
