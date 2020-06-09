<script>
  import json from '../store/instagram.json'
  let post = json.data;
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


</style>

<div>
  {#each post as {permalink, media_type, media_url}}
    {#if media_type == 'IMAGE'}
      <div class='post'>
        <a href={permalink}>
          <img src={media_url}/>
        </a>
      </div>
    {/if}
  {/each}
  {#each post as {permalink, media_type, media_url}}
    {#if media_type == 'IMAGE'}
      <div class='post'>
        <a href={permalink}>
          <img src={media_url}/>
        </a>
      </div>
    {/if}
  {/each}
</div>