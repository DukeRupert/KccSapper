<script>
  
</script>

<style>
  div {
    position: relative;
    height: 15vw;
    width: 100%;
    padding: 1em;
    background-color: black;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  .card {
    width: 50%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: flex-start;
    text-align: left;
    background-color: black;
    color: white;
  }

  h4 {
    margin: 0;
    margin-bottom: 0.5em;
    width: 100%;
    font-size: 2em;
    letter-spacing: 2px;
    color: white;
  }

  p {
    margin: 0;
    margin-bottom: 0.5em;
    width: 100%;
    font-size: 1.5em;
    color: white;
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
    <h4>LINKS</h4>
    <a href='/feedback'><p>Contact Us</p></a>
  </div>
  <div class='card'></div>
</div>