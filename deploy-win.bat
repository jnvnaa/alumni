set arg1=%1

git add .

git commit -m %arg1%

ng build

xcopy /S /I /E /Y .\dist\alumni\ ..\content2

cd ../content2

git add .

git commit -m %arg1%

git push
