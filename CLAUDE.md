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
bun start                # Build, watch for changes, and serve with live reload
bun run watch           # Watch files and rebuild on changes (excludes dist/)
bun run build           # Build HTML and PDF to dist/ directory
```

### Deployment
```bash
bun run deploy          # Build and deploy to gh-pages branch (one-time setup)
```

Note: After initial `bun run deploy`, GitHub Actions automatically handles deployments on push to `main`.

## Content Updates

To update CV content, edit `src/metadata/metadata.js`. This file exports an object with:
- `name`, `title`: Basic information
- `facts`: Contact information (supports HTML with Font Awesome icons)
- `positions`: Array of work positions with title, period, skills array, and markdown contents
- `experience`: Array of additional experiences with contents and skills

The template supports markdown in the `contents` fields of positions and experience items.

## CI/CD

GitHub Actions workflow (`.github/workflows/gh-pages.yml`) runs on every push to `main`:
1. Sets up Bun (latest version) on macOS runner
2. Runs `bun install` and `bun run build`
3. Deploys `dist/` folder to `gh-pages` branch

The site is then available at `https://{username}.github.io/{repo-name}`.

## Git Commit Conventions

Follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification:

```
<type>[optional scope]: <description>

[optional body]
```

**Types**: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`

**Important guidelines**:
- Focus on **WHY** the change was made, not what was changed (the diff shows the what)
- Keep the description concise but meaningful
- Use the body to explain motivation, context, or trade-offs when needed
- Do NOT add co-author attributions or "Generated with Claude Code" footers

**Examples**:
- `feat: add PDF download to improve accessibility for recruiters`
- `fix: correct margin calculation to prevent content overflow on print`
- `refactor: simplify build script to improve maintainability`
