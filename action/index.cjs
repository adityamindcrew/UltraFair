const core = require('@actions/core');
const fs = require('fs');
const path = require('path');

function findJSFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      findJSFiles(fullPath, fileList);
    } else if (file.endsWith('.js') || file.endsWith('.jsx')) {
      fileList.push(fullPath);
    }
  });
  return fileList;
}

function reviewReactCode() {
  const srcDir = path.join(process.cwd(), 'src');
  if (!fs.existsSync(srcDir)) {
    core.warning('No src/ directory found. Is this a React project?');
    return;
  }

  const jsFiles = findJSFiles(srcDir);
  core.info(`📁 Found ${jsFiles.length} JS/JSX files.`);

  jsFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    if (content.includes('console.log')) {
      core.warning(`⚠️ Avoid using console.log in production — found in ${file}`);
    }
  });
}

try {
  core.startGroup('🔍 Reviewing React code...');
  reviewReactCode();
  core.endGroup();
} catch (error) {
  core.setFailed(`Action failed with error: ${error.message}`);
}
