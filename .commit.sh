#!/bin/bash

cd /Users/yan/WebstormProjects/jobboard

git update-index --assume-unchanged .commit.sh
git add .
git commit -m "fix width header bag"
git push
git update-index --no-assume-unchanged .commit.sh
