#!/bin/bash

message=$1

ng build --base-href /content/

cp -R dist/alumni/ ../content

cd ../content

git add .

git commit -m "$message"

git push
