<script>

</script>

<svelte:head>
	<title>Menu</title>
</svelte:head>

<style>
	.cards {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		font-size: 1em;
		text-align: left;
	}

	.card {
		flex: 1;
		min-width: 300px;
		max-width: 30%;
		max-height: 70%;
		margin: 2%;
		padding: 20px;
		box-shadow: -2px -2px 5px darkgray, 2px 2px 5px lightgray;
		border-radius: 20px;

		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: flex-start;
	}
	div {
		width: 100%;
		height: 100%;
	}


  @media only screen and (max-width: 655px) {

  }
</style>

<div>
	
	<div class='cards'>
		<div class='card'>
			
		</div>
		<div class='card'>
				
		</div>
	</div>
</div>