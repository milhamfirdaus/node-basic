const fs = require("fs");
const { resolve } = require("path");

const readStream = fs.createReadStream(resolve(__dirname, "input.txt"), {
  highWaterMark: 15,
});
const writeStream = fs.createWriteStream(resolve(__dirname, "output.txt"));

const stream = () => {
  readStream.on("readable", () => {
    try {
      writeStream.write(`${readStream.read()}\n`);
    } catch (err) {
      console.log(err.message);
    }
  });

  readStream.on("end", () => {
    writeStream.end();
  });
};

module.exports = stream;
