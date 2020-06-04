<script>
	
    var feed = new Instafeed({
        get: 'tagged',
        tagName: 'awesome',
        clientId: 'YOUR_CLIENT_ID'
    });
    feed.run();

</script>

<style>

	div {
		width: 100%;
		height: 100%;
	}

</style>

<div id="instafeed">
	
</div>