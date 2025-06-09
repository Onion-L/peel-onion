import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs-extra';

export default function getVersion() {
  const filename = fileURLToPath(import.meta.url);
  const dirname = path.dirname(filename);
  const ROOT_DIR = path.resolve(dirname, '..');
  const packageJson = path.resolve(ROOT_DIR, 'package.json');
  const packageJsonContent = fs.readFileSync(packageJson, 'utf-8');
  const { version } = JSON.parse(packageJsonContent);

  return version;
}
