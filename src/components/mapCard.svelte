<script>
    export let link='';
    export let image='';
    export let alt='';
    export let title='';
    export let address='';
    export let phone='';
    export let hours='';

    let phoneNumber = 'tel:' + phone;
</script>

<a href={link}><img src={image} alt={alt}></a>
<h1>{title}</h1>
<a href={link}><p>{@html address}</p></a>
<a id='phone' href={phoneNumber}><p>{phone}</p></a>
<p>{hours}</p>

<style>
    img {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    }

    h1 {
        font-size: 19px;
        font-weight: medium;
        letter-spacing: 1px;
    }

    p {
		width: 100%;
		font-size: 17px;
	}
</style>
