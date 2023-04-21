const basePath = process.cwd();
const fs = require('fs');
const path = require('path');
const { NETWORK } = require(`${basePath}/constants/network.js`);

const settings = JSON.parse(fs.readFileSync(`${basePath}/settings.json`));

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = settings.collectionName;
const description = settings.description;
const baseUri = settings.ipfsURI;

const layersOrder = fs
  .readdirSync(path.join(basePath, 'layers'))
  .filter(folder => folder[0] !== '.')
  .sort((a, b) => Number(a[0]) - Number(b[0]))
  .map(name => ({ name }));

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: settings.size,
    layersOrder,
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = settings.imageFormat;

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  gif,
  preview_gif,
};
