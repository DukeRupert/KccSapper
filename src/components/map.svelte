<script>
    let container;
    let map;
    let zoom = 17;
    let center = {lat: 46.286508, lng: -119.276502};

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
    width: 30vw;
    height: 30vw;
    }
</style>

<div bind:this={container}></div>