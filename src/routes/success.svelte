<style>
  section {
    width: 100%;

    /*Flex container propeties*/
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 0 1em;
    color: black;
  }

  a {
    display: flex;
    align-self: center;
    align-items: center;
    justify-content: center;
    padding: 5px;
    margin-top: 1rem;
    padding: 1em 2em;
    border-radius: 40px;
    border: 1px solid black;
    background-color: #f7e7a6;
    transition: all 0.2s ease-in-out;
  }

  a:hover {
    transform: scale(1.1);
  }

  @media (max-width: 655px) {
    a {
      border-radius: 30px;
      font-size: 14px;
    }
  }
</style>

<svelte:head>
  <title>Submission Received</title>
</svelte:head>

<section>
  <h1>Thank you!</h1>
  <p>We will be in touch soon.</p>
  <a href="/">Return</a>
</section>
