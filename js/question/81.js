// 用面向对象的JavaScript代码介绍一下自己

function Person(name, job, site) {
  this.name = name;
  this.job = job;
  this.site = site;
 }
 Person.prototype = {
  getName: function() {
   console.log('my name'+this.name);
  },
  getJob: function() {
   console.log('my job'+ this.job);
  },
  getWork: function() {
   console.log('my work' + this.site);
  }
 }
 
var da = new Person('dada', 'it', 'shenzheng');
da.getName();
da.getJob();
da.getWork();