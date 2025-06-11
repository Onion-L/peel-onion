import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import chalk from 'chalk';
import { REACT } from '@/const.ts';
import copyTemplate from './copyTemplate.ts';
import * as prompts from '@clack/prompts';

export async function generateProject(
  appName: string,
  language: string,
  style: string,
  framework: string,
  hasBackend: boolean
) {
  const projectDir = path.resolve(process.cwd(), appName);

  if (fs.existsSync(projectDir)) {
    console.log(chalk.red(`Error: Directory ${appName} already exists`));
    process.exit(1);
  }

  if (framework === REACT) {
    console.log(chalk.red('React is not supported yet'));
    process.exit(1);
  }

  fs.mkdirSync(projectDir, { recursive: true });

  try {
    await copyTemplate(projectDir, {
      language,
      style,
      framework,
      hasBackend,
    });

    const wantInstall = await prompts.confirm({
      message: 'Do you want to install all dependencies?',
      initialValue: false,
    });

    if (wantInstall) {
      const pkgInstall = await prompts.select({
        message: 'Select package manager',
        options: [
          { value: 'npm', label: 'npm' },
          { value: 'yarn', label: 'yarn' },
          { value: 'pnpm', label: 'pnpm' },
          { value: 'bun', label: 'bun' },
        ],
        initialValue: 'npm',
      });
      console.log(chalk.blue('Installing dependencies...'));
      execSync(`${String(pkgInstall)} install`, { cwd: projectDir, stdio: 'ignore' });
    }

    console.log(chalk.green('\n✅ Project created successfully!\n'));
  } catch (error) {
    console.error(chalk.red('Project creation failed:'), error);
    fs.rmSync(projectDir, { recursive: true });
    process.exit(1);
  }
}
