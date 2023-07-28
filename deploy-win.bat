set arg1=%1

xcopy /S /I /E /Y .\dist\alumni\ ..\admin-jnvnaa

cd ../admin-jnvnaa

git add .

git commit -m %arg1%

git push