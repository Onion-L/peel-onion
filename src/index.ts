#!/usr/bin/env node
import showTitle from '@/util/showTitle.ts';
import cli from '@/cli/index.ts';
// import getPkgManager from '@/util/getPkgManager.ts';

function main() {
  const result = cli();

  console.log(result);

  // const pkgManager = getPkgManager();
  showTitle();
}

main();
