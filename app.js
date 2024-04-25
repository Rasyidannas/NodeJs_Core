const EventEmitter = require("./events");

class Emitter extends EventEmitter {}

const myE = new Emitter();

//.on() is for register listeners
myE.on("foo", () => {
  console.log("An event occurred 2.");
});

myE.on("foo", () => {
  console.log("An event occurred 1.");
});

myE.on("foo", (x) => {
  console.log("An event with a parameter occured:");
  console.log(x);
});

//once() is for register listeners that will be called only once
myE.once("bar", () => {
  console.log("An event occured bar.");
});

//.emit() is for emitting/trigger events
myE.emit("foo");
myE.emit("foo", "some text");

myE.emit("bar");
myE.emit("bar");
