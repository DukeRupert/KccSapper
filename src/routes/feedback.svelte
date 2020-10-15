<style>
  .container {
    display: flex;
    flex-direction: column;

    box-sizing: border-box;
    padding: 4em;
    padding-top: 0;
    font-size: 2em;
    text-align: left;
    background-color: white;
    width: 100%;
    margin: 80px 15% 0 15%;
  }

  h1 {
    font-size: min(3vw, 2em);
  }

  p {
    font-size: 17px;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 0;
    font-size: 17px;
    margin-bottom: 1em;
  }

  input {
    border-radius: 8px;
  }

  textarea {
    border-radius: 8px;
  }

  button {
    display: flex;
    align-self: center;
    align-items: center;
    justify-content: center;
    /* width: 30vw; */
    padding: 5px;
    margin-top: 1rem;
    padding: 1em 2em;
    border-radius: 40px;
    border-color: black;
    background-color: #f7e7a6;
    transition: all 0.2s ease-in-out;
  }

  button:hover {
    transform: scale(1.1);
  }

  @media only screen and (max-width: 655px) {
    .container {
      margin: 80px 5% 0 5%;
      padding: 1em;
    }

    form {
      margin-top: 10%;
      margin-bottom: 10%;
    }

    label {
      font-size: 14px;
    }

    input {
      font-size: 14px;
      border-radius: 8px;
    }

    textarea {
      font-size: 14px;
      border-radius: 8px;
    }

    h1 {
      font-size: 24px;
    }
    p {
      font-size: 14px;
    }

    a {
      font-weight: bold;
    }

    button {
      /* padding-right: 1rem;
      padding-left: 1rem; */
      border-radius: 30px;
      font-size: 14px;
    }
  }
</style>

<svelte:head>
  <title>Contact Us</title>
</svelte:head>
<div class="container">
  <h1>CONTACT US</h1>
  <form
    name="contact"
    method="POST"
    data-netlify="true"
    netlify-honeypot="bot-field">
    <input type="hidden" name="form-name" value="contact" />
    <div hidden aria-hidden="true">
      <label>
        Don’t fill this out if you're human: <input name="bot-field" />
      </label>
    </div>
    <label for="fname">FIRST NAME - Optional</label>
    <input id="fname" type="text" name="firstName" />
    <label for="lname">LAST NAME - Optional</label>
    <input id="lname" type="text" name="lastName" />
    <label for="email">EMAIL - Required</label>
    <input id="email" name="email" required />
    <label for="message">MESSAGE - Required</label>
    <textarea id="message" rows="6" type="text" name="message" required />
    <Button type="submit" label="Submit" center />
  </form>
</div>
