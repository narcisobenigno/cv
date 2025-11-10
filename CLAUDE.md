# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal CV/resume website that automatically generates both HTML and PDF versions from a single source. The project uses HandlebarsJS templates with metadata to generate a static site that's automatically deployed to GitHub Pages on every push to `main`.

## Build System Architecture

The build process is orchestrated by `src/build.js`:

1. **Clears output**: Empties the `dist/` directory
2. **Copies assets**: Moves all files from `src/assets/` to `dist/`
3. **Compiles HTML**:
   - Reads the Handlebars template from `src/templates/index.html`
   - Injects metadata from `src/metadata/metadata.js`
   - Adds dynamic values: `baseUrl` (derived from git username/repo), `pdfFileName`, and `updated` timestamp
   - Writes compiled HTML to `dist/index.html`
4. **Generates PDF**: Uses Puppeteer to convert the HTML to PDF with A4 format and 2.54cm margins

### Template System

- **Template engine**: HandlebarsJS
- **Main template**: `src/templates/index.html` - Contains the HTML structure and Handlebars expressions
- **Metadata source**: `src/metadata/metadata.js` - JavaScript module exporting CV data (name, title, facts, positions, experience)
- **Custom helpers**: `markdown` helper (registered in build.js) converts markdown to HTML using the `markdown` package

## Common Commands

### Development
```bash
npm start                # Build, watch for changes, and serve with live reload
npm run watch           # Watch files and rebuild on changes (excludes dist/)
npm run build           # Build HTML and PDF to dist/ directory
```

### Deployment
```bash
npm run deploy          # Build and deploy to gh-pages branch (one-time setup)
```

Note: After initial `npm run deploy`, GitHub Actions automatically handles deployments on push to `main`.

## Content Updates

To update CV content, edit `src/metadata/metadata.js`. This file exports an object with:
- `name`, `title`: Basic information
- `facts`: Contact information (supports HTML with Font Awesome icons)
- `positions`: Array of work positions with title, period, skills array, and markdown contents
- `experience`: Array of additional experiences with contents and skills

The template supports markdown in the `contents` fields of positions and experience items.

## CI/CD

GitHub Actions workflow (`.github/workflows/gh-pages.yml`) runs on every push to `main`:
1. Sets up Node.js 18.x on macOS runner
2. Runs `npm install` and `npm run build`
3. Deploys `dist/` folder to `gh-pages` branch

The site is then available at `https://{username}.github.io/{repo-name}`.

## Git Commit Conventions

When creating commits, do NOT add co-author attributions or "Generated with Claude Code" footers. The repository owner will handle commit authorship through their own git configuration.
