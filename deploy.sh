#!/usr/bin/env sh

# 發生錯誤時執行終止指令
set -e

# 打包編譯
npm run build

cd dist

git init
git add -A
git commit -m 'path fixed'
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
git push -f https://github.com/joyce103/v_portfolio.git master:gh-pages

cd -
