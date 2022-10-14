class QPaintView {
  constructor() {
    this.properties = {
        lineWidth: 1,
        lineColor: "black"
    }
    this.controllers = {}
    this._currentKey = ""
    this._current = null
    this.onmousedown = null
    this.onmousemove = null
    this.onmouseup = null
    this.ondblclick = null
    this.onkeydown = null
    let drawing = document.getElementById("drawing")
    let view = this
    drawing.onmousedown = function(event) {
      event.preventDefault()
      if (view.onmousedown != null) {
          view.onmousedown(event)
      }
  }
  drawing.onmousemove = function(event) {
      if (view.onmousemove != null) {
          view.onmousemove(event)
      }
  }
  drawing.onmouseup = function(event) {
      if (view.onmouseup != null) {
          view.onmouseup(event)
      }
  }
  drawing.ondblclick = function(event) {
      event.preventDefault()
      if (view.ondblclick != null) {
          view.ondblclick(event)
      }
  }
  document.onkeydown = function(event) {
      switch (event.keyCode) {
      case 9: case 13: case 27:
          event.preventDefault()
      }
      if (view.onkeydown != null) {
          view.onkeydown(event)
      }
    }
    this.drawing = drawing
    
  }
  getMousePos(event) {
    return {
        x: event.offsetX,
        y: event.offsetY
    }
  }
}

var qview = new QPaintView()
function invalidate(reserved) {
  qview.invalidateRect(null)
}