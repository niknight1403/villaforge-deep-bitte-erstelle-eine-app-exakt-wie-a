import { mkdirSync, copyFileSync, existsSync } from 'node:fs';
if (!existsSync('mybabes-app.html')) {
  console.error('mybabes-app.html fehlt');
  process.exit(1);
}
mkdirSync('dist', { recursive: true });
copyFileSync('mybabes-app.html', 'dist/index.html');
console.log('dist/index.html = mybabes-app.html (' + (await import('node:fs')).statSync('dist/index.html').size + ' Bytes)');
