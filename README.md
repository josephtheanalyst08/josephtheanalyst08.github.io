# Joseph Ekpoh – Data Analyst Portfolio

A responsive (desktop + phone) 3-page portfolio built with plain HTML, CSS and JavaScript. No installs or build tools needed.

## Open the site
Double-click `index.html`. To publish, upload the whole folder to any host (Netlify, GitHub Pages, Vercel, cPanel...).

## Folder structure
```
index.html          Homepage
about-me.html       About Me page
projects.html       Projects page (with filters)
404.html            "Page not found" page
favicon.ico         Browser tab icon
robots.txt          Search engine instructions
css/style.css       All styling (colours/fonts at the top in :root)
js/main.js          Mobile menu + scroll-reveal animation
js/projects.js      Project filter buttons
assets/images/      Photos, logo, project images
assets/icons/       Excel, SQL Server, Power BI logos
assets/cv/          Put your CV here
```

## Things you must do
1. **CV button:** save your CV as `assets/cv/Joseph-Ekpoh-CV.pdf` (same name).
2. **Social links:** in all three pages, replace each `href="#"` next to the LinkedIn / GitHub / X icons with your real profile URLs. Search for `TODO`.
3. **Project links:** replace `href="#"` on each "View Project" button.

## Adding a new project
1. Put the image in `assets/images/` (about 1200 x 675).
2. Open `projects.html`, copy one whole `<article class="project-card"> ... </article>` block and paste it inside the grid.
3. Edit the image, title, tags, description and link.
4. Set `data-category` to `excel`, `powerbi`, `sql` (or several separated by spaces).

The page just gets longer; the footer stays at the bottom automatically.

## Adding a new filter (e.g. Python)
Add `<button class="filter-btn" type="button" data-filter="python" aria-pressed="false">Python</button>` next to the others, then use `python` in the `data-category` of matching cards.

## Changing colours and fonts
Top of `css/style.css`: `--brown #643C3A`, `--orange #C55E02`, `--gold #C88034`, white `#FFFFFF`; fonts Manrope (headers) and Space Grotesk (body, loaded from Google Fonts, so an internet connection is needed to see them).

## Animation
Elements with class `reveal` fade in as you scroll. Add `class="reveal"` to animate anything new.
