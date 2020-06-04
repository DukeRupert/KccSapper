<script>
  
</script>

<style>
  div {
    position: relative;
    height: 25vw;
    width: 100%;
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
    border: 1px black solid;
    background-color: red;
  }

  @media only screen and (max-width: 655px) {
    div {
      width: 100%;
    }
  }


</style>

<div>
  <div class='card'></div>
  <div class='card'></div>
</div>