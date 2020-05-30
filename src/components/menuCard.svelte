<script>
    export let src;
    export let alt='';
    export let title='';
    export let ingredients='';
    export let nutrition='';
    export let allergens='';

    import Fa from 'svelte-fa'
    import { faCaretUp } from '@fortawesome/free-solid-svg-icons'
</script>

<img {src} alt={alt}>
<h1>{title}</h1>
<button>INGREDIENTS <Fa class= 'icon' icon={faCaretUp} primaryColor="darkgrey" /></button>
<button>NUTRITIONAL INFO <Fa class= 'icon' icon={faCaretUp} primaryColor="darkgrey" /></button>
<button>ALLERGENS <Fa class= 'icon' icon={faCaretUp} primaryColor="darkgrey" /></button>


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

    .icon {
        margin-left: 0.5em;
    }
</style>
