#!/usr/bin/env node
import showTitle from '@/util/showTitle.ts';
import cli from '@/cli/index.ts';
import { generateProject } from '@/util/generator.ts';
// import getPkgManager from '@/util/getPkgManager.ts';

async function main() {
  showTitle();
  const { appName, language, style, framework, hasBackend } = await cli();
  console.log(appName, language, style, framework, hasBackend);

  generateProject(appName, language, style, framework, hasBackend);
  // const pkgManager = getPkgManager();
}

main();
