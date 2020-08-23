// index.js

module.exports = {
    onPreBuild: ({inputs}) => {
      console.log('Hello world from onPreBuild event!')
      console.log(inputs.instagramKey) // site specific key
    },
  }
  