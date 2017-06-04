#!/bin/bash

echo "Building javascript"
cd jsdev

echo "default theme"
LANG=en_US THEME=default sh build_release.sh
LANG=pt_BR THEME=default sh build_release.sh


echo "coinage theme"
LANG=en_US THEME=coinage sh build_release.sh
LANG=pt_BR THEME=coinage sh build_release.sh

echo "done"
cd ../
