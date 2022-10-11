const { EventEmitter } = require("events");

class MyEmitter extends EventEmitter {}

const ins = new MyEmitter();
ins.on("test", () => {
    console.log("emit test event");
});
ins.emit("test");
