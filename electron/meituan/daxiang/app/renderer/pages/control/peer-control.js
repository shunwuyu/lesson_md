const EventEmitter = require('events');
const peer = new EventEmitter()
const { desktopCapturer } = require('electron')
console.log(desktopCapturer, '-----------');
// 做很多有趣的事情
async function getScreenStream() {
    const sources = await desktopCapturer.getSources({types: ['screen']})
    navigator.webkitGetUserMedia({ // node-webkit
        audio: false,
        video: {
            mandatory: {
                chromeMediaSource: 'desktop',
                chromeMediaSourceId: sources[0].id,
                maxWidth: window.screen.width,
                maxHeight: window.screen.height
            }
        }
    }, (stream) => {
        peer.emit('add-stream', stream)
    }, (err) => {
        console.log(err)
    })
}

getScreenStream();

module.exports = peer