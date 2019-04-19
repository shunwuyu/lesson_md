;(function(root) {
  const doc = document;
  const addEventListener = root.addEventListener;
  const removeEventListener = root.removeEventListener;
  const tools = {
    // 节点创建
    createEle: function(className, tag) {
      tag = tag || 'div';
      const node = doc.createElement(tag);
      node.className = className;
      return node;
    },
    // 批量节点添加
    append: function(node, child) {
      if (!node) return;
      child = Array.isArray(child) ? child : (child ? [child] : []);
      child.forEach(item => {
        item && item.nodeType ? node.appendChild(item) : null;
      });
    },
    // 事件绑定
    on: function(target, events) {
      if (!target || !events || !Object.keys(events)) return;
      /**
       * events: {
       *  click: function() {}, 
       *  dbClick: function() {}
       * }
       *  */ 
      Object.keys(events).forEach(function(ev) {
        target.addEventListener(ev, function(event) {
          // console.log(this);
          // 这里的 this 就是 target
          events[ev].call(this, event);
        });
      });
    },
    // time 秒数
    formatTime: function(time) {
      let formatTime = null,
          secs = 0,
          mins = 0,
          hours = 0,
          displayHours,
          seperator = ':';

      secs = parseInt(time % 60);
      mins = parseInt((time / 60) % 60);
      hours = parseInt(((time / 60) / 60) % 60);
      displayHours = (parseInt(((time / 60) / 60) % 60) > 0) 
      secs = ("0" + secs).slice(-2);
      mins = ("0" + mins).slice(-2);
      return (displayHours ? hours + ':' : '') + mins + seperator + secs;
    }
  };

  /**
   * audio: audio element
   * srcs：歌曲列表
   * controller: 控制区域对象
   * volume: 声音对象
   * isPlaying: 播放状态
   * currentIndex: 当前src源的下标
   * meta: 视频元数据
   */
  const Audio = function() {
    this.audio = null;
    this.srcs = ['./file/unravel.mp3', './file/远走高飞.mp3'];
    this.controller = null;
    this.progress = null;
    this.volume = null;
    this.isPlaying = false;
    this.currentIndex = 0;
    this.meta = {
      currentTime: 0,
      duration: 0
    };
    this.init();
  };

  Audio.prototype = {
    // 构建视图 + 事件绑定
    init: function() {
      this.audio = this.createAudio();
      this.controller = new Controller(this);
      this.progress = new Progress(this);
      this.volume = new Volume(this);
      const container = doc.querySelector('.audio');
      tools.append(container, [
        this.controller.controllerArea,
        this.progress.progressDOM,
        this.volume.volumeArea
      ]);
      this.onEvents();
    },
    // 创建audio对象
    createAudio: function() {
      // className tag
      const audio = tools.createEle('audio-player', 'audio');
      audio.src = this.srcs[this.currentIndex];
      audio.preload = 'auto';
      return audio;
    },
    // 处理事件绑定
    onEvents: function() {
      const that = this;
      const { formatTime } = tools;
      tools.on(this.audio, {
        // 元数据导入事件
        'loadedmetadata': function() {
          // this 就是 this.audio
          // that Audio 对象里面的 this
          that.meta.duration = this.duration;
          console.log('loadedmetadata', that.meta);
          that.progress.changeEndTime(formatTime(this.duration));
        },
        // 播放过程时间改变事件
        'timeupdate': function() {
          console.log('timeupdate');
          const meta = that.meta;
          meta.currentTime = this.currentTime;
          // console.log(this.currentTime);
          that.progress.changeCurrentTime(formatTime(this.currentTime));
          // 计算当前时间占总时间的百分比，以此计算对应的位置
          const percent = (this.currentTime / meta.duration).toFixed(6) * 100;
          that.progress.setCurrentProgress(percent);
        },
        // 播放结束事件
        'ended': function() {
          that.next();
        }
      });
    },
    changeCurrentSrc: function() {
      const audio = this.audio;
      audio.src = this.srcs[this.currentIndex];
      audio.load();
    },
    play: function() {
      this.audio.play();
      this.isPlaying = true;
    },
    pause: function() {
      this.audio.pause();
      this.isPlaying = false;
    },
    // 不考虑随机播放
    prev: function() {
      const targetIndex = this.currentIndex - 1;
      this.currentIndex = targetIndex < 0 ? this.srcs.length - 1 : targetIndex;
      this.changeCurrentSrc();
      this.play();
    },
    next: function() {
      const targetIndex = this.currentIndex + 1;
      this.currentIndex = targetIndex > this.srcs.length - 1 ? 0 : targetIndex
      this.changeCurrentSrc();
      this.play();
    },
    setCurrentTime: function(percent) {
      percent = percent || 0;
      this.audio.currentTime = this.meta.duration * percent;
    },
    setCurrentVolume: function(volume) {
      // 1.0 是最高音量（默认）
      // 0.5 是一半音量 （50%）
      // 0.0 是静音
      this.audio.volume = volume || 0;
    }
  };

  /**
   * 控制区域对象
   */
  const Controller = function($parent) {
    this.$parent = $parent;
    this.controllerArea = null;
    this.prevIcon = null;
    this.stateIcon = null;
    this.nextIcon = null;
    this.isPlaying = false;
    this.init();
  };

  Controller.prototype = {
    init: function() {
      const { createEle, append } = tools;
      const container = createEle('audio-controller');
      this.prevIcon = createEle('fa fa-step-backward icon__back', 'i');
      this.stateIcon = createEle('fa fa-play icon__state', 'i');
      this.nextIcon = createEle('fa fa-step-forward icon__next', 'i');
      append(container, [this.prevIcon, this.stateIcon, this.nextIcon]);
      // 所有 controllerArea 的容器
      this.controllerArea = container;
      this.onEvents();
    },
    // 播放暂停的 icon 控制
    changeStateIcon: function() {
      const { isPlaying, stateIcon } = this;
      const currentClass = isPlaying ? 'fa-pause' : 'fa-play';
      const targetClass = !isPlaying ? 'fa-pause' : 'fa-play';
      stateIcon.className = stateIcon.className.replace(currentClass, targetClass);
    },
    // 播放状态 切换
    changeState: function() {
      this.isPlaying = !this.isPlaying;
    },
    // 绑定事件
    onEvents: function() {
      const that = this;
      const { on } = tools;
      // 上一首
      on(this.prevIcon, {
        'click': function() {
          that.$parent.prev();
        }
      });
      // 下一首
      on(this.nextIcon, {
        'click': function() {
          that.$parent.next();
        }
      });
      // 播放、暂停功能实现
      on(this.stateIcon, {
        'click': function() {
          that.changeStateIcon();
          that.isPlaying ? that.$parent.pause() : that.$parent.play();
          that.changeState();
        }
      })
    }
  };

  /**
   * 滑动条对象
   * @param {*} $parent 
   * @param {*} isBuffer 区分声音控制还是进度控制
   * @param {*} currentPosition 滑块当前位置
   */
  const Slider = function($parent, isBuffer, currentPosition) {
    this.$parent = $parent;
    this.sliderBox = null;
    this.progressBox = null;
    this.thumbBox = null;
    this.isBuffer = isBuffer || false;
    this.isDragging = false;
    this.startX = 0;
    // 当前开始位置 处理第二次 拖动
    this.startPosition = currentPosition || 0;
    // 当前 百分比
    this.currentPosition = currentPosition || 0;
    this.currentValue = 0;
    this.init();
  };

  Slider.prototype = {
    init: function() {
      const { createEle, append } = tools;
      const sliderBox = createEle('slider');
      // 红色进度条区域
      const sliderProgress = createEle('slider-progress');
      // 拇指滑动区域
      const runway = createEle('slider-runway');
      // 拇指
      append(runway, createEle('thumb'));
      append(sliderBox, [sliderProgress, runway]);
      if (this.isBuffer) {
        append(sliderProgress, createEle('progress-buffer'));
      }
      // 整个进度条区域
      this.sliderBox = sliderBox;
      // 红色进度条区域
      this.progressBox = sliderProgress;
      // 拇指滑动区域
      this.thumbBox = runway;
      if (this.currentPosition) {
        this.updateView();
      }
      this.onEvents();
    },
    onEvents: function() {
      const that = this;
      const { thumbBox, sliderBox } = this;
      const { on } = tools;
      on(thumbBox, {
        // 滑动功能的实现依赖：mousedown、mousemove、mouseup事件
        'mousedown': function(event) {
          event.stopPropagation();
          that.dragStart(event);
          addEventListener('mousemove', function(e) {
            that.dragging(e);
          });
          addEventListener('mouseup', function() {
            that.dragEnd();
          });
        }
      });
      on(sliderBox, {
        'click': function(event) {
          const contentBox = this.getBoundingClientRect();
          const percent = (event.clientX - contentBox.left) / contentBox.width * 100;
          that.currentPosition = Math.max(0, Math.min(percent, 100));
          that.updateView();
          that.changeAudioAbort();
        }
      });
    },
    // 根据点击位置计算对应时间或音量
    changeAudioAbort: function() {
      // 百分比 -> 小数
      let percent = this.currentPosition * 0.01;
      // 这个进度条 要干的就是两件事 1 改变 audio 播放到哪里
      // 2 改变音量
      if (this.isBuffer) {
        // Progress 那一层的函数
        this.$parent.changeAudioCurrTime(percent);
      } else {
        const volume = Math.max(0, Math.min(percent.toFixed(1), 1));
        // // Progress 那一层的函数
        this.$parent.setCurrentVolume(volume);
      }
    },
    // 更新视图
    updateView: function() {
      const { thumbBox, progressBox } = this;
      const currentPosition = this.currentPosition;
      this.currentValue = Math.floor(currentPosition);
      thumbBox.style.left = currentPosition + '%';
      progressBox.style.width = currentPosition + '%';
    },
    changeCurrentPosition: function(position) {
      if (this.isDragging) return;
      this.currentPosition = position || 0;
      this.updateView();
    },
    setPosition: function(clientX) {
      const { sliderBox, thumbBox } = this;
      const contentWidth = sliderBox.offsetWidth;
      // 计算当前拖动位置与初始拖动位置的距离
      const diff = clientX - this.startX;
      // 计算差距占精度条的百分比
      const percent = (diff / contentWidth).toFixed(6) * 100;
      this.currentPosition = Math.max(0, Math.min(
        this.startPosition + percent, 100));
      this.updateView();
    },
    dragStart: function(event) {
      this.isDragging = true;
      // 记录开始滑动时clientX
      this.startX = event.clientX;
      // 记录当前位置为开始值
      this.startPosition = this.currentPosition;
    },
    dragging: function(event) {
      if (!this.isDragging) return;
      this.setPosition(event.clientX);
      // 进度在拖动过程中不改变当前播放进度
      // 音量设置立即改变
      if (!this.isBuffer) {
        this.changeAudioAbort();
      }
    },
    dragEnd: function() {
      // 拖完之后 开始用当前坐标计算 音乐播放位置
      this.changeAudioAbort();
      this.isDragging = false;
      removeEventListener('mousemove', this.dragging);
      removeEventListener('mouseup', this.dragEnd);
    }
  };


  const Progress = function($parent) {
    this.$parent = $parent;
    this.slider = new Slider(this, true);
    this.progressDOM = null;
    this.curTimeDOM = null;
    this.endTimeDOM = null;
    this.currentTime = '00:00';
    this.endTime = '00:00';
    this.init();
  };

  Progress.prototype = {
    init: function() {
      const { createEle, append } = tools;
      // 当前时间
      const curTimeDOM = createEle('time__current', 'span');
      // 结束时间
      const endTimeDOM = createEle('time__end', 'span');
      const progress = createEle('audio-progress');
      const sliderContainer = createEle('slider-container');
      // this.slider.sliderBox 获取到 slider 容器
      append(sliderContainer, this.slider.sliderBox);
      append(progress, [
        curTimeDOM,
        sliderContainer,
        endTimeDOM
      ]);
      this.curTimeDOM = curTimeDOM;
      this.endTimeDOM = endTimeDOM;
      this.setCurrentTimeText();
      this.setEndTimeText();
      // 整个进度容器
      this.progressDOM = progress;
    },
    // ------  开始时间 结束时间 区域的操作
    changeCurrentTime: function(currentTime) {
      this.currentTime = currentTime;
      this.setCurrentTimeText();
    },
    changeEndTime: function(endTime) {
      this.endTime = endTime;
      this.setEndTimeText();
    },
    setCurrentTimeText: function() {
      this.curTimeDOM.innerText = this.currentTime;
    },
    setEndTimeText: function() {
      this.endTimeDOM.innerText = this.endTime;
    },
    // -------
    setCurrentProgress: function(percent) {
      this.slider.changeCurrentPosition(percent);
    },
    // Slide 调用的函数
    changeAudioCurrTime: function(percent) {
      // audio
      this.$parent.setCurrentTime(percent);
    }
  };

  const Volume = function($parent) {
    this.$parent = $parent;
    // 一半
    this.currentValue = 0.5;
    this.max = 1;
    this.min = 0;
    this.volumeArea = null;
    this.slider = new Slider(this, false, this.currentValue * 100);
    this.init();
  };

  Volume.prototype = {
    init: function() {
      const { createEle, append } = tools;
      const i = createEle('fa fa-volume-up icon__volume', 'i');
      const box = createEle('audio-volume');
      append(box, [i, this.slider.sliderBox]);
      this.volumeArea = box;
    },
    // Slider 调用的函数
    setCurrentVolume: function(volume) {
      this.currentValue = volume;
      this.$parent.setCurrentVolume(volume);
    }
  };

  new Audio();

})(window);