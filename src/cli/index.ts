import { PEEL_ONION_NAME } from '@/const.ts';
import { Command } from 'commander';
import getVersion from '@/util/getVersion.ts';

export default function cli() {
  const version = getVersion();

  const result: { appName: string } = {
    appName: '',
  };

  const program = new Command()
    .name(PEEL_ONION_NAME)
    .description('A CLI for creating web applications with onion')
    .argument(
      '[dir]',
      'The name of the application, as well as the name of the directory to create'
    )
    .version(version, '-v, --version', 'output the version number')
    .parse();

  const appName = program.args[0];
  result.appName = appName || '';

  return result;
}
