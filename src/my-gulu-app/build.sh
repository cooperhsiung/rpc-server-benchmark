#!/bin/bash

# exit immediately if pipeline/list/(compound command) returns non-zero status
# reference https://www.gnu.org/software/bash/manual/bash.html#The-Set-Builtin
set -e

# switch node version
. /etc/profile
nvm use lts/erbium
echo "node version is $(node -v)"

# clear node_modules soft links
rm -rf node_modules

# install dependencies
npm install --registry=http://bnpm.byted.org

# create the output directory
npm run build

# give bootstrap the perssion to execute
chmod a+x bootstrap.sh

# copy files
ls | grep -v output | xargs -I {} rsync -rl --exclude="node_modules" --exclude="**/*.ts" {} output
cp -RL node_modules output
