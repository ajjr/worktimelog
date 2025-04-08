#!/usr/bin/env sh

# abort on errors
set -e
# install dependencies
npm ci
# build static files
npm run build

cd dist
# create a fresh new git repo in the output directory
git init
git add -A
git commit -m 'deploy'

# Force push to the "publishing source" of your GitHub pages site
# in this case, the gh-pages branch
git push -f git@github.com:ajjr/worktimelog.git main:gh-pages
# Back to previous directory (the root of your repo)
cd -
