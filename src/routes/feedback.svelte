<script>
	import { contact } from '../store';
</script>

<svelte:head>
	<title>Contact Us</title>
</svelte:head>

<style>
	div {
		display: flex;
		flex-direction: column;

		box-sizing: border-box;
		padding: 4em;
		padding-top: 0;
		font-size: 2em;
		text-align: left;
		background-color:  #F7EEDF;
		width: 100%;
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
    align-items: center;
    justify-content: center;
    width: 30vw;
    padding: 5px;
    padding-right: 2rem;
    padding-left: 2rem;
    border-radius: 40px;
	border-color: black;
	background-color: rgba(247, 236, 191, 1);
  	}

	@media only screen and (max-width: 655px) {
	
	div {
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
      padding-right: 1rem;
      padding-left: 1rem;
      border-radius: 30px;
      font-size: 14px;
    }

}
</style>

<div>
	<h1>CONTACT US</h1>
	<p>
		We’d love to hear from you! Send us an email to <a href='mailto: info@kagenandco.com'>info@kagenandco.com</a> or fill in your details below.
	</p>
	<form action="mailto:loganwilliamsse@gmail.com" method="post" enctype="text/plain">
		<label>NAME</label>
		<input type="text" bind:value={$contact.name} />
		<label>EMAIL</label>
		<input type="text" bind:value={$contact.email} />
		<label>MESSAGE</label>
		<textarea rows='6' type="text" bind:value={$contact.message} />
	</form>
	<button onclick='submit'>SUBMIT</button>
</div>