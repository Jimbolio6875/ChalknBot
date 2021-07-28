const chalk = require('chalk');
const log = console.log;

// console.log(chalk.blue('Hello world!'));

const fear = chalk.red.underline.bold('FEAR')

log(chalk.blue('"I must not ') + fear + '.');
log(fear + chalk.blue(' is the mind-killer.'));
log(fear + chalk.blue(' is the little-death that brings total ' + chalk.yellow.bold('obliteration.')));
log(chalk.blue('I will face my ' + fear + '.'))
log(chalk.blue('I will permit it to pass over me and through me.'))
log(chalk.blue('And when it has gone past I will turn the ' + chalk.white.bold('inner eye') + chalk.blue(' to see its path.')))
log(chalk.blue('Where the ' + fear + chalk.blue(' has gone there will be') + chalk.grey(' nothing.')))
log(chalk.blue.bold('Only I will remain."'))

log(chalk.yellow('\n - Frank Herbert, Dune'))