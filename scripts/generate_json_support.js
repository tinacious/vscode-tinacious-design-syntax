const colours = require('./colors.json').colours;

const prefix = 'source.json'
const structure = 'meta.structure.dictionary.json';
const value = 'meta.structure.dictionary.value.json';
const suffix = 'support.type.property-name.json';

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

const results = colours.map((colour, i) => ({
  name: `JSON Key - Level ${i}`,
  scope: [buildScope(i)],
  settings: {
    foreground: colour
  }
}));

console.log("\n\n\n" + JSON.stringify(results, null, 2) + "\n\n\n");
