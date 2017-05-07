// This file was automatically generated from algorithm_selector.coinage.soy.
// Please don't edit this file by hand.

goog.provide('bitex.ui.AlgorithmSelector.templates');

goog.require('soy');


bitex.ui.AlgorithmSelector.templates.AlgorithmSelector = function(opt_data) {
  var output = '';
  /** @desc Algorithm input label */
  var MSG_UNNAMED_37 = goog.getMsg('Algorithm');
  /** @desc Clear button on algo selector */
  var MSG_UNNAMED_39 = goog.getMsg('Clear');
  /** @desc Browse button on algo selector */
  var MSG_UNNAMED_41 = goog.getMsg('Browse');
  /** @desc Help message that appears bellow the algorithm trading input box on the algorithm trading view */
  var MSG_UNNAMED_43 = goog.getMsg('Understand how the algorithm trading works');
  output += '<form id="' + soy.$$escapeHtml(opt_data.id) + '_form" class="algo-selector page__section_white page__padding"><!-- .algo --><div class="algo"><!-- .algo__head --><div class="algo__head"><label class="algo__label" for="' + soy.$$escapeHtml(opt_data.id) + '_filename">' + MSG_UNNAMED_37 + '</label></div><!-- /.algo__head --><!-- .algo__body --><div class="algo__body"><input id="' + soy.$$escapeHtml(opt_data.id) + '_filename" type="text" class="algo__input form-control" disabled="disabled" /><button id="' + soy.$$escapeHtml(opt_data.id) + '_btn_clear" type="button" class="algo__btn btn btn-danger" style="display:none;"><i class="glyphicon glyphicon-remove"></i> ' + MSG_UNNAMED_39 + '</button><div id="' + soy.$$escapeHtml(opt_data.id) + '_btn_browse_container" class="algo__btn algo__btn-file btn btn-success" style=""><i class="glyphicon glyphicon-folder-open"></i>&nbsp;<span id="' + soy.$$escapeHtml(opt_data.id) + '_btn_browse">' + MSG_UNNAMED_41 + '</span><input id="' + soy.$$escapeHtml(opt_data.id) + '_file" type="file" accept=".algo" style="" /></div></div><!-- /.algo__body --><!-- .algo__foot --><div class="algo__foot"><a href="https://github.com/blinktrade/algorithm-trading/" target="_blank">' + MSG_UNNAMED_43 + '</a></div><!-- /.algo__foot --></div><!-- /.algo --></form>';
  return output;
};
