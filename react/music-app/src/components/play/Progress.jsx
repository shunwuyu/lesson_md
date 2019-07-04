import React from "react"
import PropTypes from "prop-types"
import ReactDOM from 'react-dom';
import "./progress.styl"

class Progress extends React.Component {
  componentDidUpdate() {

  }
  componentDidMount() {
    let progressBarDOM = ReactDOM.findDOMNode(this.refs.progressBar);
    let progressDOM = ReactDOM.findDOMNode(this.refs.progress);
    let progressBtnDOM = ReactDOM.findDOMNode(this.refs.progressBtn);
    this.progressBarWidth = progressBarDOM.offsetWidth;
    let { disableButton, disableDrag, onDragStart, onDrag, onDragEnd } = this.props;
    if (disableButton !== true && disableDrag !== true) {
      //触摸开始位置
      let downX = 0;
      //按钮left值
      let buttonLeft = 0;

      progressBtnDOM.addEventListener("touchstart", (e) => {
        let touch = e.touches[0];
        downX = touch.clientX;
        buttonLeft = parseInt(touch.target.style.left, 10);

        if (onDragStart) {
          onDragStart();
        }
      });
      progressBtnDOM.addEventListener("touchmove", (e) => {
        e.preventDefault();

        let touch = e.touches[0];
        let diffX = touch.clientX - downX;

        let btnLeft = buttonLeft + diffX;
        if (btnLeft > progressBarDOM.offsetWidth) {
          btnLeft = progressBarDOM.offsetWidth;
        } else if (btnLeft < 0) {
          btnLeft = 0;
        }
        //设置按钮left值
        touch.target.style.left = btnLeft + "px";
        //设置进度width值
        progressDOM.style.width = btnLeft / this.progressBarWidth * 100 + "%";

        if (onDrag) {
          onDrag(btnLeft / this.progressBarWidth);
        }
      });
      progressBtnDOM.addEventListener("touchend", (e) => {
        if (onDragEnd) {
          onDragEnd();
        }
      });
    }
    //组件更新后重新获取进度条总宽度
    if (!this.progressBarWidth) {
      this.progressBarWidth = ReactDOM.findDOMNode(this.refs.progressBar).offsetWidth;
    }
  }
  render() {
    // 上诉代码中progress用来控制当前走过的进度值，progressButtonOffsetLeft用来控制按钮距离进度条开始的位置。
    // 当disableButton为true时渲染一个空字符串，不为true则渲染按钮元素
    //进度值：范围 0-1
    let { progress, disableButton } = this.props;
    if (!progress) progress = 0;

    //按钮left值
    let progressButtonOffsetLeft = 0;
    if (this.progressBarWidth) {
      progressButtonOffsetLeft = progress * this.progressBarWidth;
    }

    return (
      <div className="progress-bar" ref="progressBar">
        <div className="progress-load"></div>
        <div className="progress" style={{ width: `${progress * 100}%` }} ref="progress"></div>
        {
          disableButton === true ? "" :
            <div className="progress-button" style={{ left: progressButtonOffsetLeft }} ref="progressBtn"></div>
        }
      </div>
    );
  }
}
Progress.propTypes = {
  progress: PropTypes.number.isRequired,
  disableButton: PropTypes.bool,
  disableDrag: PropTypes.bool,
  onDragStart: PropTypes.func,
  onDrag: PropTypes.func,
  onDragEnd: PropTypes.func
};

export default Progress
