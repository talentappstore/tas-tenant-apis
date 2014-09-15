#!/bin/bash

for f in ../raml/*.raml
do
  b=$(basename $f)
  echo "Generating ../generated/$f.html from $f"
  raml2html -i $f -o ../generated/$b.html
done

