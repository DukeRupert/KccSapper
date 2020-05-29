<script>
    let container;
    let map;
    let zoom = 17;
    export let center = {};

    import { onMount } from 'svelte';

    onMount(async () => {
        map = new google.maps.Map(container, {
            zoom,
            center,
        });
    });
</script>

<style>
    div {
    width: 20vw;
    height: 20vw;
    }
</style>

<div bind:this={container}></div>