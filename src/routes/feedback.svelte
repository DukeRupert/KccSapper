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

  .req {
    margin-left: 3px;
    color: #f74545;
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
    button {
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
    action="/success"
    method="POST"
    data-netlify="true"
    netlify-honeypot="bot-field">
    <input type="hidden" name="form-name" value="contact" />
    <div hidden aria-hidden="true">
      <label>
        Don’t fill this out if you're human:
        <input name="bot-field" />
      </label>
    </div>
    <label> NAME <span class="req">*</span> </label>
    <input type="text" name="name" required />
    <label> EMAIL <span class="req">*</span> </label>
    <input type="email" name="email" required />
    <label> MESSAGE <span class="req">*</span> </label>
    <textarea rows="6" type="text" name="message" required />
    <button type="submit">Submit</button>
  </form>
</div>
