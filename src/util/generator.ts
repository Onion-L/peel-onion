import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import chalk from 'chalk';
import { REACT } from '@/const.ts';
import copyTemplate from './copyTemplate.ts';
import * as prompts from '@clack/prompts';
// import { fileURLToPath } from 'url';
// import { copyTemplate } from './copyTemplate.ts';
// import { installDependencies } from './installDependencies.ts';

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

    console.log(language, style, framework, hasBackend);
    const git = await prompts.confirm({
      message: 'Do you want to initialize a Git repository?',
      initialValue: false,
    });

    if (git) {
      console.log(chalk.blue('Initializing Git repository...'));
      execSync('git init', { cwd: projectDir, stdio: 'ignore' });
    }

    // await installDependencies(projectDir, {
    //   language,
    //   style,
    //   framework,
    //   hasBackend,
    // });

    console.log(chalk.green('\n✅ Project created successfully!\n'));
    console.log(`  cd ${appName}`);
    console.log('  npm run dev\n');
  } catch (error) {
    console.error(chalk.red('Project creation failed:'), error);
    fs.rmSync(projectDir, { recursive: true });
    process.exit(1);
  }
}
