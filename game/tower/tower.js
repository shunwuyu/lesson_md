const requestAnimationFrameTool = ((() => {
  const FPS = 60
  let timeout = 1000 / FPS
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    ((callBack) => {
      window.setTimeout(() => {
        const start = getCurrentTime()
        callBack(start)
        const end = getCurrentTime()
        timeout = (1000 / FPS) - (end - start)
      }, timeout)
    })
}))()
class Instance {
  constructor(option = {}) {
    const { name, painter, action, trigger } = option
    this.name = name
    this.x = 0
    this.y = 0
    this.width = 0
    this.height = 0
    this.ax = 0
    this.ay = 0
    this.vx = 0
    this.vy = 0
    this.visible = true
    this.painter = painter || null
    this.action = action || null
    this.trigger = trigger || null
    this.ready = false
  }

  paint(engine) {
    if (this.painter !== null && this.visible) {
      this.painter(this, engine)
    }
  }

  update(engine, time) {
    if (this.action !== null) {
      this.action(this, engine, time)
    }
  }

  updateWidth(width) {
    this.width = width
    this.calWidth = width / 2
  }

  updateHeight(height) {
    this.height = height
    this.calHeight = height / 2
  }
}

class Engine {
  constructor(option = {}) {
    this.assetsCount = {
      image: 0,
      audio: 0
    }
    this.assetsObj = {
      image: {},
      audio: {}
    }
    this.instancesObj = {}
    this.instancesObj[this.defaultLayer] = []
  }
  load(onload, loading) {
    // onload();
    // loading({
    //   success: 3,
    //   failed: 0,
    //   total: 9
    // })
    const id = setInterval(() => {
      const assetsTotalCount = this.assetsCount.image + this.assetsCount.audio
      const assetsLoadedCount = Object.keys(this.assetsObj.image).length + Object.keys(this.assetsObj.audio).length
      if (loading) {
        loading({
          success: assetsLoadedCount,
          failed: this.assetsErrorCount,
          total: assetsTotalCount
        })
      }
      if (assetsLoadedCount === assetsTotalCount) {
        if (onload) {
          onload()
        } else {
          // this.init()
        }
        clearInterval(id)
      }
    }, 200)

  }
  addImg(name, src, retry = 0) {
    if (!retry) this.assetsCount.image += 1;
    const i = new window.Image();
    i.src = src
    i.onload = () => {
      this.assetsObj.image[name] = i
    }
    i.onerror = () => {
      this.assetsErrorQueue.push({
        name,
        src,
        retry: retry + 1,
        type: 'image'
      })
    }
  }
  addAudio(name, src, retry = 0) {
    if (!retry) this.assetsCount.audio += 1
    const a = new window.Audio()
    a.src = src
    this.assetsObj.audio[name] = a
    a.load()
  }
  playAudio(name, loop = false) {
    const audio = this.getAudio(name)
    if (audio) {
      audio.play();
      if (!loop) return
      // audio.setAttribute('muted', true);
      audio.addEventListener('ended', () => {
        audio.currentTime = 0
        audio.play()
      }, false)
    }
  }
  getAudio(name) {
    return this.assetsObj.audio[name]
  }
  init() {
    const self = this
    // alert('fdff');
    requestAnimationFrameTool((time) => {
      this.animate.call(self, time)
    })
  }

  paintInstances() {
    this.layerArr.forEach((l) => {
      this.instancesObj[l].forEach((i) => {
        i.paint && i.paint(this)
      })
    })
  }
  
  animate() {
    this.paintInstances()
  }
  addInstance(instance, layer = this.defaultLayer) {
    this.instancesObj[layer].push(instance)
    if (instance.trigger) this.instancesReactionArr.push(instance)
  }
  setTimeMovement(name, duration) {
    const currentTime = this.utils.getCurrentTime()
    this.timeMovement[name] = {
      startTime: currentTime,
      endTime: currentTime + duration,
      duration,
      store: {}
    }
  }
}

function TowerGame(option) {
  const {
    width,
    height,
    canvasId,
  } = option
  const game = new Engine({
    canvasId,
    highResolution: true,
    width,
    height
  })
  const pathGenerator = (path) => `./assets/${path}`
  game.addImg('background', pathGenerator('background.png'))
  game.addImg('blockRope', pathGenerator('block-rope.png'))
  game.addImg('block', pathGenerator('block.png'))
  game.addImg('block-perfect', pathGenerator('block-perfect.png'))
  for (let i = 1; i <= 8; i += 1) {
    game.addImg(`c${i}`, pathGenerator(`c${i}.png`))
  }
  game.addAudio('bgm', pathGenerator('bgm.mp3'))

  game.playBgm = () => {
    game.playAudio('bgm', true)
  }
  game.start = () => {
    const tutorialArrow = new Instance({
      name: 'tutorial-arrow',
      action: tutorialAction,
      painter: tutorialPainter
    })
    game.addInstance(tutorialArrow)
    game.setTimeMovement(constant.tutorialMovement, 500)
  }
  return game;
}