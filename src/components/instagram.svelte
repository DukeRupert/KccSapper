<script>
  const url = "/.netlify/functions/fetch-instagram";

  async function fetchData() {
    const res = await fetch(url);
    const data = await res.json();

    if (res.ok) {
      console.log(data);
      return data;
    } else {
      throw new Error(data);
    }
  }
</script>

<style>
  div {
    position: relative;
    height: 50vw;
    width: 100%;
    background-color: black;

    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  .post {
    flex: 0 25%;
    height: 50%;

    display: flex;
    justify-content: center;
    overflow: hidden;
  }

  img {
    width: 100%;
    padding-bottom: 50%;
    position: relative;
    object-fit: cover;
  }

  .failed {
    flex: 0 25%;
    height: 50%;
    background-color: black;
  }
</style>

<div>
  {#await fetchData()}
    <p>loading</p>
  {:then posts}
    {#each { length: 1 } as _, i}
      {#if posts[i].media_type == 'IMAGE' || posts[i].media_type == 'CAROUSEL_ALBUM'}
        <div class="post">
          <a href={posts[i].permalink}> <img src={posts[i].media_url} /> </a>
        </div>
      {:else if posts[i].media_type == 'VIDEO'}
        <div class="post">
          <a href={posts[i].permalink}>
            <img src={posts[i].thumbnail_url} />
          </a>
        </div>
      {:else}
        <div class="failed" />
      {/if}
    {/each}
  {:catch error}
    <p style="color: red">{error.message}</p>
  {/await}
</div>
