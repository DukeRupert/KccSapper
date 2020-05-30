<script>
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
        <p>Ingredient #1</p>
        <p>Ingredient #2</p>
        <p>Ingredient #3</p>
    {/if}
<button on:click={toggleNutrition}>NUTRITIONAL INFO <Fa class= 'icon' icon={nStatus ? faCaretUp : faCaretDown} primaryColor="darkgrey" />
    {#if nutritionToggle }
        <p>Nutrition #1</p>
        <p>Nutrition #2</p>
        <p>Nutrition #3</p>
    {/if}
</button>
<button on:click={toggleAllergens}>ALLERGENS <Fa class= 'icon' icon={aStatus ? faCaretUp : faCaretDown} primaryColor="darkgrey" />
    {#if allergensToggle }
        <p>Allergen #1</p>
        <p>Allergen #2</p>
        <p>Allergen #3</p>
    {/if}
</button>


<style>
    img {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    }

    h1 {
        font-weight: normal;
        letter-spacing: 1px;
    }

    button {
        color: gray;
        background: none;
        border: none;
    }
</style>
