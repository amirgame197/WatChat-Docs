# Docusaurus Documentation

Ready for GitHub Pages. You do **not** need Node.js, npm, or Docusaurus installed locally.

## GitHub setup

1. Create a new **public** GitHub repository.
2. Upload the contents of this folder to it.
3. Make sure the default branch is `main`.
4. Open **Settings → Pages**.
5. Under **Build and deployment**, choose **GitHub Actions**.
6. Open **Actions** and let `Deploy Docusaurus to GitHub Pages` finish.

Your site will then be available at:

`https://YOUR_USERNAME.github.io/YOUR_REPOSITORY/`

## Writing docs

Edit or add Markdown files inside `docs/`. Push/commit to `main` and GitHub automatically rebuilds the site.

## Custom domain

GitHub Pages supports custom domains. When you are ready, put your domain in `static/CNAME`, for example:

```text
docs.example.com
```

Then set the same domain in **Settings → Pages → Custom domain** and configure its DNS. The Docusaurus config automatically detects `static/CNAME` and switches to the root `/` base path when that file exists.

## Stack

- Docusaurus 3.10.2
- GitHub Actions
- GitHub Pages
- Markdown / MDX
