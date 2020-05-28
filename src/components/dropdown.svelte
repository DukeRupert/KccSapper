<script>
    import Icon from 'svelte-awesome/components/Icon.svelte';
    import { bars } from 'svelte-awesome/icons';
    import DropdownItem from './dropdownItem.svelte'
    import { dropdownOpen } from '../store'

    let dropdownOpen_value = false;

    const unsubscribe = dropdownOpen.subscribe(value => {
		dropdownOpen_value = value;
    });
    
    function toggle() {
        dropdownOpen.update(value => !value);
    }
</script>

<style>

    li {
        display: flex;
        align-items: center;
        margin-left: 20px;
        margin-right: 20px;
        font-size: 17px;
    }

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        padding: 0;
        margin: 0;
        background-color: rgba(1, 1, 1, 0);
        transition: filter 300ms;
    }
    div {
        position: fixed;
        z-index: 100;
        top: var(--nav-size);
        left: 0;
        width:100%;
        height: calc(100% - var(--nav-size));
        background-color: var(--menu-bg);
        overflow: hidden;
    }
    
</style>

{#if dropdownOpen_value}
    <li>
        <button on:click={toggle}><Icon data={bars} scale='2'/></button>
        <div>
            <DropdownItem title='MENU' route='/menu' onClick={toggle}/>
            <DropdownItem title='LOCATIONS' route='/locations' onClick={toggle}/>
            <DropdownItem title='ABOUT US' route='/about' onClick={toggle}/>
            <DropdownItem title='ORDER ONLINE' route='/menu' onClick={toggle}/>
        </div>
    </li>
{:else}
    <li>
        <button on:click={toggle}><Icon data={bars} scale='2'/></button>
    </li>
{/if}