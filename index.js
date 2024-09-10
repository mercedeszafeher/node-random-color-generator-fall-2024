import chalk from 'chalk';
import randomColor from 'randomcolor';

const colorOfBlock = randomColor();

const blockWidth = 31;
const colorText = `${colorOfBlock}`;
const totalPadding = blockWidth - colorText.length - 3;
const leftPadding = Math.floor(totalPadding / 3);
const rightPadding = totalPadding - leftPadding - colorText.length;

const printingRandomColor = ` ###############################\n ###############################\n ###############################\n #####                     #####\n #####${' '.repeat(leftPadding)}${colorText}${' '.repeat(rightPadding)}#####\n #####                     #####\n ###############################\n ###############################\n ###############################`;

console.log(printingRandomColor);
