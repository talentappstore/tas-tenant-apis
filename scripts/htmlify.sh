#!/bin/bash

# http://stackoverflow.com/questions/6393551/what-is-the-meaning-of-0-in-a-bash-script
cd ${0%/*}

echo "<html><body><h1>TAS tenant APIs</h1><table><thead><tr><td>RAML</td><td>HTML</td></tr></thead><tbody" > ../index.html

for f in ../raml/*
do
  b=$(basename $f)
  echo "Generating $f.html from $f"
  raml2html -i $f -o ../generated/$b.html
  echo "<tr><td><a href='../raml/$b'>$b</a></td><td></td></tr>" >> ../index.html
done

echo "</tbody></table></body></html>" >> ../index.html



