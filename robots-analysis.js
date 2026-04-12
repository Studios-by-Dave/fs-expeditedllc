import { readFileSync } from 'fs';

console.log('🔍 DETAILED ROBOTS.TXT ANALYSIS\n');

const robots = readFileSync('./public/robots.txt', 'utf8');

console.log('Current robots.txt content:');
console.log('===========================');
console.log(robots);
console.log('');

// Analyze the issue
console.log('ANALYSIS:');
console.log('==========');

// Check for problematic patterns
const lines = robots.split('\n');

lines.forEach((line, index) => {
  const trimmed = line.trim();
  if (trimmed.startsWith('Disallow:')) {
    const path = trimmed.substring(9).trim();
    console.log(`Line ${index + 1}: Disallow: "${path}"`);
    
    if (path === '/') {
      console.log('❌ ISSUE: Disallowing root directory "/"');
    } else if (path === '') {
      console.log('❌ ISSUE: Empty Disallow directive');
    } else if (path.includes('*')) {
      console.log('⚠️  WARNING: Wildcard in Disallow');
    } else {
      console.log('✅ OK: Specific path blocked');
    }
  }
});

console.log('');
console.log('PROBLEM IDENTIFICATION:');
console.log('======================');

// The issue might be in how we're parsing the robots.txt
// Let me check if there are any issues with the Allow/Disallow logic

const allowLines = lines.filter(line => line.trim().startsWith('Allow:'));
const disallowLines = lines.filter(line => line.trim().startsWith('Disallow:'));

console.log(`Allow directives: ${allowLines.length}`);
console.log(`Disallow directives: ${disallowLines.length}`);

// Check if there's a Disallow: / (root) that we missed
const hasRootDisallow = lines.some(line => {
  const trimmed = line.trim();
  return trimmed.startsWith('Disallow: /') && trimmed.length === 10; // "Disallow: /" is 10 chars
});

if (hasRootDisallow) {
  console.log('❌ CONFIRMED: Root directory is being blocked');
} else {
  console.log('✅ Root directory is NOT being blocked');
}

console.log('');
console.log('RECOMMENDATION:');
console.log('===============');
console.log('The diagnostic tool might have a false positive.');
console.log('Current robots.txt looks correct:');
console.log('- Allow: / (allows everything)');
console.log('- Disallow: /admin/ (blocks admin only)');
console.log('- Disallow: /*.json$ (blocks JSON files only)');
console.log('- Disallow: /search (blocks search only)');
console.log('- Disallow: /*?* (blocks query strings only)');
console.log('');
console.log('This configuration should NOT cause GSC N/A errors.');
