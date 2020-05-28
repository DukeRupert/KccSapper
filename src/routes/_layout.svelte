<script>
	import Nav from '../components/Nav.svelte';
	import Navbar from '../components/navbar.svelte';

	export let segment;
</script>

<style>
	main {
		text-align: center;
		padding: 0px;
		max-width: 100%;
		height: 100%;
		margin: 0 auto;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
	}
</style>

<!-- Original Template Code
<Nav {segment}/>
-->

<Navbar />

<main>
	<slot></slot>
</main>