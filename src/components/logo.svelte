<script>
  export let image = "";
  export let title = "";
</script>

<style>
  li {
    display: flex;
    align-items: center;
    margin-right: auto;
  }

  .image {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    transition: filter 300ms;
  }

  .title {
    margin-left: 10px;
    font-size: 19px;
    font-weight: bold;
    letter-spacing: 1px;
  }
</style>

<li>
  <a href="#" class="image">{image}</a>
  <a href="#" class="title">{title}</a>
</li>
