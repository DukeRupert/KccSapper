<script>
  export let label = "Fix Me";
  export let route = "#";
  export let left = false;
  export let right = false;
</script>

<a class:left class:right href={route}>
  <p>{label}</p>
</a>

<style>
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(var(--nav-size) * 0.6);
    width: 60%;
    max-width: 40%;
    margin: 40px auto;
    padding: 1em 2em;
    border-radius: 40px;
    color: black;
    font-size: 24px;
    background-color: var(--secondary);
    transition: all calc(var(--speed) * 0.2) ease-in;
  }

  a:active {
    background-color: var(--primary);
    color: var(--secondary);
  }

  .right {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 45%;
    right: 20%;
    height: calc(var(--nav-size) * 0.6);
    width: auto;
    padding: 5px;
    padding-right: 2rem;
    padding-left: 2rem;
    border: 4px solid white;
    border-radius: 40px;
    color: white;
    font-size: 24px;
    background-color: rgba(0, 0, 0, 0.5);
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
    left: 20%;
    height: calc(var(--nav-size) * 0.6);
    width: auto;
    padding: 5px;
    padding-right: 2rem;
    padding-left: 2rem;
    border: 4px solid white;
    border-radius: 40px;
    color: white;
    font-size: 24px;
    background-color: rgba(0, 0, 0, 0.5);
    transition: all calc(var(--speed) * 0.4) ease-in;
  }

  .left:hover {
    background-color: rgba(247, 236, 191, 1);
    color: var(--french-black);
  }

  @media (max-width: 655px) {
    .right {
      right: 5%;
      min-width: 30%;
      padding-right: 0.25em;
      padding-left: 0.25em;
      border: 3px solid white;
      border-radius: 30px;
      font-size: 17px;
    }

    .left {
      left: 5%;
      min-width: 30%;
      padding-right: 0.25em;
      padding-left: 0.25em;
      border: 3px solid white;
      border-radius: 30px;
      font-size: 17px;
    }
  }
</style>
