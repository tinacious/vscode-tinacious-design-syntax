const prefix = 'source.json'
const structure = 'meta.structure.dictionary.json';
const value = 'meta.structure.dictionary.value.json';
const suffix = 'support.type.property-name.json';

const colours = [
  // Tileable Rainbow starting at blue
  "#00CECA", // turquoise/blue
  "#00BFFF", // blue
  "#8590EC", // indigo
  "#FE3698", // pink
  "#FF7086", // orangey pink
  "#ffb070", // orange
  "#FCCC66", // yellow
  "#BBCE65", // yellowy green
  "#59D065", // green
];

// Supporting 4 rainbows. If you need more than that, I'm sorry on so many levels. 🙃
const supportedColours = (
  [].concat(colours)
    .concat(colours)
    .concat(colours)
    .concat(colours)
);


const buildScope = (level) => {
  let repeated = [];

  for (let i = 0; i <= level; i++) {
    if (i === 0) {
      repeated = repeated.concat([structure]);
    } else {
      repeated = repeated.concat([value, structure]);
    }
  }

  return [prefix].concat(repeated).concat(suffix).join(' ');
};

const results = supportedColours.map((colour, i) => ({
  name: `JSON Key - Level ${i}`,
  scope: [buildScope(i)],
  settings: {
    foreground: colour
  }
}));

console.log("\n\n\n" + JSON.stringify(results, null, 2) + "\n\n\n");
