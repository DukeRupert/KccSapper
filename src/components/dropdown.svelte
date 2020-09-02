<script>
    import Icon from 'svelte-awesome/components/Icon.svelte';
    import { bars } from 'svelte-awesome/icons';
    import DropdownItem from './dropdownItem.svelte';
    import { dropdownOpen } from '../store';
    import { slide } from 'svelte/transition';
    import { quadOut } from 'svelte/easing';

    export let segment;
    
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
        /* border-top: 1px black solid; */
        box-shadow: rgba(60, 60, 59, 0.75) 0 10px 12px -10px inset;

        background-color: var(--nav-dropdown-background);
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
        <div transition:slide="{{duration: 500, easing: quadOut }}">
            <DropdownItem title='MENU' route='menu' onClick={toggle} {segment} />
            <DropdownItem title='LOCATIONS' route='locations' onClick={toggle} {segment} />
            <DropdownItem title='ABOUT US' route='about' onClick={toggle} {segment} />
            <DropdownItem title='ORDER ONLINE' route='https://ordering.chownow.com/order/15130/locations?add_cn_ordering_class=true' onClick={toggle} {segment} />
        </div>
    </li>
{/if}