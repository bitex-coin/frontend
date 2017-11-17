#!/bin/bash

java -jar ./tools/SoyToJsSrcCompiler.jar --bidiGlobalDir 1 --shouldGenerateGoogMsgDefs \
  --shouldProvideRequireSoyNamespaces --codeStyle concat --cssHandlingScheme GOOG  \
  --outputPathFormat  './bitex/templates/{INPUT_FILE_NAME_NO_EXT}.soy.js' \
  ./bitex/templates/templates.merchant.soy

python ./closure-library/closure/bin/build/closurebuilder.py  \
  --root=./closure-library/ \
  --root=./closure-bootstrap/javascript/ \
  --root=./scottlogic/ \
  --root=./libphonenumber/i18n/phonenumbers/ \
  --root=./uniform/ \
  --root=./expression_evaluator/ \
  --root=./bitex \
  --namespace=bitex.app.MerchantApp \
  --output_mode=compiled \
  --compiler_jar=./tools/compiler.jar \
  --compiler_flags="--compilation_level=ADVANCED_OPTIMIZATIONS" \
  --compiler_flags="--define=goog.DEBUG=0" \
  --compiler_flags="--define=goog.LOCALE='en_US'" \
  --compiler_flags="--externs=./externs/google.js" \
  --compiler_flags="--externs=./externs/plusone.js" \
  --compiler_flags="--externs=./externs/jquery-1.9.js" \
  --compiler_flags="--externs=./externs/twitter-bootstrap.js" \
  --compiler_flags="--externs=./externs/parsley.js" \
  --compiler_flags="--externs=./externs/sticky.js" \
  --compiler_flags="--externs=./externs/jquerymobile-1.4.3.js" \
  --compiler_flags="--debug=TRUE" \
  --compiler_flags="--formatting=PRETTY_PRINT" \
  --compiler_flags="--formatting=PRINT_INPUT_DELIMITER" \
  --compiler_flags="--externs=./externs/facebook_javascript_sdk.js" \
  --compiler_flags="--translations_project='bitex'" \
  --compiler_flags="--translations_file=./translations/en_US.xtb.xml" \
   > ../assets/js/bitex_app_merchant.compiled.en_US.js
