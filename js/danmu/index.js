let data = [
  { value: '周杰伦的听妈妈的话，让我反复循环再循环', time: 5, color: 'red', speed: 1, fontSize: 22 },
  { value: '想快快长大，才能保护她', time: 10, color: '#00a1f5', speed: 1, fontSize: 30 },
  { value: '听妈妈的话吧，晚点再恋爱吧！爱呢？', time: 15 },
];

let doc = document;
let canvas = doc.getElementById('canvas');
let video = doc.getElementById('video');
let $txt = doc.getElementById('text');
let $btn = doc.getElementById('btn');
let $color = doc.getElementById('color');
let $range = doc.getElementById('range');

class Barrage {
  constructor(obj, ctx) {
      this.value = obj.value;
      this.time = obj.time;
      this.obj = obj;
      this.context = ctx;
  }
  
}