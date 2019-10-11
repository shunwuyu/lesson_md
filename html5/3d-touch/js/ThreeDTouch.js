const FRAME_WIDTH = 988 / 4,
  FRAME_HEIGHT = 1164 / 6,
  MASK_WIDTH = 146;

class ThreeDTouch {
  constructor(el, callback) {
    this.el = el;
    this.callback = callback;
    this.bindEvents()
  }
  bindEvents () {
    const events = ['touchforcechange', 'touchstart', 'touchend', 'touchcancel'];
    this.el.addEventListener('touchforcechange', this.touchForceDidChange.bind(this), false);
    this.el.addEventListener('touchstart', this.touchDidStart.bind(this), false);
    this.el.addEventListener('touchend', this.touchDidEnd.bind(this), false);
  }
  touchDidStart(ev) {
    let touch = ev.touches[0];
    // console.log(touch);
    this.checkForce(touch)
  }
  touchDidEnd() {
    this.callback(0)
    clearTimeout(this.timeoutId)
  }
  touchForceDidChange(ev) {
    let force = ev.touches[0].force;
    alert(force);
    this.callback(force)
    clearTimeout(this.timeoutId)
  }
  checkForce(touch) {
    // console.log()
    this.callback(touch.force)
    this.timeoutId = setTimeout(this.checkForce.bind(this, touch), 16)
  }
}


let ui = {
  update: function(val) {
    // console.log(val);
    this.force = val
    this.updateForceVal()
    this.scaleBtnMask()
    this.makeSlothLaugh()
  },
  updateForceVal () {
    document.getElementById('force_val').innerHTML = this.force;
  },
  scaleBtnMask () {
    let scale = 1 + Math.ceil(this.force * 100) / MASK_WIDTH;
    document.getElementById('btn_mask').style.webkitTransform = 'scale(' + scale + ')'
  },
  makeSlothLaugh() {
    var frame = Math.max(1, Math.ceil(this.force * 24)),
		    posX = ((frame - 1) % 4) * -FRAME_WIDTH,
        posY = Math.floor((frame - 1) / 4) * -FRAME_HEIGHT;
    

		document.getElementById('sloth').style.backgroundPosition = posX + 'px ' + posY + 'px'
  }
}

