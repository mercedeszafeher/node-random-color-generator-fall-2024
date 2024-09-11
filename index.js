import chalk from 'chalk';
import randomColor from 'randomcolor';

const args = process.argv.slice(2);

let hue;
let luminosity;

if (args.length === 2) {
  hue = args[0];
  luminosity = args[1];
} else if (args.length === 1) {
  if (['light', 'dark', 'bright'].includes(args[0].toLowerCase())) {
    luminosity = args[0];
  } else {
    hue = args[0];
  }
}

let colorOfBlock;

if (hue && luminosity) {
  colorOfBlock = randomColor({
    hue: hue,
    luminosity: luminosity,
  });
} else if (hue) {
  colorOfBlock = randomColor({
    hue: hue,
  });
} else if (luminosity) {
  colorOfBlock = randomColor({
    luminosity: luminosity,
  });
} else {
  colorOfBlock = randomColor();
}

const blockWidth = 31;
const totalPadding = blockWidth - colorOfBlock.length - 3;
const leftPadding = Math.floor(totalPadding / 3);
const rightPadding = totalPadding - leftPadding - colorOfBlock.length;

const printingRandomColor = ` ###############################\n ###############################\n ###############################\n #####                     #####\n #####${' '.repeat(leftPadding)}${colorOfBlock}${' '.repeat(rightPadding)}#####\n #####                     #####\n ###############################\n ###############################\n ###############################`;

console.log(chalk.hex(colorOfBlock)(printingRandomColor));
