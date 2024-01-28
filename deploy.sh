# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

# git init
# git checkout -b main
git add -A
git commit -m 'deploy'

# if you are deploying to https://yoman666.github.io/
# git push -f git@github.com:yoman666/yoman666.github.io.git main
# git push -f https://github.com/Yoman666/week-6.git main

# if you are deploying to https://yoman666.github.io/week-6
git push -f https://github.com/aaron00366/aaronVueProject.git main:gh-pages


cd -