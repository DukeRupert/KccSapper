<script>
  import Icon from 'svelte-awesome';
  import { facebookOfficial, instagram } from 'svelte-awesome/icons';
</script>

<style>
  div {
    position: relative;
    height: 15vw;
    width: 100%;
    padding: 1em;
    background-color: #343434;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  .links {
    width: 50%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: flex-start;
    text-align: left;
    background-color: #343434;
    color: white;
  }

  .socialMedia {
    width: 50%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-content: flex-start;
    text-align: left;
    background-color: #343434;
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

  .copyright {
    position: absolute;
    bottom: 2%;
    right: 2%;
    width: auto;
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
  <div class='links'>
    <h4>LINKS</h4>
    <a href='/feedback'><p>Contact Us</p></a>
  </div>
  <div class='socialMedia'>
      <h4>FOLLOW US</h4>
      <a href='https://www.facebook.com/kagencoffeeandcrepes/'>
        <Icon data={facebookOfficial} scale='2' style='padding-right: 0.5em;'/>
      </a>
      <a href='https://www.instagram.com/kagencoffeeandcrepes/'>
        <Icon data={instagram} scale='2' style='padding-left: 0.5em; padding-right: 0.5em;'/>
      </a>
  </div>
  <p class='copyright'>&copy The Crepe Shop 2020</p>
</div>