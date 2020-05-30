<script>
    export let link='';
    export let image='';
    export let alt='';
    export let title='';
    export let address='';
    export let phone='';
    export let hours='';
</script>

<a href={link}><img src={image} alt={alt}></a>
<h1>{title}</h1>
<a href={link}><p>{@html address}</p></a>
<p>{phone}</p>
<p>{hours}</p>

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

    p {
		width: 100%;
		font-size: 17px;
	}
</style>
