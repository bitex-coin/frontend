// This file was automatically generated from algorithm_selector.default.soy.
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
  output += '<form id="' + soy.$$escapeHtml(opt_data.id) + '_form" class="algo-selector form-horizontal well" ><div class="control-group"><label class="control-label" for="' + soy.$$escapeHtml(opt_data.id) + '_filename">' + MSG_UNNAMED_37 + '</label><div class="controls"><div class="input-append" data-original-title="" title=""><input id="' + soy.$$escapeHtml(opt_data.id) + '_filename" type="text" class="input-xxlarge" disabled="disabled" /><button id="' + soy.$$escapeHtml(opt_data.id) + '_btn_clear" type="button" class="btn btn-default" style="display:none;"><span class="glyphicon glyphicon-remove"></span> ' + MSG_UNNAMED_39 + '</button><div id="' + soy.$$escapeHtml(opt_data.id) + '_btn_browse_container" class="btn btn-default" style=" position: relative;  overflow: hidden;  margin: 0px;"><span class="glyphicon glyphicon-folder-open"></span><span id="' + soy.$$escapeHtml(opt_data.id) + '_btn_browse" style="margin-left:2px">' + MSG_UNNAMED_41 + '</span><input id="' + soy.$$escapeHtml(opt_data.id) + '_file" type="file" accept=".algo" style=" position: absolute; top: 0; right: 0; margin: 0; padding: 0; font-size: 20px; cursor: pointer; opacity: 0; filter: alpha(opacity=0);" /></div></div><a href="https://github.com/blinktrade/algorithm-trading/" target="_blank">' + MSG_UNNAMED_43 + '</a></div></div></form>';
  return output;
};
