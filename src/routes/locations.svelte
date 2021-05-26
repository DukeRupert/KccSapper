<script>
  import MapCard from "../components/mapCard.svelte";

  const uptownLocation = {
    link: "https://www.google.com/maps/place/270+Williams+Blvd,+Richland,+WA+99354/",
    image: "images/staticmapTriCities.png",
    alt: "Google Map of 270 Williams Blvd, Richland, WA 99354",
    title: "UPTOWN KAGENS",
    address: "270 Williams Boulevard <br /> Richland, WA 99354",
    phone: "509-851-7186",
    hours: "Sunday – Saturday: 7am to 5pm",
  };

  const spokaneLocation = {
    link: "https://www.google.com/maps/place/915+E+Hawthorne+Rd,+Spokane,+WA+99218/",
    image: "images/staticmapSpokane.png",
    alt: "915 E Hawthorne Rd, Spokane WA 99218",
    title: "SPOKANE KAGENS",
    address: "915 E Hawthorne Rd <br /> Spokane, WA 99218",
    phone: "509-413-1363",
    hours: "Sunday – Saturday: 7am to 5pm",
  };
</script>

<svelte:head>
  <title>Kagen's Coffee & Crepe Locations</title>
</svelte:head>
<div>
  <div class="banner">
    <h1 class="banner-text">LOCATIONS</h1>
  </div>
  <div class="cards">
    <div class="card">
      <MapCard {...uptownLocation} />
    </div>
    <div class="card">
      <MapCard {...spokaneLocation} />
    </div>
  </div>
</div>

<style>
  div {
    width: 100%;
    height: 100%;
  }

  h1 {
    color: black;
    font-size: 32px;
    font-weight: bold;
    letter-spacing: 2px;
  }

  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    font-size: 1em;
    text-align: left;
    box-sizing: border-box;
    padding: 1em;
  }

  .card {
    flex: 1;
    min-width: 25vw;
    max-width: 30vw;
    max-height: 70%;
    margin: 1em;
    padding: 1em;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
  }

  .banner {
    position: relative;
    margin-top: 40px;
    width: 100%;
    height: 60vh;
    background-image: url("/images/espresso.jpg");
    background-position: center;
    background-size: 100% auto;
    background-repeat: no-repeat;
  }

  .banner-text {
    position: absolute;
    display: inline-block;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 5px;
    padding-right: 2rem;
    padding-left: 2rem;
    border-radius: 40px;
    color: #fcc24c;
    background-color: rgba(0, 0, 0, 0.5);
  }

  @media only screen and (max-width: 655px) {
    h1 {
      font-size: 24px;
      letter-spacing: 1px;
      margin-bottom: 15%;
    }

    .banner {
      margin-top: 40px;
      height: 40vh;
      background-size: 100% auto;
      background-repeat: no-repeat;
    }

    .card {
      min-width: 70vw;
      margin-top: 0;
    }

    .cards {
      padding: 2em;
    }
  }
</style>
