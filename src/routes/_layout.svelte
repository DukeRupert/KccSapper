<script>
	import Navbar from '../components/navbar.svelte';
</script>

<style>
	main {
		text-align: center;
		padding: 0px;
		max-width: 100%;
		height: 100%;
		min-height: 100vh;
		margin: 0 auto;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
	}

	@media only screen and (max-width: 655px) {

		main {
			padding-top: 80px;
		}
	}
</style>

<!-- Original Template Code
<Nav {segment}/>
-->

<Navbar />

<main>
	<slot></slot>
</main>