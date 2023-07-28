:: ng build --base-href /content/
set arg1=%1

git add .

git commit -m %arg1%

git push

ng build