#!/bin/bash

message=$1

git add .

git commit -m "$message"

git push

ng build

cp -R dist/alumni/ ../admin-jnvnaa

cd ../admin-jnvnaa

git add .

git commit -m "$message"

git push
