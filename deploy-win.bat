set arg1=%1

ng build

xcopy /S /I /E .\dist\alumni\ ..\admin-jnvnaa

cd ../admin-jnvnaa

git add .

git commit -m %arg1%

git push
