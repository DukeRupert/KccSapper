<script>
    import { slide, fade } from 'svelte/transition';

    export let src;
    export let alt='';
    export let title='';
    export let ingredients=['Coming soon'];
    export let nutrition=['Coming soon'];

    // controls for ingredients dropdown list
    let ingredientsToggle = false;
    $: iStatus = ingredientsToggle; // reactive toggle to update caret orientation
    function toggleIngredients() {
        ingredientsToggle = !ingredientsToggle;
    }

    // controls for nutrition dropdown list
    let nutritionToggle = false;
    $: nStatus = nutritionToggle; // reactive toggle to update caret orientation
    function toggleNutrition() {
        nutritionToggle = !nutritionToggle;
    }

    //imports for fontawesome caret symbols used in dropdown menu
    import Fa from 'svelte-fa'
    import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'
    
</script>

<img {src} alt={alt} in:fade>
<h1>{title}</h1>
<button on:click={toggleIngredients}>INGREDIENTS <Fa class= 'icon' icon={iStatus ? faCaretUp : faCaretDown} primaryColor="darkgrey" /></button>
    {#if ingredientsToggle }
        <p transition:slide>
            {#each ingredients as ingredient}
               {ingredient} <br> 
            {/each}
        </p>
    {/if}
<button on:click={toggleNutrition}>NUTRITIONAL INFO <Fa class= 'icon' icon={nStatus ? faCaretUp : faCaretDown} primaryColor="darkgrey" /></button>
    {#if nutritionToggle }
        <p transition:slide> 
            {#each nutrition as fact}
                {fact} <br>
            {/each}
        </p>
    {/if}

<style>

    img {
    width: 100%;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    border: 1px black solid;
    border-radius: 20px;
    }

    h1 {
        font-size: 19px;
        font-weight: medium;
    }

    button {
        display: block;
        color: gray;
        background: none;
        border: none;
        margin: 0px;
        padding: 0px;
        margin-top: 0.5em;
    }

    p {
        color: black;
        font-size: 1em;
        margin: 0px;
        padding-left: 0.5em;
    }

    @media only screen and (max-width: 655px) {
        button {
            margin: 0.5em auto 0;
        }
    }
</style>
