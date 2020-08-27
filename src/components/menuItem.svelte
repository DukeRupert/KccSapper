<script>

    export let items=[];

       
</script>

{#each items as item}
    <h1>{item.title}</h1>
    <p>{item.price}</p>
{/each}

<style>

    h1 {
        font-size: 19px;
        font-weight: medium;
    }

    p {
        color: black;
        font-size: 1em;
        margin: 0px;
        padding-left: 0.5em;
    }

    /* @media only screen and (max-width: 655px) {

    } */
</style>
