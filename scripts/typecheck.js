import { execSync } from 'child_process';
try {
  execSync('npx tsc --noEmit', { stdio: 'inherit' });
  console.log('✅ Typecheck пройден');
} catch (error) {
  console.error('❌ Ошибка typecheck');
  process.exit(1);
}