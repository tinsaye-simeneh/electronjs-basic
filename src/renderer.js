import "./index.css";

console.log(
  '👋 This message is being logged by "renderer.js", included via webpack'
);

const information = document.getElementById("info");
information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`;
