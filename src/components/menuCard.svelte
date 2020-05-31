<script>
    import { slide } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';

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

<img {src} alt={alt}>
<h1>{title}</h1>
<button on:click={toggleIngredients}>INGREDIENTS <Fa class= 'icon' icon={iStatus ? faCaretUp : faCaretDown} primaryColor="darkgrey" /></button>
    {#if ingredientsToggle }
        <div transition:slide="{{delay: 250, duration: 300, easing: quintOut }}">
            <p >Ingredient #1</p>
            <p >Ingredient #2</p>
            <p >Ingredient #3</p>
        </div>
    {/if}
<button on:click={toggleNutrition}>NUTRITIONAL INFO <Fa class= 'icon' icon={nStatus ? faCaretUp : faCaretDown} primaryColor="darkgrey" /></button>
    {#if nutritionToggle }
        <div transition:slide>
            <p>Nutrition #1</p>
            <p>Nutrition #2</p>
            <p>Nutrition #3</p>
        </div>
    {/if}
<button on:click={toggleAllergens}>ALLERGENS <Fa class= 'icon' icon={aStatus ? faCaretUp : faCaretDown} primaryColor="darkgrey" /></button>
    {#if allergensToggle }
        <div transition:slide>
            <p>Allergen #1</p>
            <p>Allergen #2</p>
            <p>Allergen #3</p>
        </div>
    {/if}


<style>
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
</style>
