#!/usr/bin/env sh

# abort on errors
set -e

make build
cd dist
cp .CNAME CNAME

git add -A
git commit -m 'deploy'
git push -f git@github.com:gocantodev/website.git main

cd -
