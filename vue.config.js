const path = require("path");

const vueSrc = "./src";

module.exports = {
  runtimeCompiler: true,
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.join(__dirname, vueSrc),
        "@firebaseToDo": path.join(__dirname, "./src/../firebase.js"),
      },
    },
  },
};
