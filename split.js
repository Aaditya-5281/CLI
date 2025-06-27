const { Command } = require('commander');
const program = new Command();

program
  .name('string-util')
  .description('CLI to some JavaScript string utilities')
  .version('0.8.0');

program.command('split')
  .description('Split a string into substrings and display as an array')
  .argument('<string>', 'string to split')
  .option('--first', 'display just the first substring')
  .option('-s, --separator <char>', 'separator character', ',')
  .action((str, options) => {
    const limit = options.first ? 1 : undefined;
    console.log(str.split(options.separator, limit));
  });

  program.command('reverse')
  .description('Reverse a string')
  .argument('<string>', 'string to reverse')
  .action((str) => {
    console.log(str.split('').reverse().join(''));
  });

  program.command('path_to_count')
  .description('Count the number of files in a directory')
  .argument('<path>', 'path to count')
  .action((path) => {
    console.log(fs.readdirSync(path).length);
  });

program.parse();