const handlebars = require('handlebars');
const fs = require('fs-extra');
const markdownHelper = require('./utils/helpers/markdown');
const templateData = require('./metadata/metadata');
const getSlug = require('speakingurl');
const dayjs = require('dayjs');
const { execSync } = require('child_process');
const buildPdf = require('./utils/pdf.js');

const srcDir = __dirname;
const outputDir = __dirname + '/../dist';

// Get git info from remote URL
function getGitInfo() {
  try {
    const remoteUrl = execSync('git config --get remote.origin.url', { encoding: 'utf-8' }).trim();
    // Match patterns like:
    // https://github.com/username/repo.git
    // git@github.com:username/repo.git
    // http://github.com/username/repo
    const match = remoteUrl.match(/github\.com[:/]([^/]+)\/(.+?)(\.git)?$/);
    if (match) {
      return {
        username: match[1],
        repoName: match[2]
      };
    }
  } catch (error) {
    console.warn('Could not extract git info from remote URL:', error.message);
  }
  // Fallback values
  return {
    username: 'username',
    repoName: 'cv'
  };
}

const { username, repoName } = getGitInfo();

// Clear dist dir
fs.emptyDirSync(outputDir);

// Copy assets
fs.copySync(srcDir + '/assets', outputDir);

// Build HTML
handlebars.registerHelper('markdown', markdownHelper);
const source = fs.readFileSync(srcDir + '/templates/index.html', 'utf-8');
const template = handlebars.compile(source);
const pdfFileName = `${getSlug(templateData.name)}.${getSlug(templateData.title)}.pdf`;
const coverLetterFileName = `${getSlug(templateData.name)}.${getSlug(templateData.title)}.cover-letter.pdf`;
const updated = dayjs().format('MMMM D, YYYY');

const html = template({
  ...templateData,
  baseUrl: `https://${username}.github.io/${repoName}`,
  pdfFileName,
  coverLetterFileName,
  updated,
});

fs.writeFileSync(outputDir + '/index.html', html);

// Build cover letter HTML
const coverLetterSource = fs.readFileSync(srcDir + '/templates/cover-letter.html', 'utf-8');
const coverLetterTemplate = handlebars.compile(coverLetterSource);
const coverLetterHtml = coverLetterTemplate({
  ...templateData,
  coverLetterFileName,
  updated,
});

fs.writeFileSync(outputDir + '/cover-letter.html', coverLetterHtml);

// Build PDFs
(async () => {
  await buildPdf(`${outputDir}/index.html`, `${outputDir}/${pdfFileName}`);
  await buildPdf(`${outputDir}/cover-letter.html`, `${outputDir}/${coverLetterFileName}`);
})();
