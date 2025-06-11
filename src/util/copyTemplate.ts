import path from 'path';
import fs from 'fs-extra';
import { fileURLToPath } from 'url';
import { TAIL_WIND_CSS, UNO_CSS } from '@/const.ts';
import chalk from 'chalk';

export default async function copyTemplate(
  projectDir: string,
  {
    language,
    style,
    framework,
    hasBackend,
  }: { language: string; style: string; framework: string; hasBackend: boolean }
) {
  // TODO language and style
  const filename = fileURLToPath(import.meta.url);
  const dirname = path.dirname(filename);

  const srcDir = path.join(dirname, '..', 'src');
  const templateDir = path.join(srcDir, 'template');

  const baseDir = path.join(templateDir, framework, 'base');
  const baseSrcDir = path.join(baseDir, 'src');
  const extraDir = path.join(templateDir, 'extra');

  if (style === UNO_CSS || style === TAIL_WIND_CSS) {
    console.log(chalk.yellow(`${style} is not supported, using default style`));
    process.exit(1);
  }

  fs.copySync(baseDir, projectDir);

  // const appVue = path.join(extraDir, 'src', 'App.vue');
  // const appVueDest = path.join(projectDir, 'src', 'App.vue');

  // fs.copyFileSync(appVue, appVueDest);

  // fs.copyFileSync(path.join(extraDir, 'main', 'main.ts'), path.join(projectDir, 'src', 'main.ts'));

  // if (hasBackend) {
  //   const backendDir = path.join(projectDir, 'server');
  //   fs.mkdirSync(backendDir, { recursive: true });
  //   fs.copySync(path.join(templateDir, 'server'), backendDir);
  // }
}
