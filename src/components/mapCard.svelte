<script>
    export let link='';
    export let image='';
    export let title='';
    export let address='';
    export let phone='';
    export let hours='';
</script>

<a href={link}><img src={image}></a>
<h1>{title}</h1>
<p>{@html address}</p>
<p>{phone}</p>
<p>{hours}</p>

<style>
    img {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    }

    p {
		width: 100%;
		font-size: 17px;
	}
</style>
