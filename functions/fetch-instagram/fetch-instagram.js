const axios = require('axios')

exports.handler = function instagram(event, context, callback) {
  const endpoint = 'https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url,permalink'
  const token = process.env.INSTAGRAM_ACCESS_TOKEN

  axios
    .get(`${endpoint}&access_token=${token}`)
    .then(({ data: { data: posts } }) => {
      callback(null, {
        statusCode: 200,
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(
          posts.map(i => ({
            id: i.id,
            media_type: i.media_type,
            media_url: i.media_url,
            thumbnail_url: i.thumbnail_url,
            permalink: i.permalink,
          })),
        ),
      }
 )
    })
    .catch((e) => {
      callback(e)
    })
}
