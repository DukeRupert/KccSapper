<script>
    import Icon from 'svelte-awesome/components/Icon.svelte';
    import { bars } from 'svelte-awesome/icons';
    import DropdownItem from './dropdownItem.svelte';
    import { dropdownOpen } from '../store';
    import { slide } from 'svelte/transition';
    import { sineIn } from 'svelte/easing';
    
    //renaming store value to make markup more concise (ie. class:active)
    $: active = $dropdownOpen; 

    //toggle dropdown status on click
    function toggle() {
        dropdownOpen.update(value => !value);
    }

</script>

<style>

    li {
        display: flex;
        align-items: center;
        font-size: 17px;
    }

    div {
        position: fixed;
        overflow: hidden;
        z-index: 99;
        top: 80px;
        left: 0;
        width:100%;
        height: calc(100% - 80px);
        box-sizing: border-box;
        border-top: 1px black solid;
        background-color: white;
    }
    
</style>
    
        <!-- <button on:click={toggle}><Icon data={bars} scale='2'/></button> -->
<button on:click={toggle} class="hamburger hamburger--spin {active ? 'is-active' : ''}" type="button">
<span class="hamburger-box">
    <span class="hamburger-inner"></span>
</span>
</button>  
{#if active}
    <li>
        <div in:slide="{{duration: 500, easing: sineIn }}">
            <DropdownItem title='MENU' route='/menu' onClick={toggle}/>
            <DropdownItem title='LOCATIONS' route='/locations' onClick={toggle}/>
            <DropdownItem title='ABOUT US' route='/about' onClick={toggle}/>
            <DropdownItem title='ORDER ONLINE' route='/menu' onClick={toggle}/>
        </div>
    </li>
{/if}