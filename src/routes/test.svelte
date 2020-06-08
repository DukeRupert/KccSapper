
<script>
  import json from '../store/instagram.json'
  
  let post = json.data;
</script>
    

<style>

	div {
		width: 100%;
		height: 100%;
	}

  ul {
    list-style-type: none;
  }

  img {
    height: 200px;
  }

</style>

<div id="instafeed">
  <ul>
    <li>
      {#each post as {permalink, media_type, media_url}}
        {#if media_type == 'IMAGE'}
          <a href={permalink}>
            <img src={media_url}/>
          </a>
        {/if}
      {/each}
    </li>
  </ul>
</div>