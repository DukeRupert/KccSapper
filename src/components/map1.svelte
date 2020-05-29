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
    width: 25vw;
    height: 25vw;
    }
</style>

<div bind:this={container}></div>