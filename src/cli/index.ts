import {
  DEFAULT_APP_NAME,
  INTRO_MESSAGE,
  JS,
  NONE,
  PEEL_ONION_NAME,
  REACT,
  TAIL_WIND_CSS,
  TS,
  UNO_CSS,
  VUE,
} from '@/const.ts';
import { Command } from 'commander';
import getVersion from '@/util/getVersion.ts';
import * as prompts from '@clack/prompts';
import chalk from 'chalk';

type ProjectInfo = {
  appName: string;
  language: string;
  style: string;
  framework: string;
  hasBackend: boolean;
};

export default async function cli() {
  const version = getVersion();

  const result: ProjectInfo = {
    appName: '',
    language: '',
    style: '',
    framework: '',
    hasBackend: false,
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

  if (!appName) {
    const intro_message = chalk.whiteBright.bgBlue.bold(INTRO_MESSAGE);
    prompts.intro(intro_message);

    const project_info: ProjectInfo = await prompts.group({
      appName: () =>
        prompts.text({
          message: 'What will your project be called?',
          defaultValue: DEFAULT_APP_NAME,
          placeholder: DEFAULT_APP_NAME,
        }),
      language: () => {
        return prompts.select({
          message: 'Will you be using TypeScript or JavaScript?',
          options: [
            { value: TS, label: 'TypeScript' },
            { value: JS, label: 'JavaScript' },
          ],
          initialValue: TS,
        });
      },
      style: () => {
        return prompts.select({
          message: 'Will you be using UnoCSS or TailwindCSS?',
          options: [
            { value: NONE, label: 'None' },
            { value: UNO_CSS, label: 'UnoCSS' },
            { value: TAIL_WIND_CSS, label: 'TailwindCSS' },
          ],
          initialValue: NONE,
        });
      },
      framework: () => {
        return prompts.select({
          message: 'Will you be using Vue or React?',
          options: [
            { value: VUE, label: 'Vue' },
            { value: REACT, label: 'React' },
          ],
          initialValue: VUE,
        });
      },
      hasBackend: () => {
        return prompts.confirm({
          message: 'Will you be using a backend (we use NestJS by default)?',
          initialValue: false,
        });
      },
    });
    result.appName = project_info.appName;
    result.language = project_info.language;
    result.style = project_info.style;
    result.framework = project_info.framework;
    result.hasBackend = project_info.hasBackend;
  }

  return result;
}
