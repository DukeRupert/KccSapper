<script>
    import Icon from 'svelte-awesome';
    import { bars } from 'svelte-awesome/icons';
</script>


<li>
    <a href='#'><Icon data={bars} scale='2'/></a>
</li>


<style>

    li {
        display: flex;
        align-items: center;
        font-weight: bold;
        font-size: 17px;
    }

    a {
        margin-right: 20px;
        margin-left: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: filter 300ms;
    }
    
</style>