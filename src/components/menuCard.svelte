<script>
    import { slide, fade } from 'svelte/transition';

    export let src;
    export let alt='';
    export let title='';
    export let ingredients='';
    export let nutrition='';
    export let allergens='';

    let ingredientsToggle = false;
    $: iStatus = ingredientsToggle; // reactive toggle to update caret orientation
    function toggleIngredients() {
        ingredientsToggle = !ingredientsToggle;
    }

    let nutritionToggle = false;
    $: nStatus = nutritionToggle; // reactive toggle to update caret orientation
    function toggleNutrition() {
        nutritionToggle = !nutritionToggle;
    }

    let allergensToggle = false;
    $: aStatus = allergensToggle; // reactive toggle to update caret orientation
    function toggleAllergens() {
        allergensToggle = !allergensToggle;
    }

    import Fa from 'svelte-fa'
    import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'
</script>

<img {src} alt={alt} in:fade>
<h1>{title}</h1>
<button on:click={toggleIngredients}>INGREDIENTS <Fa class= 'icon' icon={iStatus ? faCaretUp : faCaretDown} primaryColor="darkgrey" /></button>
    {#if ingredientsToggle }
        <p transition:slide>Ingredient #1 <br /> Ingredient #2 <br /> Ingredient #3</p>
    {/if}
<button on:click={toggleNutrition}>NUTRITIONAL INFO <Fa class= 'icon' icon={nStatus ? faCaretUp : faCaretDown} primaryColor="darkgrey" /></button>
    {#if nutritionToggle }
        <p transition:slide>Nutrition #1 <br /> Nutrition #2 <br /> Nutrition #3</p>
    {/if}
<button on:click={toggleAllergens}>ALLERGENS <Fa class= 'icon' icon={aStatus ? faCaretUp : faCaretDown} primaryColor="darkgrey" /></button>
    {#if allergensToggle }
        <p transition:slide>Allergen #1 <br /> Allergen #2 <br /> Allergen #3</p>
    {/if}


<style>
    div {
        display: block;
    }

    img {
    width: 100%;
    height: 100%;
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
