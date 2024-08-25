#!/bin/bash

yum install wget -y

wget -qO- https://micromamba.snakepit.net/api/micromamba/linux-64/latest | tar -xvj bin/micromamba

./bin/micromamba shell init -s bash -p ~/micromamba
source ~/.bashrc

# activate the environment and install a new version of Python
micromamba activate
micromamba install python=3.11 -c conda-forge -y

# install the dependencies
python -m pip install -r requirements.txt

for f in ./built-in-wheels/*.whl; do python -m pip install "$f"; done
jupyter labextension enable jupyterlab-myst:executor
jupyter labextension list
jupyter server extension enable jupyterlab-myst
jupyter server extension list

# build the JupyterLite site
jupyter lite --version
jupyter lite build --contents content --output-dir dist

find . -name "*.js.map" -type f -exec rm {} \;
          
# jupyter lite build --output-dir dist
