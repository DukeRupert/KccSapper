<script>
  
</script>

<style>
  div {
    position: relative;
    height: 15vw;
    width: 100%;
    padding: 1em;
    background-color: white;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  .card {
    width: 50%;
    margin: 0;
    padding: 0.5em;
    box-sizing: border-box;
    background-color: white;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: flex-start;
    text-align: left;
    color: black;
  }

  h4 {
    margin: 0;
    margin-bottom: 0.5em;
    width: 100%;
    font-size: 2em;
  }

  p {
    margin: 0;
    margin-bottom: 0.5em;
    width: 100%;
    font-size: 1.5em;
  }

  @media only screen and (max-width: 655px) {
    div {
      height: 30vw;
      width: 100%;
    }

    h4 {
      font-size: 1em;
    }

    p {
      font-size: 1em;
    }
  }


</style>

<div>
  <div class='card'>
    <h4>Other Links</h4>
    <a href='/feedback'><p>Contact Us</p></a>
    <a href='/jobs'><p>Join our team</p></a>
  </div>
  <div class='card'></div>
</div>