# alysia-website
Alysia's portfolio website built with the Bulma CSS framework

Live Website: alysiaburbidge.com

## How to develop locally

#### HTML
* Open the index.html file in a browser by going to this url: `file://<path/to/file>`
* Reload the page to see new changes reflected

#### CSS/SCSS
* Install the build tools with run `npm install`
* Add styles in the _sass/main.scss file. Then, compile the scss to css/main.css with `npm run deploy`

#### JS
* Changes to the JavaScript are made in _javascript/main.js. Recompile the js to lib/main.js with `npm run deploy`

#### Assets
* Add images to the assets/images folder
* Add files to the assets/files folder

## How to use git
```zsh
# Stage files
git add <path/to/file>

# Commit changes
git commit -m "<message>"

# Push to repo
git push
```
#### Side-notes:
1. Don't forget to `git pull` to download the latest changes
2. Use `git status` to see your currently staged files