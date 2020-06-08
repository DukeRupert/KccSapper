<script>
  export let label = '';
  export let route = '';
  export let src = '';
  export let alt = '';
  export let left = false;
  export let right = false;
</script>

<style>
  .banner {
    position: relative;
  }

  img {
    display: block;
    max-width: 100%;
    max-height: 100%;
  }

  .right {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 50%;
    left: 60%;
    height: calc(var(--nav-size) * 0.6);
    width: auto;
    padding: 5px;
    padding-right: 2rem;
    padding-left: 2rem;
    border: 4px solid white;
    border-radius: 40px;
    color: white;
    font-size: 24px;
    background-color: rgba(0, 0, 0, 0.3);
    transition: all calc(var(--speed) * 0.4) ease-in;
  }

  .right:hover {
    background-color: rgba(247, 236, 191, 1);
    color: var(--french-black);
  }

  .left {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    right: 60%;
    height: calc(var(--nav-size) * 0.6);
    width: auto;
    padding: 5px;
    padding-right: 2rem;
    padding-left: 2rem;
    border: 4px solid white;
    border-radius: 40px;
    color: white;
    font-size: 24px;
    background-color: rgba(0, 0, 0, 0.3);
    transition: all calc(var(--speed) * 0.4) ease-in;
  }

  .left:hover {
    background-color: rgba(247, 236, 191, 1);
    color: var(--french-black);
  }

  @media (max-width: 655px) {

    .right {
      left: 60%;
      padding-right: 1rem;
      padding-left: 1rem;
      border: 3px solid white;
      border-radius: 30px;
      font-size: 17px;
    }

    .left {
      right: 60%;
      padding-right: 1rem;
      padding-left: 1rem;
      border: 3px solid white;
      border-radius: 30px;
      font-size: 17px;
    }
  }
</style>

<div class="banner">
  <img {src} alt={alt} />
  <a class:left class:right href={route}>
    <p>{label}</p>
  </a>
</div>