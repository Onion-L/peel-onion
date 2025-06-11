import path from 'path';
import fs from 'fs-extra';
import { fileURLToPath } from 'url';

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

  const templateDir = path.join(dirname, '..', 'src', 'template');
  const frameworkDir = path.join(templateDir, framework, 'base');

  fs.copySync(frameworkDir, projectDir);
  if (hasBackend) {
    const backendDir = path.join(projectDir, 'server');
    fs.mkdirSync(backendDir, { recursive: true });
    fs.copySync(path.join(templateDir, 'server'), backendDir);
  }
}
