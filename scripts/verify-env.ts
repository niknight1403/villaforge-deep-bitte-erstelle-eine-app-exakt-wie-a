import { existsSync } from 'fs';
import { resolve } from 'path';

/**
 * Guard script to verify project environment before build/run.
 * Checks for critical dependencies and configuration files.
 */
const requiredFiles = ['package.json', 'tailwind.config.ts', 'next.config.js'];

function verifyEnvironment() {
  console.log('--- Aurora Companion Studio: Environment Check ---');
  let success = true;

  requiredFiles.forEach(file => {
    if (!existsSync(resolve(process.cwd(), file))) {
      console.error(`[ERROR] Missing critical file: ${file}`);
      success = false;
    } else {
      console.log(`[OK] Found: ${file}`);
    }
  });

  if (!success) {
    process.exit(1);
  }
  console.log('[SUCCESS] Environment verified. Ready for operation.');
}

verifyEnvironment();