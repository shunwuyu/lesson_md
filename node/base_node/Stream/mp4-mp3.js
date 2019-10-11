const fs = require('fs')
//const https = require('https')
const http = require('http')
const request = require('request')
const child_process = require('child_process')
const EventEmitter = require('events').EventEmitter

const spawn = child_process.spawn
const mp3Args = ['-i', 'pipe:0', '-f', 'mp3', '-ac', '2', '-ab', '128k', '-acodec', 'libmp3lame', 'pipe:1']
const mp4Args = ['-i', 'pipe:0', '-c', 'copy', '-bsf:a', 'aac_adtstoasc', 'pipe:1']

class VideoTool extends EventEmitter {
  constructor (url, filename) {
    super()
    this.url = url
    this.filename = filename
  }

  mp3 () {
    // 创建 FFMPEG 进程
    // 返回: <ChildProcess>
    this.ffmpeg = spawn('ffmpeg', mp3Args)
    
    // 拿到 Stream 流
    http.get(this.url, (res) => {
      res.pipe(this.ffmpeg.stdin)
    })
    
    // 把拿到的流 pipe 到文件中
    this.ffmpeg.stdout.pipe(fs.createWriteStream(this.filename))
    
    this.ffmpeg.on('exit', () => {
      console.log('Finished:', this.filename)
    })
  }

  mp4 () {
    let stream = fs.createWriteStream(this.filename)
    request
      .get(this.url, {
        headers: {
          'Content-Type': 'video/mpeg4',
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36'
        }
      })
      .pipe(stream)
      .on('open', () => {
        console.log('start download')
      })
      .on('close', () => {
        console.log('download finished')
      })
  }
}

const video = 'http://vt1.doubanio.com/201908212216/ba806a60f61154690891e9e215d44ac2/view/movie/M/402510440.mp4'
const m1 = new VideoTool(video, 'audio.mp3')
const m2 = new VideoTool(video, __dirname + '/video.mp4')

m1.mp3()
m2.mp4()