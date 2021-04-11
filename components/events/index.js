const { EventEmitter } = require("events");

const myEventEmitter = new EventEmitter();

const birthdayEventListener = (name) => {
  console.log(`Happy birthday ${name}!`);
};

const myEmitter = (name) => {
  birthdayEventListener(name);
};

myEventEmitter.on("birthday", myEmitter);
myEventEmitter.emit("birthday", "Ilham");
module.exports = { myEventEmitter };
